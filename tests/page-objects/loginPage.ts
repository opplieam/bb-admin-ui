import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly url: string = "http://localhost:5173/login";
  readonly usernameInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly signInButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputLocator = page.getByLabel(/username/i);
    this.passwordInputLocator = page.getByLabel(/password/i);
    this.signInButtonLocator = page.getByRole("button", { name: /sign in/i });
  }

  async visit() {
    await this.page.goto(this.url);
  }

  async login(username: string, password: string) {
    await this.usernameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.signInButtonLocator.click();
  }
}
