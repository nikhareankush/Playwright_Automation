import {
  After,
  Before,
  setDefaultTimeout,
  setWorldConstructor,
  World,
  type IWorldOptions,
} from '@cucumber/cucumber';
import {
  chromium,
  type Browser,
  type BrowserContext,
  type Page,
} from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { browserContextOptions, browserLaunchOptions } from './config.js';

export class CustomWorld extends World {
  browser!: Browser;   //browser is browser it will open
  context!: BrowserContext; //context is a isolated session
  page!: Page;  
  loginPage!: LoginPage;

  constructor(options: IWorldOptions){
    super(options);
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30_000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch(browserLaunchOptions);
  this.context = await this.browser.newContext(browserContextOptions);
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld) {
  if (this.browser) {
    await this.browser.close();
  }
});