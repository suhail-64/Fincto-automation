const Common = require ("./common.js");
let isJuneSelected = false ; 
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
        this.$verifyDirectorDeclarationFormPage = () => $('//span[text()=" - Director Declaration Form"]');

        /** Director Declaration Form */
        this.$DDFheadline = ()=> $('//span[text()=" - Director Declaration Form"]');
        this.$manualRadiobtn1 = () => $('#yesApply0');
        this.$manualRadioBtn2 = () =>$('#yesApply1');
        this.$addDetailsButton1 = () => $('(//button[text()="Add Details"])[1]');
        this.$addDetailsButton2 = () => $('(//button[text()="Add Details"])[2]');
        this.$DirectorDeclarationFormNextPage = () => $('//button[@type="submit"]');

        /**Add details */

        this.$addDetailsPageTitle = () => $('//span[text()=" - Director Declaration Form"]');
        this.$DINnumber = () => $('//input[@placeholder="Enter Your DIN"]');
        this.$fathersName = () => $('//input[@name="fathersName"]');
        this.$directorDeclarationMail = () => $('//input[@placeholder="name@yourdomain.com"]');
        this.$directorMobileNumber = () => $('//input[@type="tel"]');
        this.$directorPAN = () => $('//input[@name="PAN"]');
        this.$directorsOccupation = () => $('//input[@name="occupation"]');
        this.$directorsNationlity = () => $('#nationality');
        this.$calenderBtn = () => $('//input[@placeholder="Date of Birth"]');
        this.$calenderPageDisplay = () => $('//div[@class="react-datepicker"]');
        this.$calenderMonth = () => $('//div[@class="react-datepicker__current-month react-datepicker__current-month--hasYearDropdown"]');
        this.$nextMonthBtn = () => $('//button[@aria-label="Previous Month"]');
        this.$calenderYear = () => $('//div[@class="react-datepicker__year-read-view"]');
        this.$selectingYear1997 = () => $(`//div[text()="1997"]`); /**check here to make the year dynamic using json file */
        this.$calenderDay = () => $("//div[@aria-label='Choose Thursday, June 19th, 1997']");
        this.$addressBtn = () => $('//input[@placeholder="Address"]');
        this.$mebershipID = () => $('//input[@placeholder="Enter Membership Number"]');
        this.$certificateNumber = () => $('//input[@placeholder="Enter Certificate Number"]');
        this.$addDetailsNextPage = () => $('//button[@type="submit"]');

/**Adddetails 2 */
        this.$addDetailsPage2Title = () => $('//th[text()="Director Name"]');
        this.$DINnumberD2 = () => $('//input[@placeholder="Enter Your DIN"]');
        this.$fathersNameD2 = () => $('//input[@name="fathersName"]');
        this.$directorDeclarationMailD2 = () => $('//input[@placeholder="name@yourdomain.com"]');
        this.$directorMobileNumberD2 = () => $('//input[@type="tel"]');
        this.$directorPAND2 = () => $('//input[@name="PAN"]');
        this.$directorsOccupationD2 = () => $('//input[@name="occupation"]');
        this.$directorsNationlityD2 = () => $('#nationality');
        this.$calenderBtnD2 = () => $('//input[@placeholder="Date of Birth"]');
        this.$calenderPageDisplayD2 = () => $('//div[@class="react-datepicker"]');
        this.$calenderMonthD2 = () => $('//div[@class="react-datepicker__current-month react-datepicker__current-month--hasYearDropdown"]');
        this.$nextMonthBtnD2 = () => $('//button[@aria-label="Previous Month"]');
        this.$calenderYearD2 = () => $('//div[@class="react-datepicker__year-read-view"]');
        this.$selectingYear1997D2 = () => $(`//div[text()="1997"]`); /**check here to make the year dynamic using json file */
        this.$calenderDayD2 = () => $("//div[@aria-label='Choose Thursday, June 19th, 1997']");
        this.$addressBtnD2 = () => $('//input[@placeholder="Address"]');
        this.$mebershipIDD2 = () => $('//input[@placeholder="Enter Membership Number"]');
        this.$certificateNumberD2 = () => $('//input[@placeholder="Enter Certificate Number"]');
        this.$addDetailsNextPageD2 = () => $('//button[@type="submit"]');

        /** company information page */
        this.$pageHeadline = () => $('//div[text()="Company Information"]');
        this.$descriptionTab = () => $('#objectsEntity');
        this.$address1 = () => $('#address1');
        this.$address2 = () => $('address2');
        this.$pincode1 = () => $('//input[@name="pincode"]');
        this.$selectCity =()=> $('#city');
        this.$selectSatate = () => $('//input[@value="KERALA"]');
        this.compamyEmail = () => $('#emailIdOfCompany');
        this.$addressRadioButtonNo = () => $('#no');
        this.$addressRadioButtonYes = () => $('#yes');
        this.$registeredAddress1 = () => $('#registeredCompanyAddress1');
        this.$registeredAddress2 = () => $('#registeredCompanyAddress2');
        this.registerdCompanyPincode = () => $('//input[@name="registeredCompanyPincode"]');
        this.registeredCompanyCity = () => $('#registeredCompanyCity');
        this.$registeredCompanyState = () => $('//input[@name="registeredCompanyState"]');
        this.$companyInfoNextPage = () => $('//button[@type="submit"]');


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
     * Selecting private limited option.
     */
    async companyInformation() {
        await this.$privatLimited().scrollIntoView();
        await this.$privatLimited().waitForClickable();
        await this.$privatLimited().click();
    }

  /**
   * Entering private limited input
   */
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

    /**
     * Entering valid inputs in directors DSC Confirmation
     */
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

    /**
     * Enteing valid details in Director Declaration Form
     */
    async directorDeclarationForm() {
        await this.$DDFheadline().waitForDisplayed({ timeout: 100000, timeoutMsg: "'Director Declaration Form' is not displayed" })
        await this.$manualRadiobtn1().waitForClickable();
        await this.$manualRadiobtn1().click();
        await this.$manualRadioBtn2().waitForClickable();
        await this.$manualRadioBtn2().click();
        await this.$addDetailsButton1().waitForClickable();
        await browser.pause(2000);
        await this.$addDetailsButton1().click();
        await this.$addDetailsPageTitle().waitForDisplayed({ timeout: 100000, timeoutMsg: "'Director Declaration Form' is not displayed" })
    }

    /**
     * Click on the Add details button and enter details of the director 1
     */
    async addDetailsPage1(){
        await this.$DINnumber().waitForClickable();
        await browser.pause(1000);
        await this.$DINnumber().click();
        await browser.pause(1000);
        await this.$DINnumber().setValue(this.DINnumber);
        await browser.pause(2000);
        await this.$fathersName().click();
        await this.$fathersName().setValue(this.name);
        await browser.pause(2000);
        await this.$directorDeclarationMail().scrollIntoView();
        await this.$directorDeclarationMail().click();
        await this.$directorDeclarationMail().setValue(this.name + "@gmail.com");
        await browser.pause(2000);
        await this.$directorMobileNumber().click();
        await this.$directorMobileNumber().setValue(this.phoneNumber);
        await browser.pause(2000);
        await this.$directorPAN ().click();
        await this.$directorPAN().setValue("ABCTY1234D");
        await browser.pause(2000);
        await this.$directorsOccupation().click();
        await this.$directorsOccupation().setValue(this.name);
        await browser.pause(2000);
        await this.$directorsNationlity().scrollIntoView();
        await this.$directorsNationlity().selectByAttribute('value','India');
        await browser.pause(2000);
        await this.$calenderBtn().click();
        await this.$calenderPageDisplay().waitForDisplayed({ timeout: 6000, timeoutMsg: "'calender' is not displayed" })
        for (let i = 0; i < 8; i++) {
            const displayedMonth = await this.$calenderMonth().getText();
        if (displayedMonth === "June"){
        isJuneSelected = true;
        break;
        }
        await this.$nextMonthBtn().click();
      }
      await this.$calenderYear().click();
      await this.$selectingYear1997().scrollIntoView();
      await this.$selectingYear1997().click();
      await this.$calenderDay().waitForClickable();
      await this.$calenderDay().click();
      await this.$addressBtn().waitForClickable();
      await this.$addressBtn().click();
      await this.$addressBtn().setValue("my adress is, this can you see that my address");
      await this.$mebershipID().click();
      await this.$mebershipID().setValue(this.DINnumber);
      await this.$certificateNumber().click();
      await this.$certificateNumber().setValue(this.DINnumber);
      await this.$addDetailsNextPage().scrollIntoView();
      await this.$addDetailsNextPage().click();
      await this.$addDetailsPage2Title().waitForDisplayed({ timeout: 100000, timeoutMsg: "'Director Declaration Form' is not displayed-2" })
      
      }

    /**Add details page 2 */

    async addDetailsPage2(){
        await this.$addDetailsButton2().scrollIntoView();
        await this.$addDetailsButton2().waitForClickable();
        await browser.pause(3000);
        await this.$addDetailsButton2().click();
        await this.$a$DINnumberD2().waitForClickable();
        await this.$DINnumberD2().click();
        await browser.pause(1000);
        await this.$DINnumberD2().setValue(this.DINnumber) ;
        await browser.pause(2000);
        await this.$fathersNameD2().click();
        await this.$fathersNameD2().setValue(this.name);
        await browser.pause(2000);
        await this.$directorDeclarationMailD2().scrollIntoView();
        await this.$directorDeclarationMailD2().click();
        await this.$directorDeclarationMailD2().setValue(this.name + "@gmail.com");
        await browser.pause(2000);
        await this.$directorMobileNumberD2().click();
        await this.$directorMobileNumberD2().setValue(this.phoneNumber);
        await browser.pause(2000);
        await this.$directorPAND2 ().click();
        await this.$directorPAND2().setValue("ALCTY1234D");
        await browser.pause(2000);
        await this.$directorsOccupationD2().click();
        await this.$directorsOccupationD2().setValue(this.name);
        await browser.pause(2000);
        await this.$directorsNationlityD2().scrollIntoView();
        await this.$directorsNationlityD2().selectByAttribute('value','India');
        await browser.pause(2000);
        await this.$calenderBtnD2().click();
        await this.$calenderPageDisplayD2().waitForDisplayed({ timeout: 6000, timeoutMsg: "'calender' is not displayed" })
        for (let i = 0; i < 8; i++) {
            const displayedMonth = await this.$calenderMonthD2().getText();
        if (displayedMonth === "June"){
        isJuneSelected = true;
        break;
        }
        await this.$nextMonthBtnD2().click();
      }
      await this.$calenderYearD2().click();
      await this.$selectingYear1997D2().scrollIntoView();
      await this.$selectingYear1997D2().click();
      await this.$calenderDayD2().waitForClickable();
      await this.$calenderDayD2().click();
      await this.$addressBtnD2().waitForClickable();
      await this.$addressBtnD2().click();
      await this.$addressBtnD2().setValue("my adress is, this can you see that my address");
      await this.$mebershipIDD2().click();
      await this.$mebershipIDD2().setValue(this.DINnumber);
      await this.$certificateNumberD2().click();
      await this.$certificateNumberD2().setValue(this.DINnumber);
      await this.$addDetailsNextPageD2().scrollIntoView();
      await this.$addDetailsNextPageD2().click();
    }
    }



module.exports = {
    registerationPage: new register(),
};



