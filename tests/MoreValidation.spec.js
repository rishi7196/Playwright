const {test,expect} = require('@playwright/test')

test('validate the error message',async({page})=>{
    
    // navigate to the page
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com");
    // await page.goBack();
    // await page.goForward();
    //hideen element
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    
    // alert pop up
    await page.pause();
 page.on('dialog', dialog => dialog.accept());
 await page.locator('#confirmbtn').click();
 // handle iframe
    const frame = page.frameLocator('#courses-iframe');
    await frame.locator('li a[href="mentorship"]').click();
    
   


})
