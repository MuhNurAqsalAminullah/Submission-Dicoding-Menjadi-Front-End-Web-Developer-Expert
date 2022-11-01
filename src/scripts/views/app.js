/* eslint-disable class-methods-use-this */

import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

/* eslint-disable no-underscore-dangle */
class App {
  constructor(
    {
      button,
      drawer,
      hero,
      content,
      header,
      headerT,
      headerS,
    },
  ) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._contant = content;
    this._header = header;
    this._headerT = headerT;
    this._headerS = headerS;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._contant,
      header: this._header,
      headerT: this._headerT,
      headerS: this._headerS,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._contant.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
