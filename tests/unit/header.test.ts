import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import Header from '../../src/components/Header.astro';

const headerProps = {
  brand: 'Aikido Kankouji-ryu',
  links: [
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ],
};

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

describe('Header', () => {
  it('has a real, initially closed menu button that controls the link list', async () => {
    const html = await container.renderToString(Header, { props: headerProps });

    expect(html).toMatch(
      /<button type="button" class="nav__toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">/,
    );
    expect(html).toMatch(/<ul id="nav-links" class="nav__links">/);
  });

  it('no longer uses a hidden checkbox, which keyboards could not reach', async () => {
    const html = await container.renderToString(Header, { props: headerProps });

    expect(html).not.toContain('type="checkbox"');
    expect(html).not.toContain('aria-hidden');
  });

  it('lists every link', async () => {
    const html = await container.renderToString(Header, { props: headerProps });

    const links = [...html.matchAll(/<a href="([^"]*)" class="nav__link">([^<]*)<\/a>/g)].map(([, href, label]) => [
      href,
      label,
    ]);
    expect(links).toEqual([
      ['#about', 'About'],
      ['#contact', 'Contact'],
    ]);
  });
});
