const webdriver = require('selenium-webdriver');
const { By, Key, until } = require('selenium-webdriver')

const chai = require('chai');
const { it } = require('mocha');
const assert = chai.assert;
const expect = chai.expect;

describe('swagLabs', function() {
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

    
});    