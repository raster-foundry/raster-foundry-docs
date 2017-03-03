import { browser, element, by } from 'protractor';

export class RasterFoundryDocsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('div.navbar')).getText();
  }
}
