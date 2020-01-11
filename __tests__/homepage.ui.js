require("selenium-webdriver");
const { expect } = chai;
const { assert } = require('assert');
const { chai } = require("chai");

const { Home } = require("./pages/home");
const { config } = require("../_config");
const { utils } = require("../_utils");

const driverSetup = config.browser(process);

chai.use(require("chai-as-promised"));

describe("Home Page", () => {
  let driver;

  // beforeEach(async () => {
  before(async () => {
    driver = await driverSetup.build();
    home = new Home(driver);
    await home.open();
  });

  // afterEach(async () => {
  after(async () => {
    driver.quit();
  });

  describe("LaunchPad homepage items", () => {
    it("should exist the Logo", async () => {
      const launchpPadLogo = await utils.waitFind(driver, home.locators.launchpagLogo);
      expect(launchpPadLogo).to.be.a("object");
    });
    it("should exist the Login button", async () => {
      const loginIcon = await utils.waitFind(driver, home.locators.loginIcon);
      expect(loginIcon).to.be.a("object");
    });
    it("should match the Header text", async () => {
      const launchPadHeader = await utils.waitFind(driver, home.locators.launchPadHeader);
      expect(launchPadHeader).to.be.a("object");
      assert.equal(await launchPadHeader.getText(), "Today's Shelter Information");
    });
  });

  // describe("Perform login", () => {
  //   it("successful login", async () => {
  //     const header = await utils.waitFind(driver, home.locators.launchpagLogo);
  //     expect(header).to.be.a("object");
  //     await home.clickLoginIcon();
  //   });
  // });
});
