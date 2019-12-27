# js-selenium-boilerplate

## Starting point for javascript, selenium, mocha and chai

```
npm install
```

Download chromedriver for Chrome and put the file in the source directory
[chromedriver download here](https://chromedriver.chromium.org/downloads)
Select the right version according your Google Chrome version.

Download geckodriver for Firefox and put the file in the source directory
[geckodriver download here](https://github.com/mozilla/geckodriver/releases)
Select the right version according your SO.

To run locally using Chrome
```
npm run test
```

To run locally using Firefox
```
npm run test -- --firefox
```

To run it using browserstack
```
npm run test -- --browserstack
```
Before that, add a `.env` file in the root folder of the proyecto with 
```
BROWSERSTACK_USERNAME=username
BROWSERSTACK_AUTOMATE_KEY=key
```

And your are good to go!

