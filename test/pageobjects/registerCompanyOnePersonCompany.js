const Common = require ("./common.js");
class OnePersonCompany extends Common {
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

/**Choose Name */
        this.$onePersonCompany = () => $('//div[text()="One Person Company"]');
        this.$popUpPvtLtd = () => $('//div[@role="status"]');
        this.$companyNameopt1 = () => $('//input[@placeholder="Option 1"]');
        this.$companyNameopt2 = () => $('//input[@placeholder="Option 2"]');
        this.$pvtLtdDropdown = () => $('//select[@name="noOfDirectors"]');
        this.$trademarkButton = () => $('//button[text()="No"]')
        this.$nextButton = () => $('//span[@class="opacity-1"]');

    }

    /**
     * Click on the register company button
     */
    async registerCompany() {
        await this.$userAvatar().waitForDisplayed({ timeout: 6000, timeoutMsg: "User avatar is not displayed" })
        await this.$registerComapny().click();
        await this.$companyRegistration().waitForDisplayed({ timeout: 6000, timeoutMsg: "'Register comapany' page not displayed" })
    }

    /**
     * Entering personal informations and verify it 
     */
    async personalInformation() {
        await this.$fullName().click();
        await this.$fullName().setValue(this.name+" "+"p");
        await this.$emailAddress ().click();
        await this.$emailAddress ().setValue(this.name + '@gmail.com');
        await this.$maillingAddress().click();
        await this.$maillingAddress ().setValue(this.emailAddress + '@gmail.com');
        await this.$phoneNumber().click();
        await this.$phoneNumber ().setValue(this.phoneNumber);
        await this.$NextBtn().click();
        await this.$statusPopUp().waitForDisplayed({ timeout: 6000, timeoutMsg: "'Personal information' popup message not displayed" })
    }

    /**
     * Selecting one person company option.
     */
    async companyInformation() {
        await this.$onePersonCompany().scrollIntoView();
        await this.$onePersonCompany().waitForClickable();
        await this.$onePersonCompany().click();
    }
}
module.exports = {
    registerationOnePersonCompany: new OnePersonCompany(),
};



