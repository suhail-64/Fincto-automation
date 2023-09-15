const { homePage } = require("../pageobjects/loginPage.js");
const { registerationPage } = require("../pageobjects/registerCompany.js");
const testData = require("../datafile/testData.json");

describe('Verify that the "Login page" functions properly', () => {
  it("User should navigate to the login page ", async () => {
    await homePage.openUrl(testData.Fincto);
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

  it('Verify that the "Personal information" field functions propery and able to fill the field', async () => {
    await registerationPage.personalInformation();
    expect(await registerationPage.$statusPopUp())
      .withContext('"Personal information" status popup not displayed')
      .toBeDisplayed();
  });

});
