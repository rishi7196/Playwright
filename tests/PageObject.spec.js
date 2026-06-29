const { test, expect } = require('@playwright/test');
const { LoginPage1 } = require('../pageobjects/LoginPage1');
const dataset = JSON.parse(JSON.stringify(require("../utils/LoginData1.json")));

for (const data of dataset) {
    test(`Login with test data with ${data.username}`, async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        // const Username="Admin";
        // const password="admin123";

        const loginPage = new LoginPage1(page);
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);


        //get  title
        console.log(await page.title());
        // validate title
        await expect(page).toHaveTitle("OrangeHRM");
        // ENTER TEXT IN TEXT FIELD    

        const admin = await page.locator('a.oxd-main-menu-item[href*="admin"]').first().textContent();
        console.log(admin);

    });

}
