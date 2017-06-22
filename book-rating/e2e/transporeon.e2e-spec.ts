import { browser, element, by } from 'protractor';

fdescribe('Transporeon', () => {

  beforeAll(() => browser.ignoreSynchronization = true);

  it('should display the right phone number', () => {

    browser.get('https://www.transporeon.com/');
    const phoneEl = element.all(by.css('.footer-first_col a')).get(1);
    expect(phoneEl.getText()).toContain('+49 (0)731/16906 0');
  })

  afterAll(() => browser.ignoreSynchronization = false);
});
