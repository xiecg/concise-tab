import { UnsplashTabPage } from './app.po';

describe('concise-tab App', () => {
  let page: UnsplashTabPage;

  beforeEach(() => {
    page = new UnsplashTabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
