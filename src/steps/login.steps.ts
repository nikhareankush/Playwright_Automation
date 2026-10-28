import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world.js';

Given('I am on the Flipkart home page', async function (this: CustomWorld) {
  await this.loginPage.openHomePage();
  await this.page.locator("").click();
});

When('I open the login page', async function (this: CustomWorld) {
  await this.loginPage.openLoginForm();
});

Then('I should see the login form', async function (this: CustomWorld) {
  await expect(this.loginPage.loginFormHeading).toBeVisible();
});
