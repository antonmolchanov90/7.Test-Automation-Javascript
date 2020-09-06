const puppeteer = require ("puppeteer");
const { clickInicio } = require("./clickClass.js");

  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    await page.goto('https://www.bibliotecapleyades.net/');
  });

  afterEach(async () => {
    await browser.close();
  });

describe ('Test Inicio Site', () => {

    it('Should open inicio and click', async () => {
      const inicioButton = new clickInicio(page);
      await inicioButton.clickButton(page);
      const expectTitle = await page.title();
      expect(expectTitle).toBe('Novedades Semanales - Weekly News');
   }, 30000);
});
