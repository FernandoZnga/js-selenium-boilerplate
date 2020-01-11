const { By } = require("selenium-webdriver");

const url = "https://falcon-staging-frontend.acklenavenueclient.com/";

class HomePage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      launchpagLogo: By.xpath('//*[@id="root"]/div/header/header/div/div/div[2]'),
      loginIcon: By.xpath('//*[@id="root"]/div/header/header/div/div/div[4]/button'),
      launchPadHeader: By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/h2')
    }
  }

  open() {
    this.driver.get(url);
  }
  async clickLoginIcon() {
    await this.driver.findElement(this.locators.loginIcon).click();
  }
  // async enterUsername() {
  //   await this.driver.findElement(this.locators.username).sendKeys('xfernando@me.com');
  // }
  // async enterPassword() {
  //   await this.driver.findElement(this.locators.password).sendKeys('Acklen11');
  // }
}

module.exports = HomePage;