// @vitest-environment happy-dom
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';

// public/ files can't be imported (Vite serves them as-is), so run the script's source directly.
// Resolved from the project root: under happy-dom, import.meta.url is not a file: URL.
const navScript = readFileSync(resolve(process.cwd(), 'public/nav.js'), 'utf8');

// The markup Header.astro renders (see header.test.ts), plus a link elsewhere on the page.
function renderPage() {
  document.body.innerHTML = `
    <nav class="nav" aria-label="Main navigation">
      <button type="button" class="nav__toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-links"></button>
      <ul id="nav-links" class="nav__links">
        <li><a href="#about" class="nav__link">About</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </nav>
    <main><a href="#elsewhere" id="elsewhere">Elsewhere</a></main>
  `;
  new Function(navScript)();
}

const button = () => document.querySelector<HTMLButtonElement>('.nav__toggle')!;
const link = (name: string) =>
  [...document.querySelectorAll<HTMLAnchorElement>('a')].find((a) => a.textContent === name)!;
const pressEscape = () =>
  (document.activeElement ?? document.body).dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

beforeEach(renderPage);

describe('nav.js menu button', () => {
  it('starts closed', () => {
    expect(button().getAttribute('aria-expanded')).toBe('false');
  });

  it('opens and closes on each press', () => {
    button().click();
    expect(button().getAttribute('aria-expanded')).toBe('true');

    button().click();
    expect(button().getAttribute('aria-expanded')).toBe('false');
  });

  it('closes when a menu link is followed', () => {
    button().click();
    link('About').click();

    expect(button().getAttribute('aria-expanded')).toBe('false');
  });

  it('closes on Escape and returns focus to the button when focus was in the menu', () => {
    button().click();
    link('Contact').focus();
    pressEscape();

    expect(button().getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(button());
  });

  it('closes on Escape but leaves focus alone when it was elsewhere on the page', () => {
    button().click();
    link('Elsewhere').focus();
    pressEscape();

    expect(button().getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(link('Elsewhere'));
  });

  it('ignores Escape while the menu is closed', () => {
    link('Contact').focus();
    pressEscape();

    expect(button().getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(link('Contact'));
  });
});
