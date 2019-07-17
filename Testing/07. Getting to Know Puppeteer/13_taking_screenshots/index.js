const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // Takes a screenshot of the whole viewport
  await page.screenshot({ path: 'screenshot_whole.png' });

  // Takes a screenshot of an area within the page
  await page.screenshot({
    path: 'screenshot_part.jpg',
    type: 'jpeg',
    quality: 80,
    clip: { x: 220, y: 0, width: 630, height: 360 }
  });

  await browser.close();
})();