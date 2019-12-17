# js-selenium-boilerplate
 Starting point for javascript, selenium, mocha and chai

```
npm install
```

Download chromedriver and put the file in the source directory

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
Before that, add a `.env` file in the root folder ofthe proyecto with 
```
BROWSERSTACK_USERNAME=username
BROWSERSTACK_AUTOMATE_KEY=key
```

And your are good to go

