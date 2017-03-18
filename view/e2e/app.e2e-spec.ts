import { AngulerPage } from './app.po';

describe('anguler App', function() {
  let page: AngulerPage;

  beforeEach(() => {
    page = new AngulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
