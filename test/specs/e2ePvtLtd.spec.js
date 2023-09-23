const { homePage } = require("../pageobjects/loginPage.js");
const expectchai = require("chai").expect;
const { registerationPage } = require("../pageobjects/registerCompany.js");
const testData = require("../datafile/testData.json");

describe('Verify that the "Login page" functions properly', () => {
  it("User should navigate to the login page ", async () => {
    await homePage.openUrl(testData.userAccess.Fincto);
  });

  it("Should login with valid credentials", async () => {
    await homePage.userLogin();
    expect(await homePage.$homeLogo()).toBeDisplayed();
  });
});

describe('Verify that the "Register company" page functions properly', () => {
  it('Click on the "Register company" field', async () => {
    await registerationPage.registerCompany();
    expect(await registerationPage.$companyRegistration())
      .withContext('"Registration company" page not displayed')
      .toBeDisplayed();
  });
  describe('Verify that the "Personal information" page functions properly', () => {
    it('Verify that the "Personal information" field functions propery and able to fill the field', async () => {
      await registerationPage.personalInformation();
      expect(await registerationPage.$statusPopUp())
        .withContext('"Personal information" status popup not displayed')
        .toBeDisplayed();
    });
  });
  describe('Verify that the "Company information" page functions properly', () => {
    it("Verify that the user is able to select private limited option", async () => {
      await registerationPage.companyInformation();
      expect(await registerationPage.$popUpPvtLtd())
        .withContext('"Private limited" status popup not displayed')
        .toBeDisplayed();
    });
    it("Verify that the user is able to select company Name Added", async () => {
      await registerationPage.privateLimitedRegisteration();
      expect(await registerationPage.$companyNameAddedPopUp())
        .withContext(
          '"company information added successfully" status popup not displayed'
        )
        .toBeDisplayed();
    });
    it("Verify that the user is able to select directors DSC Confirmation", async () => {
      await registerationPage.directorsDSCConfirmation();
      expect(await registerationPage.$DSCSucessPopUp())
        .withContext('"Directors DSC Confirmation" status popup not displayed')
        .toBeDisplayed();
      expect(await registerationPage.$verifyDirectorDeclarationFormPage())
        .withContext('"Director Declaration Form" not displayed')
        .toBeDisplayed();
    });
    it("Verify that the Director Declaration Form page functions properly", async () => {
      await registerationPage.directorDeclarationForm();
      expect(await registerationPage.$addDetailsPageTitle())
        .withContext('"Add Details Page" not displayed')
        .toBeDisplayed();
      await registerationPage.addDetailsPage();
    });
  });
});
