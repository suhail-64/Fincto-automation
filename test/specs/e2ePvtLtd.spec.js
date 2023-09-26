const { homePage } = require("../pageobjects/loginPage.js");
const expectchai = require("chai").expect;
const { registerationPage } = require("../pageobjects/registerCompany.js");
const testData = require("../datafile/testData.json");

describe("Verify that the user is able to register a private limited compnay with valid details", () => {
  it("User should navigate to the login page ", async () => {
    await homePage.openUrl(testData.userAccess.Fincto);
  });

  it("Should login with valid credentials", async () => {
    await homePage.userLogin();
    expect(await homePage.$homeLogo()).toBeDisplayed();
  });

  it('Click on the "Register company" field and user should navigate to the "Register company" page', async () => {
    await registerationPage.registerCompany();
    expect(await registerationPage.$companyRegistration())
      .withContext('"Registration company" page not displayed')
      .toBeDisplayed();
  });
  it('Verify that the user is able to fill the  "Personal information" with valid details', async () => {
    await registerationPage.personalInformation();
    expect(await registerationPage.$statusPopUp())
      .withContext('"Personal information" status popup not displayed')
      .toBeDisplayed();
  });

  it("Verify that the user is able to select private limited option and navigate to the 'private limited' page", async () => {
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
  it("Verify that the user is able to enter valid 'directors DSC Confirmation'", async () => {
    await registerationPage.directorsDSCConfirmation();
    expect(await registerationPage.$DSCSucessPopUp())
      .withContext('"Directors DSC Confirmation" status popup not displayed')
      .toBeDisplayed();
    expect(await registerationPage.$verifyDirectorDeclarationFormPage())
      .withContext('"Director Declaration Form" not displayed')
      .toBeDisplayed();
  });
  it("Verify that the user is able to enter valide 'Director Declaration Form'", async () => {
    await registerationPage.directorDeclarationForm();
    expect(await registerationPage.$addDetailsPageTitle())
      .withContext('"Add Details Page" not displayed')
      .toBeDisplayed();
    await registerationPage.addDetailsPage1();
    expect(await registerationPage.$addDetailsPage2Title())
    .withContext('"Directors Declaration form" page is not displayed')
    .toBeDisplayed();
    await registerationPage.addDetailsPage2();
    expect(await registerationPage.$DDFheadline())
    .withContext('"Directors Declaration form" page is not displayed-2')
    .toBeDisplayed();
  });
});
