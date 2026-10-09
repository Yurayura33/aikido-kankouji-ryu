import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import Lineage from '../../src/components/Lineage.astro';
import { aikido } from '../../src/data/aikido';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

describe('Lineage', () => {
  it('is an ordered list that screen readers still announce as a list', async () => {
    const html = await container.renderToString(Lineage);

    expect(html).toMatch(/<ol class="lineage" role="list">/);
  });

  it('shows each step with its own photo and caption, in order', async () => {
    const html = await container.renderToString(Lineage);
    const steps = html.split('<li').slice(1);

    expect(steps).toHaveLength(3);
    const expected = [
      { name: 'Montserrat Monastery (Spain)', photo: 'lineage-montserrat' },
      { name: 'Father Estanislau', photo: 'lineage-estanislau' },
      { name: 'Prof. Kunio Yasue', photo: 'lineage-yasue' },
    ];
    expected.forEach(({ name, photo }, i) => {
      const alt = aikido.lineage.steps[i].imageAlt;
      expect(steps[i]).toContain(`>${name}</h3>`);
      expect(steps[i]).toContain(photo);
      expect(steps[i]).toContain(`alt="${alt}"`);
    });
  });

  it('ends with the invitation to train in the UK', async () => {
    const html = await container.renderToString(Lineage);

    expect(html).toContain('for the first time outside of Japan');
    expect(html.lastIndexOf('</ol>')).toBeLessThan(html.indexOf('lineage__callout'));
  });
});
