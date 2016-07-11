import { ReduxDecoratorsNg2Page } from './app.po';

describe('redux-decorators-ng2 App', function() {
  let page: ReduxDecoratorsNg2Page;

  beforeEach(() => {
    page = new ReduxDecoratorsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
