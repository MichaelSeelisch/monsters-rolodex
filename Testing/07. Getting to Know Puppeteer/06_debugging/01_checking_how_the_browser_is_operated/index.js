const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 200 });
  
  // Browser operations
  
  await browser.close();
})();