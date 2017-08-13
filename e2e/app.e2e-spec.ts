import { AppFormComerPage } from './app.po';

describe('app-form-comer App', () => {
  let page: AppFormComerPage;

  beforeEach(() => {
    page = new AppFormComerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
