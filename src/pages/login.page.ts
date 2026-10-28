import { type Locator, type Page } from '@playwright/test';
import { config } from '../support/config.js';

export class LoginPage {
  readonly loginFormHeading: Locator;

  constructor(private readonly page: Page) {
    this.loginFormHeading = this.page.getByText('Log in for the best experience', {
      exact: true,
    });
  }

  async openHomePage(): Promise<void> {
    const url = String(config.TEST_URL);
    await this.page.goto(url);
  }

  async openLoginForm(): Promise<void> {
    const loginButton = this.page.getByText('Login', { exact: true }).first();
    await loginButton.waitFor({ state: 'visible' });
    await loginButton.click();
  }
}
