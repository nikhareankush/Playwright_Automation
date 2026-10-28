import type { BrowserContextOptions, LaunchOptions } from '@playwright/test';


export const browserLaunchOptions: LaunchOptions = {
  headless: false,
};

export const browserContextOptions: BrowserContextOptions = {
  viewport: { width: 1280, height: 720 },
};

export const config = {
  TEST_URL: process.env.BASE_URL,
}
