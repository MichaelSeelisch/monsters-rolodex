const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });

  // Browser operations

  // Holds the browser until we terminate the process explicitly
  await browser.waitForTarget(() => false);
  
  await browser.close();
})();