/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig(
  {
    test: {
      // Playwright owns tests/e2e; without this Vitest would try to run those specs too.
      include: ['tests/unit/**/*.test.ts'],
    },
  },
  // Otherwise rendered HTML carries the dev toolbar's data-astro-source-* attributes on every tag.
  { devToolbar: { enabled: false } },
);
