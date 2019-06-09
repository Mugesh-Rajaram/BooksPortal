import { APPLICATIONPage } from './app.po';

describe('application App', () => {
  let page: APPLICATIONPage;

  beforeEach(() => {
    page = new APPLICATIONPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
