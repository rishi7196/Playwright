// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { workers } from 'cluster';
import { trace } from 'console';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
/**
 * @see https://playwright.dev/docs/test-configuration
 */
 const config = ({
  testDir: './tests',
  retries :1,
  workers:1,
  timeout: 50 * 1000,
  expect: {
    timeout: 50 * 1000,
  },
  reporter: 'html',
  projects :[
    {
      name : 'safari',
      use :{
             browserName: 'webkit',
             headless: false,
             screenshot: 'retain-on-failure',
             trace:'retain-on-failure',
              //...devices['iPhone 11'],
             
     }
    },
    {
      name :'chrome',
      use :{
             browserName: 'chromium',
             headless: false,
             screenshot: 'retain-on-failure',
             trace:'retain-on-failure',
             //viewport : {width:720, height :720}
             
     }

    }
    

  ]

  
});
module.exports = config
