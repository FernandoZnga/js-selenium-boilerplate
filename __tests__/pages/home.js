const { By } = require("selenium-webdriver");

const url = "https://commerceos.staging.devpayever.com/";

class HomePage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      username: By.xpath('//*[@id="os-app-main"]/entry-layout-wrapper/entry-layout/div[2]/pe-info-box/div/mat-card/mat-card-content/div/div/login-layout/entry-login/div/form/pe-form-login-fieldset/div/div/div[1]/pe-input/div/mat-form-field'),
      usernameTextField: By.xpath('//*[@id="mat-input-2"]'),
      password: By.xpath('//*[@id="os-app-main"]/entry-layout-wrapper/entry-layout/div[2]/pe-info-box/div/mat-card/mat-card-content/div/div/login-layout/entry-login/div/form/pe-form-login-fieldset/div/div/div[2]/pe-input-password'),
      passwordTextField: By.xpath('//*[@id="mat-input-3"]'),
      loginButton: By.css('os-commerce#os-app-main pe-progress-button-content > div'),
      header: By.css("os-commerce#os-app-main img"),
      // buttonLogin: By.css("#gb_70"),
      accountInformation: By.css("os-commerce#os-app-main div.profile-header")
    }
  }

  open() {
    this.driver.get(url);
  }

  async clickLogin() {
    await this.driver.findElement(this.locators.loginButton).click();
  }
  async enterUsername() {
    await this.driver.findElement(this.locators.username).click();
    await this.driver.findElement(this.locators.usernameTextField).sendKeys('aqa@payever.org');
  }
  async enterPassword() {
    await this.driver.findElement(this.locators.password).click();
    await this.driver.findElement(this.locators.passwordTextField).sendKeys('Aqacool123!');
  }
}

module.exports = HomePage;