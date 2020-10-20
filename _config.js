const selenium = require("selenium-webdriver");
require("dotenv").config();

var capabilities = {
  'os' : process.env.BROWSERSTACK_OS,
  'os_version' : process.env.BROWSERSTACK_OS_VERSION,
  'browserName' : process.env.BROWSERSTACK_BROWSERNAME,
  'browser_version' : process.env.BROWSERSTACK_BROWSER_VERSION,
  'project' : process.env.BROWSERSTACK_PROJECT,
  'build' : process.env.BROWSERSTACK_BUILD,
  'name' : process.env.BROWSERSTACK_NAME,
  'browserstack.local' : process.env.BROWSERSTACK_LOCAL,
  'browserstack.selenium_version' : '3.6.0',
  'resolution' : "1920x1080",
  'browserstack.networkLogs' : true,
  "browserstack.user": process.env.BROWSERSTACK_USERNAME,
  "browserstack.key": process.env.BROWSERSTACK_AUTOMATE_KEY
};

const browsers = {
  browserstack: new selenium.Builder()
  .usingServer("http://hub-cloud.browserstack.com/wd/hub")
  .withCapabilities(capabilities),
  
  chrome: new selenium.Builder()
  .withCapabilities(selenium.Capabilities.chrome()
  ),

  firefox: new selenium.Builder()
  .withCapabilities(selenium.Capabilities.firefox()
  )
};

const getBrowserFlag = process =>
  process.argv.find(arg =>
    Object.keys(browsers).find(key => arg.includes(key))
);

exports.browser = process =>
  getBrowserFlag(process)
    ? browsers[getBrowserFlag(process).replace("--", "")]
    : browsers["chrome"]; // default to chrome
