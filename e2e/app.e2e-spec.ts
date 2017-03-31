import { RasterFoundryApiDocsPage } from './app.po';

describe('raster-foundry-api-docs App', () => {
  let page: RasterFoundryApiDocsPage;

  beforeEach(() => {
    page = new RasterFoundryApiDocsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
