import { TourofheroesfirebasePage } from './app.po';

describe('tourofheroesfirebase App', function() {
  let page: TourofheroesfirebasePage;

  beforeEach(() => {
    page = new TourofheroesfirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
