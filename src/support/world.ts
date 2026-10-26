import { After, Before, setWorldConstructor, World, type IWorldOptions } from '@cucumber/cucumber';
import {
  chromium,
  type Browser,
  type BrowserContext,
  type Page,
} from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;   //browser is browser it will open
  context!: BrowserContext; //context is a isolated session
  page!: Page;  

  constructor(options: IWorldOptions){
    super(options);
  }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  if (this.browser) {
    await this.browser.close();
  }
});