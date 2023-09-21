const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require('assert');
const allure = require('allure-mocha/runtime').allure;

const driver = new Builder().forBrowser("chrome").build();

describe('Selenium test', function () {
    this.timeout(0);
    it('Step1. Check page title', async function(){
       
        driver.manage().window().maximize();
        await driver.get('https://www.bgf.rs/en');
        const title = await driver.getTitle();
        
        console.log('TITLE: ' + title);
        assert.equal(title, '1Belgrade Philharmonic Orchestra');
        await driver.close();
        await driver.quit();
    });

    afterEach(async function() {
        if (this.currentTest.state !== 'passed') {
            console.error('Test failed. Adding screenshot to Allure report.');
            
            await driver.takeScreenshot().then((screenShot) =>{
                try{
                    const screen = Buffer.from(screenShot, 'base64')
                    allure.attachment('Screenshot', screen, 'image/png', 'png');
                    console.log('SCREEN SUCCESSFULLY ADDED!');
                } catch(e) {
                    console.log('ATTACH 111 ERROR: '+e);
                }
            });
            
            

            await driver.close();
            await driver.quit();
            this.test.parent._bail = true;
        }
    });
});
