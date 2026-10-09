import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import FirstVisit from '../../src/components/FirstVisit.astro';

const baseProps = {
  id: 'first-visit',
  title: 'Your First Class',
  subtitle: 'はじめての方へ',
  items: [{ label: 'What to wear', text: 'Comfortable clothing.' }],
};

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

describe('FirstVisit', () => {
  it('lists each fee with its price, in order', async () => {
    const html = await container.renderToString(FirstVisit, {
      props: {
        ...baseProps,
        pricing: 'Your first class is free. After that:',
        fees: [
          { label: 'Twice a week', price: '£50 / month' },
          { label: 'Drop-in', price: '£10 per class' },
        ],
      },
    });

    expect(html).toContain('Your first class is free. After that:');
    const fees = [...html.matchAll(/<dt[^>]*>([^<]*)<\/dt>\s*<dd[^>]*>([^<]*)<\/dd>/g)]
      .filter(([match]) => !match.includes('first-visit__label'))
      .map(([, label, price]) => [label, price]);
    expect(fees).toEqual([
      ['Twice a week', '£50 / month'],
      ['Drop-in', '£10 per class'],
    ]);
  });

  it('renders no fee list when there are no fees', async () => {
    const withEmptyList = await container.renderToString(FirstVisit, { props: { ...baseProps, fees: [] } });
    const withoutFees = await container.renderToString(FirstVisit, { props: baseProps });

    expect(withEmptyList).not.toContain('first-visit__fees');
    expect(withoutFees).not.toContain('first-visit__fees');
  });

  it('still renders the "what to know" items alongside the fees', async () => {
    const html = await container.renderToString(FirstVisit, {
      props: { ...baseProps, fees: [{ label: 'Drop-in', price: '£10 per class' }] },
    });

    expect(html).toContain('What to wear');
    expect(html).toContain('Comfortable clothing.');
  });
});
