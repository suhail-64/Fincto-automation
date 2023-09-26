const { homePage } = require("../pageobjects/loginPage.js");
const expectchai = require("chai").expect;
const {
  registerationOnePersonCompany,
} = require("../pageobjects/registerCompanyOnePersonCompany.js");
const testData = require("../datafile/testData.json");

describe("Verify that the user is able to register a 'One person company' with valid details", () => {
  it("User should navigate to the login page ", async () => {
    await homePage.openUrl(testData.userAccess.Fincto);
  });

  it("Should login with valid credentials", async () => {
    await homePage.userLogin();
    expect(await homePage.$homeLogo()).toBeDisplayed();
  });
  it('Click on the "Register company" field', async () => {
    await registerationOnePersonCompany.registerCompany1();
    expect(await registerationOnePersonCompany.$companyRegistration())
      .withContext('"Registration company" page not displayed')
      .toBeDisplayed();
  });

  it('Verify that the "Personal information" field functions propery and able to fill the field', async () => {
    await registerationOnePersonCompany.personalInformation();
    expect(await registerationOnePersonCompany.$statusPopUp())
      .withContext('"Personal information" status popup not displayed')
      .toBeDisplayed();
  });

  it("Verify that the user is able to select 'One person company' option", async () => {
    await registerationOnePersonCompany.companyInformation();
    expect(await registerationOnePersonCompany.$popUpPvtLtd())
      .withContext('"One person company" status popup not displayed')
      .toBeDisplayed();
  });
});
