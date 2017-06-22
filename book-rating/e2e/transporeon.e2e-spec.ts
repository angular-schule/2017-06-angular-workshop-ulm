import { protractor, browser, $, $$ } from 'protractor';

fdescribe('Transporeon', () => {

  beforeAll(() => browser.ignoreSynchronization = true);

  it('should display the right phone number', () => {


    browser.get('https://www.transporeon.com/')
    const phoneEl = $$('.footer-first_col a').get(1);
    expect(phoneEl.getText()).toContain('+49 (0)731/16906 0');
  })

  fit('should navigate to imprint', () => {

    browser.driver.manage().window().setSize(1920, 800);
    browser.get('https://www.transporeon.com/');

    browser.sleep(2500);

    // Element <a href="de/metanavigation/impressum/">...</a> is not clickable at point (476, 668).
    // Other element would receive the click: <div class="wrapper">...</div>
    //
    // -- >It clearly says, the element we want to click is hidden by some other element div
    $$('.fa.fa-close').each(el => {
      el.click()
      browser.sleep(2500);
    }); // let's close all warnings on that page

    // const imprintEl = $$('.impressum a').get(0);
    // const isClickable = protractor.ExpectedConditions.elementToBeClickable(imprintEl);
    // browser.wait(isClickable, 10000);
    // imprintEl.click();

    const imprintEl = $$('.impressum a').get(0);
    browser.actions().mouseMove(imprintEl).perform();
    browser.actions().mouseMove(imprintEl).click();

    browser.sleep(2500);

    browser.driver.getCurrentUrl()
      .then(function (url) {
        expect(url).toContain('impressum');
      });
  });

  afterAll(() => browser.ignoreSynchronization = false);
});
