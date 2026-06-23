const { test, expect } = require('@playwright/test');

let webContext;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("rishi7196@gmail.com");
    await page.locator("#userPassword").fill("rishi12345");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({
        storageState: 'state.json'
    });

});


test('web api test', async () => {
    
   const productName = 'ZARA COAT 3';
   const page= await webContext.newPage();   
   const products = page.locator(".card-body");
  const titles= await page.locator(".card-body b").allTextContents();
  console.log(titles);
   
  

});