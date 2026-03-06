const {test, expect} = require('@playwright/test');

test('browser context',async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage(); 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   
});

test.only('page playwroght test',async ({page})=>
{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     //get title
     console.log(await page.title());
     //validate title
     expect(await page.title()).toBe("OrangeHRM");

   
});