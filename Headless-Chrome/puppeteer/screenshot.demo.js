const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.chromestatus.com', { waitUntil: 'networkidle' });
    await page.pdf({ path: '../pdf/page.pdf', format: 'A4' });

    browser.close();
})();
