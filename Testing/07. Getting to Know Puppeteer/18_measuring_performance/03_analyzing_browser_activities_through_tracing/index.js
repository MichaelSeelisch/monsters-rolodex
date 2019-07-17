const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Starts to record a trace of the operations
  await page.tracing.start({ path: 'trace.json' });

  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // Stops the recording
  await page.tracing.stop();

  await browser.close();
})();