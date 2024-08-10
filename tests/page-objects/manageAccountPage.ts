import { Locator, Page } from "@playwright/test";

export class ManageAccountPage {
  readonly page: Page;
  readonly url: string = "http://localhost:5173/account";
  readonly createUserButtonLocator: Locator;
  readonly usernameInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly confirmPasswordInputLocator: Locator;
  readonly createButtonLocator: Locator;
  readonly closeModalLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createUserButtonLocator = page.getByRole("button", {
      name: /create user/i
    });
    this.usernameInputLocator = page.getByLabel(/username/i);
    this.passwordInputLocator = page.getByLabel(/^password/i);
    this.confirmPasswordInputLocator = page.getByLabel(/confirm password/i);
    this.createButtonLocator = page.getByRole("button", { name: /create/i });
    this.closeModalLocator = page.locator("//h2/following-sibling::button");
  }

  async visit() {
    await this.page.goto(this.url);
  }

  async setUserStatus(action: string, username: string) {
    await this.page
      .locator(`//tr[td[text()="${username}"]]`)
      .getByRole("button", { name: RegExp(action, "i") })
      .click();
    await this.page.getByRole("button", { name: /confirm/i }).click();
  }

  async createAdmin(username: string, password: string) {
    await this.createUserButtonLocator.click();
    await this.usernameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.confirmPasswordInputLocator.fill(password);
    await this.createButtonLocator.click();
    await this.closeModalLocator.click();
  }
}
