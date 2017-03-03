import { RasterFoundryDocsPage } from './app.po';

describe('raster-foundry-docs App', () => {
  let page: RasterFoundryDocsPage;

  beforeEach(() => {
    page = new RasterFoundryDocsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
