const {test, expect} = require('@playwright/test');

test("Drop Down", async ({page}) => 

    {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("input[name='username']").fill("Admin");
        await page.locator("input[name='password']").fill("admin123");
        await page.locator("[type='submit']").click();
        await page.locator("a:has-text('Admin')").click();

        await page.locator(".oxd-checkbox-input").first().click();
        await (expect(page.locator(".oxd-checkbox-input").first()).toBeChecked());

        expect(await page.locator(".oxd-checkbox-input").first().isChecked()).toBeFalsy();
        


    });
