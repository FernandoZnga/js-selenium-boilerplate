require("selenium-webdriver");

const chai = require("chai");
chai.use(require("chai-as-promised"));
const { expect } = chai;

const Home = require("./pages/home");
const config = require("../_config");
const utils = require("../_utils");
const assert = require('assert');

const driverSetup = config.browser(process);

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
    it("should exist the Launch Pad logo", async () => {
      const launchpPadLogo = await utils.waitFind(driver, home.locators.launchpagLogo);
      expect(launchpPadLogo).to.be.a("object");
    });
    it("should match the Header text", async () => {
      const launchPadHeader = await utils.waitFind(driver, home.locators.launchPadHeader);
      expect(launchPadHeader).to.be.a("object");
      assert.equal(await launchPadHeader.getText(), "Today's Shelter Information");
    });
    it("should exist the Login button", async () => {
      const launchPadLoginAvatar = await utils.waitFind(driver, home.locators.launchPadLoginAvatar);
      expect(launchPadLoginAvatar).to.be.a("object");
    });
  });

  describe("LaunchPad Site Director login page", () => {
    it("should exist the Auth logo", async () => {
      await home.clickLoginAvatar();
      const authLogo = await utils.waitFind(driver, home.locators.authLogo);
      expect(authLogo).to.be.a("object");
    });
    it("should match the Header text", async () => {
      const authHeader = await utils.waitFind(driver, home.locators.authHeader);
      expect(authHeader).to.be.a("object");
      assert.equal(await authHeader.getAttribute("innerHTML"), "falcon");
    });
    it("should perform a successful login", async () => {
      // TODO add some actions for login - issue that Auth0 don't allow actions on username and password
      const authUsername = await utils.waitFind(driver, home.locators.authUsername);
      expect(authUsername).to.be.a("object");
      await home.setUsername()
    })
  });

});
