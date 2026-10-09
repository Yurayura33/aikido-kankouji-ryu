import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import About from '../../src/components/About.astro';
import Contact from '../../src/components/Contact.astro';
import FirstVisit from '../../src/components/FirstVisit.astro';
import Hero from '../../src/components/Hero.astro';
import Instructor from '../../src/components/Instructor.astro';
import Videos from '../../src/components/Videos.astro';
import photo from '../../src/assets/image1.jpeg';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

const section = { id: 'test', title: 'Title', subtitle: '合気道とは' };

// Screen readers read text in the page language (English) unless it is marked otherwise.
describe('Japanese text is marked lang="ja"', () => {
  it('in the hero title', async () => {
    const html = await container.renderToString(Hero, {
      props: {
        titleJp: '合気道 冠光寺流',
        titleEn: 'Aikido Kankouji-ryu',
        tagline: 'Tagline',
        cta: 'Get in Touch',
        ctaHref: '#contact',
        image: photo,
        imageAlt: '',
      },
    });

    expect(html).toContain('<h1 class="hero__title-jp" lang="ja">合気道 冠光寺流</h1>');
  });

  it.each([
    ['About', About, { ...section, paragraphs: ['Text'] }],
    ['Instructor', Instructor, { ...section, name: 'Joseph', rank: '7th Dan', bios: [], image: photo, imageAlt: '' }],
    ['FirstVisit', FirstVisit, { ...section, items: [] }],
  ] as const)('in the %s subtitle', async (_, Component, props) => {
    const html = await container.renderToString(Component, { props });

    expect(html).toContain('<p class="section__subtitle" lang="ja">合気道とは</p>');
  });

  it.each([
    ['Videos', Videos, '動画・SNS'],
    ['Contact', Contact, 'お問い合わせ'],
  ] as const)('in the %s subtitle', async (_, Component, subtitle) => {
    const html = await container.renderToString(Component);

    expect(html).toContain(`<p class="section__subtitle" lang="ja">${subtitle}</p>`);
  });
});
