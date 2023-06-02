const {By, Builder, Key} = require('selenium-webdriver');
require('chromedriver');
chrome = require('selenium-webdriver/chrome');

module.exports = async function test(id) {

    let options = new chrome.Options().headless();

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    // let driver = await new Builder().forBrowser('chrome').build();


    await driver.get('https://uakino.club');

    await driver.findElement(By.id('show-search')).click();

    await driver.findElement(By.id('ajax_search')).sendKeys(id, Key.RETURN);

    await driver.findElement(By.xpath('//*[@id="dle-content"]/div[2]/div[1]/div[2]/a/div/i[2]')).click();

    const lnk = await driver.findElement(By.xpath('//*[@id="pre"]')).getProperty('src')
        ? await driver.findElement(By.id('pre')).getProperty('src') :
        await driver.findElement(By.id('playerfr')).getProperty('src');
    await driver.quit();

    return lnk;
    // await driver.get('https://kinoukr.com/');
    // await driver.findElement(By.id('ajax_search')).sendKeys(id, Key.RETURN);
    // await driver.findElement(By.xpath('//*[@id="dle-content"]/div[2]/div[1]/a')).click();
    // const lnk = await driver.findElement(By.xpath('//*[@id="dle-content"]/div/article/div[3]/div[2]/iframe')).getProperty('src');
    //
    // return lnk


    // await driver.quit();
}
