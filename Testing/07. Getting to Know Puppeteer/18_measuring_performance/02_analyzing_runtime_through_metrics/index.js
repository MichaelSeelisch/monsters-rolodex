const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // Returns runtime metrics of the page
  const metrics = await page.metrics();
  console.info(metrics);

  await browser.close();
})();