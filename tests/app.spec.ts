import { expect, test } from "@playwright/test";

test.describe("Interactive Timeline App", () => {
  test.beforeEach(async({ page }) => {
    await page.goto("/");
  });

  test("should display initial Biology topic and update on timeline wheel click", async({ page }) => {
    await expect(page.getByLabel("start date")).toContainText("1859");
    await expect(page.getByLabel("end date")).toContainText("1996");

    await expect(page.getByText("Charles Darwin publishes his groundbreaking work", { exact: false })).toBeVisible();

    const artDot = page.getByRole("button", { name: "Select Art" });
    await artDot.click();

    await expect(page.locator(".splide")).toHaveCSS("opacity", "1");

    await expect(page.getByLabel("start date")).toContainText("1503");
    await expect(page.getByLabel("end date")).toContainText("1962");

    await expect(page.getByText("Leonardo da Vinci begins work", { exact: false })).toBeVisible();
  });

  test("should navigate topics using Prev and Next arrows", async({ page }) => {
    await expect(page.getByText("01 / 06")).toBeVisible();

    const nextButton = page.getByRole("button", { name: "next" }).first();
    await nextButton.click();

    await expect(page.getByText("02 / 06")).toBeVisible();
    await expect(page.getByText("Leonardo da Vinci begins work", { exact: false })).toBeVisible();

    await nextButton.click();

    await expect(page.getByText("03 / 06")).toBeVisible();
    await expect(page.getByText("William Shakespeare's tragedy exploring themes", { exact: false })).toBeVisible();

    const prevButton = page.getByRole("button", { name: "prev" }).first();
    await prevButton.click();

    await expect(page.getByText("02 / 06")).toBeVisible();
    await expect(page.getByText("Leonardo da Vinci begins work", { exact: false })).toBeVisible();
  });

  test("should wrap around when navigating past boundaries", async({ page }) => {
    const prevButton = page.getByRole("button", { name: "prev" }).first();
    await prevButton.click();

    await expect(page.getByText("06 / 06")).toBeVisible();
    await expect(page.getByText("The Electronic Numerical Integrator and Computer", { exact: false })).toBeVisible();
    await expect(page.getByLabel("start date")).toContainText("1943");
    await expect(page.getByLabel("end date")).toContainText("1991");

    const nextButton = page.getByRole("button", { name: "next" }).first();
    await nextButton.click();

    await expect(page.getByText("01 / 06")).toBeVisible();
    await expect(page.getByText("Charles Darwin publishes his groundbreaking work", { exact: false })).toBeVisible();
  });
});
