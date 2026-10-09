import { defineConfig, devices } from '@playwright/test';

// Well clear of 4321+, which `astro dev` takes (and counts up from) in this and other projects.
const PORT = 4390;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  forbidOnly: !!process.env.CI,
  use: {
    baseURL,
  },
  // Test the production build, so the CSP and processed images are what visitors get.
  // Never reuse a server: if the port is taken, fail rather than test whatever is on it.
  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: false,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
