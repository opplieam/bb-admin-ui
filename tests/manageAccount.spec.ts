import { expect, test } from "@playwright/test";
import { LoginPage } from "./page-objects/loginPage";
import { ManageAccountPage } from "./page-objects/manageAccountPage";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  const username: string = "admin";
  const password: string = "admin1234";
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.login(username, password);
  await expect(page.getByText(/account management/i)).toBeVisible();
});

test.describe("Fetch all users", () => {
  test("should fetch all users", async ({ page }) => {
    const manageAccountPage = new ManageAccountPage(page);
    await manageAccountPage.visit();
    await expect(page.getByText(/^admin$/i)).toBeVisible();
  });
});

test.describe("Deactivate/Activate user", () => {
  test("should activate then deactivate admin pon", async ({ page }) => {
    const manageAccountPage = new ManageAccountPage(page);
    await manageAccountPage.visit();
    await expect(page.getByText(/^admin$/i)).toBeVisible();
    await manageAccountPage.setUserStatus("activate", "pon");
    await manageAccountPage.setUserStatus("deactivate", "pon");
    await expect(
      page
        .locator('//tr[td[text()="admin"]]')
        .getByRole("button", { name: /deactivate/i })
    ).toBeVisible();
  });
});

test.describe("Create admin", () => {
  test("should create a new admin", async ({ page }) => {
    const manageAccountPage = new ManageAccountPage(page);
    await manageAccountPage.visit();
    await expect(page.getByText(/create user/i)).toBeVisible();

    const username = faker.internet.userName();

    await manageAccountPage.createAdmin(username, "admin4321");
    await expect(
      page
        .locator(`//tr[td[contains(./text(),"${username}")]]`)
        .getByRole("button", { name: /deactivate/i })
    ).toBeVisible();
  });
  test("should not create duplicate admin", async ({ page }) => {
    const manageAccountPage = new ManageAccountPage(page);
    await manageAccountPage.visit();
    await expect(page.getByText(/create user/i)).toBeVisible();
    await manageAccountPage.createAdmin("admin", "admin1234");
    await expect(page.getByText(/cannot create user/i)).toBeVisible();
  });
});
