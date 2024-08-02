import { expect, test } from "@playwright/test";
import { LoginPage } from "./page-objects/loginPage";

test.describe("Login", () => {
  test("should login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login("admin", "admin1234");

    await expect(page.getByText(/dashboard/i)).toBeVisible();
    await expect(page.getByText(/logout/i)).toBeVisible();
  });
  test("should not login successfully, wrong credential", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login("admin55", "password");

    await expect(page.getByText(/wrong username/i)).toBeVisible();
  });
  test("should login then logout", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login("admin", "admin1234");

    await expect(page.getByText(/logout/i)).toBeVisible();
    await page.getByRole("link", { name: /logout/i }).click();

    await expect(page.getByText(/welcome back/i)).toBeVisible();
  });
  test("should login then change account", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login("admin", "admin1234");

    await expect(page.getByText(/change account/i)).toBeVisible();
    await page.getByRole("link", { name: /change account/i }).click();

    await expect(page.getByText(/welcome back/i)).toBeVisible();
  });
});
