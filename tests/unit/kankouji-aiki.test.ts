import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import KankoujiAiki from '../../src/components/KankoujiAiki.astro';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

describe('KankoujiAiki', () => {
  it('is the section the menu link points to', async () => {
    const html = await container.renderToString(KankoujiAiki);

    expect(html).toMatch(/<section[^>]*id="kankouji-ryu-aiki"/);
    expect(html).toContain('What is Kankouji-ryu Aiki?');
  });

  it('highlights “Love your enemies” within the question', async () => {
    const html = await container.renderToString(KankoujiAiki);

    expect(html).toMatch(/How can the teaching <em>“Love your enemies”<\/em> be practised through Budo\?/);
  });

  it('marks every Japanese part of the name note as Japanese', async () => {
    const html = await container.renderToString(KankoujiAiki);

    const japanese = [...html.matchAll(/<span lang="ja">([^<]*)<\/span>/g)].map(([, text]) => text);
    expect(japanese).toEqual(['愛魂', '愛', '魂']);
    expect(html).toContain('from the characters for love (<span lang="ja">愛</span>) and soul (<span lang="ja">魂</span>).');
  });
});
