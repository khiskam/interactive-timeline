import { expect, test } from "@playwright/test";

const viewports = [
  { width: 1536, height: 1080 },
  { width: 1280, height: 800 },
  { width: 768, height: 1024 },
  { width: 660, height: 800 },
];

test.describe("Visual Regression Tests", () => {
  for (const vp of viewports) {
    test(`homepage should match screenshot at ${vp.width}px`, async({ page }) => {
      await page.setViewportSize(vp);
      await page.goto("/");

      await expect(page.locator(".splide")).toHaveCSS("opacity", "1", { timeout: 10000 });

      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot(`homepage-${vp.width}px.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.05,
      });
    });
  }
});
