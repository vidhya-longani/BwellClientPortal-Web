import { BwellClientPortalWebPage } from './app.po';

describe('bwell-client-portal-web App', () => {
  let page: BwellClientPortalWebPage;

  beforeEach(() => {
    page = new BwellClientPortalWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
