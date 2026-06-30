class LoginPage1{

    constructor(page){  
        this.page=page;     
        this.UserName=page.locator("[name='username']");
        this.Password=page.locator("[name='password']");
        this.singButton=page.locator("[type='submit']")
    }

    async goTo()
    {
        await  this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async validLogin(username,password)
    {
         await this.UserName.fill(Username);
         await this.Password.fill(password);
         await this.singButton.click();
    }

        
}
module.exports={LoginPage1};

