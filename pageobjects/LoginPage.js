class LoginPage{

    constructor(page){       
        this.UserName=page.locator("[name='username']");
        this.Password=page.locator("[name='password']");
        this.singButton=page.locator("[type='submit']")
    }

    async validLogin(Username,password)
    {
         await this.UserName.fill(Username);
         await this.Password.fill(password);
         await this.singButton.click();
    }

        
}

