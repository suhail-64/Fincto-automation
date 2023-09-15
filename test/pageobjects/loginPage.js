class HomePage {
    constructor() {
        this.$homeLogo = () => $('//button[@class="_2KpZ6l _2doB4z"]');
        this.$LoginBtn = () => $('//button[text()="Login"]');
        this.$homeLogo = () => $('//img[@alt="logo"]');
        this.$emailId = () => $('//input[@type="email"]');
        this.$password = () => $('//input[@type="password"]');
        this.$submitBtn = () => $('//button[@type="submit"]');
        this.$userAvatar = () => $('//img[@alt="user photo"]');
    }

    /**
     * Launch the url and navigate to the Login page.
     * @param {url} url 
     */
    async openUrl(url) {
        await browser.maximizeWindow();
        await browser.url(url);
        await this.$LoginBtn().waitForDisplayed({ timeout: 3000, timeoutMsg: "Login button not displayed" })
        await this.$LoginBtn().click();
    }

    /**
     * Enter valid credential to login to the application. 
     * @param {email} string1 
     * @param {password} string2 
     */
    async userLogin(string1, string2) {
        await this.$emailId().click();
        await this.$emailId().setValue("suhail.p@cybersapient.io"); // Use the keys command
        await this.$password().scrollIntoView();
        await this.$password().click();
        // await this.$password().saveScreenshot('../pageobjects/screenshot/screenshot.png')
        await this.$password().setValue("Secrete@12"); // Use the keys command
        await this.$submitBtn().click();

        await this.$userAvatar().waitForDisplayed({ timeout: 6000, timeoutMsg: "User avatar not displayed" });
    }
}

module.exports = {
    homePage: new HomePage(),
};
