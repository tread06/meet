import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .toggle-details-button');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .toggle-details-button');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--window-size=1920,1080', '--window-position=1921,0'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('When a user hasn’t searched for a city, show upcoming events from all cities', async () => {
    const count = await page.$$eval('.event', (element) => element.length);
    expect(count).toEqual(2);
  });

  test('Users should see a list of suggestions when they search for a city', async () => {
    await page.click('.city');

    //enter the key 'l'
    page.keyboard.press('l');

    const suggestionsCount = await page.$$eval(
      '.suggestions li',
      (element) => element.length
    );

    //expect there to be 3 suggestions includsing the show all suggestion
    expect(suggestionsCount).toEqual(3);
  });

  test('Users can select a city from the suggested list', async () => {
    //click on the first suggestion (london, UK)
    await page.click('.suggestions li');
    const count = await page.$$eval('.event', (element) => element.length);

    //expect only one event to exist -- learn javascript
    expect(count).toEqual(1);
    const name = await page.$eval(
      '.event-name',
      (element) => element.textContent
    );
    expect(name).toEqual('Learn JavaScript');
  });
});
