require("selenium-webdriver");
const chai = require("chai");
chai.use(require("chai-as-promised"));
const { expect } = chai;

const Home = require("./pages/home");

const config = require("../_config");
const utils = require("../_utils");

const driverSetup = config.browser(process);

describe("Home Page", () => {
  let driver;

  beforeEach(async () => {
    driver = await driverSetup.build();
    home = new Home(driver);
    await home.open();
  });

  afterEach(async () => {
    driver.quit();
  });

  describe("Username text label", () => {
    it("should exist", async () => {
      const footNote = await utils.waitFind(driver, home.locators.footNote);
      expect(footNote).to.be.a("object");
    });
  });

  describe("Perform login", () => {
    it("successful login", async () => {
      const footNote = await utils.waitFind(driver, home.locators.footNote);
      expect(footNote).to.be.a("object");

      await home.enterUsername();
      await home.enterPassword();
      await home.clickLogin();

      const userPicture = await utils.waitFind(driver, home.locators.userPicture);
      expect(userPicture).to.be.a("object");
    });
  })
});
