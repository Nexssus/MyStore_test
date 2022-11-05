const webdriver = require('selenium-webdriver');
const { By, Key, until } = require('selenium-webdriver')

const chai = require('chai');
const { it } = require('mocha');
const assert = chai.assert;
const expect = chai.expect;

describe('myStore', function() {
    let driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    beforeEach(async function() {
        // Pokrece se pre svakog testa
    });

    afterEach(async function() {
        // Pokrece se nakon svakog testa
    });

    it("Verify homepage is open", async function(){
        await driver.get('http://automationpractice.com/index.php');
        expect(await driver.getCurrentUrl()).to.eq("http://automationpractice.com/index.php");
    });

    it("Goes to registration page", async function(){
        const sign = await driver.findElement(By.className('login'));
        await sign.click();
        expect(await driver.findElement(By.className('page-heading')).getText()).to.contain('AUTHENTICATION');
    })

    it("Create an account", async function(){
        const register = await driver.findElement(By.id('email_create'));
        register.sendKeys('mnegovan@example.com');
        const confirmBtn = await driver.findElement(By.id('SubmitCreate'));
        await confirmBtn.click();
        expect(await driver.findElement(By.className('page-subheading')));
    })

    it("Input personal information", async function(){
        //const gender = await driver.findElement(By.id('id_gender1'));
       // await gender.click();
        const firstName = await driver.findElement(By.id('customer_firstname'));
        firstName.sendKeys('Negovan');
        const lastName = await driver.findElement(By.id('customer_lastname'));
        lastName.sendKeys('Milenkovic');
        const email = await driver.findElement(By.id('email'));
        email.sendKeys('mnegovan@example.com');
        const password = await driver.findElement(By.id('passwd'));
        password.sendKeys(12345);

    })

});    