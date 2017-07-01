import { WebsiteHugoPage } from './app.po';

describe('website-hugo App', function() {
  let page: WebsiteHugoPage;

  beforeEach(() => {
    page = new WebsiteHugoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
