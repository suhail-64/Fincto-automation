const Common = require ("./common.js");
class register extends Common {
    constructor() {
        super();
        this.$registerComapny = () => $('//button[text()="Register company"]');
        this.$companyRegistration = () => $('//p[text()="Company Registration is"]');
        this.$userAvatar = () => $('//img[@alt="user photo"]');

        this.$fullName = () => $('#grid-first-name');
        this.$emailAddress = () => $('//label[text()="Email Address (*)"]//following-sibling::input[@placeholder="name@yourdomain.com"]');
        this.$maillingAddress = () => $('//label[text()="Mailing Address (*)"]//following-sibling::input[@placeholder="name@yourdomain.com"]');
        this.$phoneNumber = () => $('//input[@type="tel"]');
        this.$NextBtn = () => $('//button[@type="submit"]');
        this.$statusPopUp = () => $('//div[@role="status"]');
    }

    /**
     * 
     */

    async registerCompany() {
        await this.$userAvatar().waitForDisplayed({ timeout: 4000, timeoutMsg: "User avatar is not displayed" })
        await this.$registerComapny().click();
        await this.$companyRegistration().waitForDisplayed({ timeout: 4000, timeoutMsg: "'Register comapany' page not displayed" })
    }

    /**
     * Enter 
     */

    async personalInformation() {
        await this.$fullName().click();
        await this.$fullName().setValue(this.name+" "+"p");
        await this.$emailAddress ().click();
        await this.$emailAddress ().setValue(this.name + '@gmail.com');
        await this.$maillingAddress().click();
        await this.$maillingAddress ().setValue(this.name + '@gmail.com');
        await this.$phoneNumber().click();
        await this.$phoneNumber ().setValue(this.phoneNumber);
        console.log(this.phoneNumber)
        await this.$NextBtn().click();
        await this.$statusPopUp().waitForDisplayed({ timeout: 4000, timeoutMsg: "'Personal information' popup message not displayed" })
    }

    

}

module.exports = {
    registerationPage: new register(),
};
