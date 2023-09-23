const { homePage } = require("../pageobjects/loginPage.js");
const expectchai = require("chai").expect;
const { registerationPage } = require("../pageobjects/registerCompanyOnePersonCompany.js");
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
