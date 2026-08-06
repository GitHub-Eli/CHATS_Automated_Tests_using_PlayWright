// Provide a minimal declaration for `process.env` to satisfy TypeScript
declare const process: { env: { CI?: string | undefined } };
import { defineConfig, devices, type PlaywrightTestConfig } from '@playwright/test';

type CustomPlaywrightTestConfig = PlaywrightTestConfig & {
  use?: PlaywrightTestConfig['use'] & { myCaseID?: string };
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // Global maximum timeout for the entire test
  // 600000 milliseconds = 10 minutes
  timeout: 600000,

//  use: {
  /* Base URL to use in actions like `await page.goto('')`. */
  // baseURL: 'http://localhost:3000',

  /* Collect trace when retrying the failed test. */
  //trace: 'on-first-retry',
  
  //headless: false,
  //viewport: null, // Allows full window usage
//},


use: {
  /* Base URL to use in actions like `await page.goto('')`. */
  // baseURL: 'http://localhost:3000',

  /* Collect trace when retrying the failed test. */
  trace: 'on-first-retry',
  
  headless: false,
  viewport: null, // Allows full window usage

  launchOptions: {
    args: ["--start-maximized"],
    //slowMo: 1000,
  },

  // Sets default timeout for all locator actions (click, fill, etc.)
  // 600000 milliseconds = 10 minutes
    actionTimeout: 600000,

},

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      //use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
