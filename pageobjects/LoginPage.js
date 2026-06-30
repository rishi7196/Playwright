class LoginPage {

    constructor(page) {
        this.page = page;

        this.UserName = page.locator("[name='username']");
        this.Password = page.locator("[name='password']");
        this.singButton = page.locator("[type='submit']")

    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password) {
        await this.UserName.fill(username);
        await this.Password.fill(password);
        await this.singButton.click();
        await this.page.waitForLoadState('networkidle');

    }

}
module.exports = { LoginPage };