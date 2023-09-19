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

/**Choose Name */
        this.$privatLimited = () => $("div[class='hover:bg-sky-500 border cursor-pointer bg-primary-blue-01 border-primary-blue-15 p-4 md:p-7 rounded-md relative choose-entity-div']");
        this.$popUpPvtLtd = () => $('//div[@role="status"]');
        this.$companyNameopt1 = () => $('//input[@placeholder="Option 1"]');
        this.$companyNameopt2 = () => $('//input[@placeholder="Option 2"]');
        this.$pvtLtdDropdown = () => $('//select[@name="noOfDirectors"]');
        this.$trademarkButton = () => $('//button[text()="No"]')
        this.$nextButton = () => $('//span[@class="opacity-1"]');
        this.$companyNameAddedPopUp = () => $('//div[text()="Company Information Added Successfully"]');

/**Director's DSC Confirmation */
        this.$directorsName1 = ()=> $('//input[@name="directorsInputs.0.directorName"]');
        this.$directorsName2 =() => $('//input[@name="directorsInputs.1.directorName"]');
        this.$havingValidDSC1 = () => $('#validDsc0');
        this.$havingValidDSC2 = () => $('#validDsc1');

        this.$DSCNextButton = () => $("(//span[@class='opacity-1'])[1]");
        this.$DSCSucessPopUp = ()=> $('//div[@role="status"]');
        this.$verifyDirectorDeclarationFormPage = () => $('Director Declaration Form');

        /** Director Declaration Form */
        this.$DDFheadline = ()=> $('//span[text()=" - Director Declaration Form"]');
        this.$DDFheadline = ()=> $('//span[text()=" - Director Declaration Form"]');

    }

    /**
     * Click on the register company button
     */

    async registerCompany() {
        await this.$userAvatar().waitForDisplayed({ timeout: 4000, timeoutMsg: "User avatar is not displayed" })
        await this.$registerComapny().click();
        await this.$companyRegistration().waitForDisplayed({ timeout: 4000, timeoutMsg: "'Register comapany' page not displayed" })
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
        await this.$statusPopUp().waitForDisplayed({ timeout: 4000, timeoutMsg: "'Personal information' popup message not displayed" })
    }

    /**
     * Enter company informations and verify it
     */
    async companyInformation() {
        await this.$privatLimited().scrollIntoView();
        await this.$privatLimited().waitForClickable();
        await this.$privatLimited().click();
    }
    async privateLimitedRegisteration(){
        await this.$companyNameopt1().waitForDisplayed({ timeout: 100000, timeoutMsg: "'company name page' not displayed" })
        await this.$companyNameopt1().waitForClickable();
        await browser.pause(2000)

        await this.$companyNameopt1().click();
        await this.$companyNameopt1().setValue(this.companyName);
        await this.$companyNameopt2().waitForClickable();
        await browser.pause(2000)

        await this.$companyNameopt2().click();
        await this.$companyNameopt2().setValue(this.companyName + "Mycompany");
        await browser.pause(2000)

        await this.$pvtLtdDropdown().scrollIntoView();
        await this.$pvtLtdDropdown().selectByAttribute('value','2');
        await this.$trademarkButton().waitForClickable();
        await this.$trademarkButton().click();
        await this.$nextButton().scrollIntoView();
        await this.$nextButton().click();
    }
    async directorsDSCConfirmation() {
        await this.$directorsName1().waitForDisplayed({ timeout: 100000, timeoutMsg: "'Director's DSC Confirmation' not displayed" })
        await this.$directorsName1().waitForClickable();
        await browser.pause(2000)
        await this.$directorsName1().click();
        await this.$directorsName1().setValue(this.name);
        await this.$havingValidDSC1().click();
        await this.$directorsName2().waitForClickable();
        await browser.pause(2000)
        await this.$directorsName2().click();
        await this.$directorsName2().setValue(this.name);
        await this.$havingValidDSC2().click();
        await this.$DSCNextButton().scrollIntoView();
        await this.$DSCNextButton().waitForClickable();
        await this.$DSCNextButton().click();
    }
    async directorDeclarationForm() {
        
    }
}

module.exports = {
    registerationPage: new register(),
};
