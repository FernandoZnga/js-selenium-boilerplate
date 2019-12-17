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

  describe("Header", () => {
    it("should exist", async () => {
      const header = await utils.waitFind(driver, home.locators.header);
      expect(header).to.be.a("object");
    });

    it("should be able to log in", async () => {
      const header = await utils.waitFind(driver, home.locators.header);
      expect(header).to.be.a("object");

      await home.enterUsername();
      await home.enterPassword();
      await home.clickLogin();

      // const loggedInText = await utils.waitFind(driver, home.locators.accountInformation);
      // expect(loggedInText).to.be.a("object");
    });
  });
});
