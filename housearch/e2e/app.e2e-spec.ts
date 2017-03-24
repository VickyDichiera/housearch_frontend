import { HousearchPage } from './app.po';

describe('housearch App', function() {
  let page: HousearchPage;

  beforeEach(() => {
    page = new HousearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
