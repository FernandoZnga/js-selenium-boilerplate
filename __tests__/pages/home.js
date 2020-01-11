const { By } = require("selenium-webdriver");

const url = "https://falcon-staging-frontend.acklenavenueclient.com/";

class HomePage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      launchpagLogo: By.xpath('//*[@id="root"]/div/header/header/div/div/div[2]'),
      launchPadLoginAvatar: By.xpath('//*[@id="root"]/div/header/header/div/div/div[4]/button'),
      launchPadHeader: By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/h2'),

      authLogo: By.xpath('//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div/div[1]/div[2]'),
      authHeader: By.xpath('//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div/div[1]/div[2]/div'),
      authUsername: By.xpath('//*[@id="1-email"]'),
      authPassword: By.xpath('//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div/div[2]/div[2]/span/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/input')
    }
  }

  open() {
    this.driver.get(url);
    this.driver.manage().window().maximize();
  }
  async clickLoginAvatar() {
    await this.driver.findElement(this.locators.launchPadLoginAvatar).click();
  }
  async setUsername() {
    await this.driver.findElement(this.locators.authUsername).sendKeys('xfernando@me.com');
  }
  async setPassword() {
    await this.driver.findElement(this.locators.authPassword).sendKeys('Acklen11');
  }
}

module.exports = HomePage;