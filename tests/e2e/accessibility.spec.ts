import { test, expect, type Page } from '@playwright/test';

const menuButton = (page: Page) => page.getByRole('button', { name: 'Menu' });
const menuLink = (page: Page, name: string) => page.getByRole('navigation').getByRole('link', { name });

test.describe('Menu button with a keyboard', () => {
  // 375px is a phone; 640px is what a 1280px laptop shows when zoomed to 200%.
  for (const width of [375, 640]) {
    test(`at ${width}px can be reached, opened and closed`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/');

      await page.keyboard.press('Tab'); // skip link
      await page.keyboard.press('Tab'); // logo
      await page.keyboard.press('Tab');
      await expect(menuButton(page)).toBeFocused();
      await expect(menuButton(page)).toHaveAttribute('aria-expanded', 'false');
      await expect(menuLink(page, 'About')).toBeHidden();

      await page.keyboard.press('Enter');
      await expect(menuButton(page)).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Tab');
      await expect(menuLink(page, 'About')).toBeFocused();

      await page.keyboard.press('Escape');
      await expect(menuButton(page)).toHaveAttribute('aria-expanded', 'false');
      await expect(menuButton(page)).toBeFocused();
      await expect(menuLink(page, 'About')).toBeHidden();
    });
  }

  test('following a menu link closes the menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    await menuButton(page).focus();
    await page.keyboard.press('Space');
    await menuLink(page, 'Kankouji-ryu Aiki').focus();
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/#kankouji-ryu-aiki$/);
    await expect(menuButton(page)).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('heading', { name: 'What is Kankouji-ryu Aiki?' })).toBeInViewport();
  });

  test('is not shown when the full menu fits', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    await expect(menuButton(page)).toBeHidden();
    await expect(menuLink(page, 'About')).toBeVisible();
  });
});

test.describe('Japanese text', () => {
  for (const path of ['/', '/privacy']) {
    test(`on ${path} is all marked as Japanese for screen readers`, async ({ page }) => {
      await page.goto(path);

      const { marked, unmarked } = await page.evaluate(() => {
        const japanese = /[぀-ヿ㐀-鿿]/;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const result = { marked: 0, unmarked: [] as string[] };
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const text = node.textContent ?? '';
          if (!japanese.test(text)) continue;
          if (node.parentElement?.closest('[lang]')?.getAttribute('lang') === 'ja') result.marked++;
          else result.unmarked.push(text.trim());
        }
        return result;
      });

      expect(unmarked).toEqual([]);
      if (path === '/') expect(marked).toBeGreaterThan(0);
    });
  }
});

test.describe('Reduce motion setting', () => {
  test('stops the bouncing arrow and smooth scrolling', async ({ page }) => {
    const motion = () =>
      page.evaluate(() => ({
        arrow: getComputedStyle(document.querySelector('.hero__scroll')!).animationName,
        scrolling: getComputedStyle(document.documentElement).scrollBehavior,
      }));

    await page.goto('/');
    expect(await motion()).toEqual({ arrow: 'hero-bounce', scrolling: 'smooth' });

    await page.emulateMedia({ reducedMotion: 'reduce' });
    expect(await motion()).toEqual({ arrow: 'none', scrolling: 'auto' });
  });
});
