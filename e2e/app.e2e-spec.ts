import { NgShuffleCatsPage } from './app.po';

describe('ng-shuffle-cats App', function() {
  let page: NgShuffleCatsPage;

  beforeEach(() => {
    page = new NgShuffleCatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
