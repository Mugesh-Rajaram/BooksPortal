import { browser, by, element } from 'protractor';

export class APPLICATIONPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
