const { test, expect } = require('@playwright/test');

let webContext;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // Login
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("rishi7196@gmail.com");
    await page.locator("#userPassword").fill("rishi12345");
    await page.locator("[value='Login']").click();

    // Wait until products are visible
    await page.locator(".card-body").first().waitFor();

    // Save login session
    await context.storageState({ path: "state.json" });

    // Create a new context using the saved session
    webContext = await browser.newContext({
        storageState: "state.json"
    });
});

test('web api test', async () => {

    const productName = 'ZARA COAT 3';

    const page = await webContext.newPage();

    // IMPORTANT: Navigate to the application
    await page.goto("https://rahulshettyacademy.com/client");

    // Wait for products to load
    await page.locator(".card-body").first().waitFor();

    // Get all product titles
    const titles = await page.locator(".card-body b").allTextContents();

    console.log(titles);

    // Example: Verify the product exists
    expect(titles).toContain(productName);
});