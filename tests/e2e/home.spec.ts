import { test, expect } from '@playwright/test';

test.describe('Kankouji-ryu Aiki and lineage sections', () => {
  test('explain the style and its lineage', async ({ page }) => {
    await page.goto('/');
    const aiki = page.locator('#kankouji-ryu-aiki');

    await expect(aiki.getByRole('heading', { name: 'What is Kankouji-ryu Aiki?' })).toBeVisible();
    await expect(aiki.getByText(/How can the teaching “Love your enemies” be practised through Budo\?/)).toBeVisible();
    await expect(aiki.getByText(/teachings of love from Jesus Christ with Aikido/)).toBeVisible();

    const lineage = page.locator('#lineage');
    await expect(lineage.getByRole('heading', { level: 2 })).toHaveText('The Lineage and History');
    await expect(lineage.locator('ol > li').getByRole('heading')).toHaveText([
      'Montserrat Monastery (Spain)',
      'Father Estanislau',
      'Prof. Kunio Yasue',
    ]);
    await expect(lineage.getByText(/for the first time outside of Japan/)).toBeVisible();
  });

  test('come straight after "What is Aikido?"', async ({ page }) => {
    await page.goto('/');

    const order = await page.locator('main > section[id]').evaluateAll((sections) => sections.map((s) => s.id));
    expect(order.slice(0, 4)).toEqual(['about', 'kankouji-ryu-aiki', 'lineage', 'instructor']);
  });

  test('headings have no Japanese subtitle but keep their spacing', async ({ page }) => {
    await page.goto('/');

    for (const section of ['#kankouji-ryu-aiki', '#lineage']) {
      await expect(page.locator(`${section} .section__subtitle`)).toHaveCount(0);
      const gap = await page
        .locator(`${section} .section__title`)
        .evaluate((el) => parseFloat(getComputedStyle(el).marginBottom));
      expect(gap, section).toBeGreaterThanOrEqual(32);
    }
  });

  test('show each lineage photo', async ({ page }) => {
    await page.goto('/');
    const photos = page.locator('#lineage img');
    await expect(photos).toHaveCount(3);

    for (const photo of await photos.all()) {
      await photo.scrollIntoViewIfNeeded();
      await expect(photo).toHaveAttribute('alt', /\S/);
      await expect
        .poll(() => photo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth))
        .toBeGreaterThan(0);
    }
  });
});

test.describe('Menu', () => {
  test('jumps to the Kankouji-ryu Aiki section', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'Kankouji-ryu Aiki' }).click();

    await expect(page).toHaveURL(/\/#kankouji-ryu-aiki$/);
    await expect(page.getByRole('heading', { name: 'What is Kankouji-ryu Aiki?' })).toBeInViewport();
  });

  test('on a phone reaches the Kankouji-ryu Aiki section', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await page.getByLabel('Toggle menu').click();
    await page.getByRole('navigation').getByRole('link', { name: 'Kankouji-ryu Aiki' }).click();

    await expect(page.getByRole('heading', { name: 'What is Kankouji-ryu Aiki?' })).toBeInViewport();
  });

  test('on the privacy page leads back to the Kankouji-ryu Aiki section', async ({ page }) => {
    await page.goto('/privacy');
    await page.getByRole('navigation').getByRole('link', { name: 'Kankouji-ryu Aiki' }).click();

    await expect(page).toHaveURL(/\/#kankouji-ryu-aiki$/);
    await expect(page.getByRole('heading', { name: 'What is Kankouji-ryu Aiki?' })).toBeInViewport();
  });

  for (const path of ['/', '/privacy']) {
    test(`on ${path} stays on one line at tablet width`, async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto(path);

      const inner = page.locator('.nav__inner');
      expect(await inner.evaluate((el) => el.scrollWidth <= el.clientWidth)).toBe(true);
      for (const link of await page.locator('.nav__link').all()) {
        expect(await link.evaluate((el) => el.getClientRects().length), await link.innerText()).toBe(1);
      }
    });
  }

  // Visitors who raise the browser's default font size (e.g. Chrome's "Large" = 20px).
  for (const fontSize of [16, 20, 24]) {
    test(`keeps every link on screen with ${fontSize}px browser text`, async ({ page }) => {
      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Page.setFontSizes', { fontSizes: { standard: fontSize } });

      for (const width of [768, 820, 900, 1024, 1280]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto('/');
        expect(await page.evaluate(() => getComputedStyle(document.documentElement).fontSize)).toBe(`${fontSize}px`);

        const toggle = page.getByLabel('Toggle menu');
        if (await toggle.isVisible()) await toggle.click();

        for (const link of await page.locator('.nav__link').all()) {
          const where = `"${await link.innerText()}" at ${width}px`;
          const box = (await link.boundingBox())!;
          expect(box.x, where).toBeGreaterThanOrEqual(0);
          expect(box.x + box.width, where).toBeLessThanOrEqual(width);
          expect(await link.evaluate((el) => el.getClientRects().length), where).toBe(1);
        }
      }
    });
  }

  test('on a phone separates the links with dividers', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await page.getByLabel('Toggle menu').click();

    const dividers = await page
      .locator('.nav__link')
      .evaluateAll((links) => links.map((link) => getComputedStyle(link).borderBottomWidth));
    expect(dividers).toEqual(['1px', '1px', '1px', '1px', '1px', '0px']);
  });
});

test.describe('Home page', () => {
  test('shows the instructor details from the flyer', async ({ page }) => {
    await page.goto('/');
    const instructor = page.locator('#instructor');

    await expect(instructor.getByRole('heading', { name: 'Joseph (Koken)' })).toBeVisible();
    await expect(instructor.getByText('7th Dan — Kankouji-ryu Aiki')).toBeVisible();
    await expect(instructor.getByText(/In 25 years of martial arts training/)).toBeVisible();
    await expect(instructor.getByRole('img')).toHaveAttribute('alt', 'Joseph (Koken), 7th Dan of Kankouji-ryu Aiki');
  });

  test('lists the fees under First Visit', async ({ page }) => {
    await page.goto('/');
    const firstVisit = page.locator('#first-visit');

    await expect(firstVisit.getByText('Your first class is free. After that:')).toBeVisible();
    await expect(firstVisit.locator('.first-visit__fee dt')).toHaveText(['Twice a week', 'Once a week', 'Drop-in']);
    await expect(firstVisit.locator('.first-visit__fee dd')).toHaveText([
      '£50 / month',
      '£30 / month',
      '£10 per class',
    ]);
  });

  test('contacts no other site and logs no errors until the visitor asks', async ({ page, baseURL }) => {
    const ownOrigin = new URL(baseURL!).origin;
    const otherOrigins = new Set<string>();
    const errors: string[] = [];
    page.on('request', (request) => {
      const { origin, protocol } = new URL(request.url());
      if (protocol !== 'data:' && origin !== ownOrigin) otherOrigins.add(origin);
    });
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto('/');
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.waitForLoadState('networkidle');

    expect([...otherOrigins]).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('fits a phone screen without sideways scrolling', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBe(0);
  });
});
