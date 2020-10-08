const { By } = require("selenium-webdriver");

const url = "https://www.trunk.fortress.elmington.io/";

class HomePage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      username: By.name('username'),
      usernameTextField: By.name('username'),
      password: By.name('password'),
      passwordTextField: By.name('password'),
      loginButton: By.xpath('/html/body/div/div/div/div[1]/div/div/div/form/button'),
      footNote: By.name('username'),
      // buttonLogin: By.css("#gb_70"),
      userPicture: By.className('user-picture')
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
    await this.driver.findElement(this.locators.usernameTextField).sendKeys('Fernando');
  }
  async enterPassword() {
    await this.driver.findElement(this.locators.password).click();
    await this.driver.findElement(this.locators.passwordTextField).sendKeys('Password1234!');
  }
}

module.exports = HomePage;