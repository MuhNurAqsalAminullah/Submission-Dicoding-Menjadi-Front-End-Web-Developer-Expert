/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init(
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
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', () => {
      this._closeDrawerTwo(drawer);
    });

    content.addEventListener('click', () => {
      this._closeDrawer(drawer);
    });

    window.addEventListener('scroll', () => {
      this._headerSticky(header, headerT, headerS);
    });

    button.addEventListener('click', () => {
      this._buttonStickyOpen(header, headerT, headerS);
    });

    window.addEventListener('scroll', () => {
      this._scrollToggleDrawer(drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawerTwo(drawer) {
    drawer.classList.remove('open');
  },

  _closeDrawer(drawer) {
    // event.stopPropagation();
    drawer.classList.remove('open');
  },

  _headerSticky(header, headerT, headerS) {
    header.classList.toggle('sticky', window.scrollY > 0);
    headerT.classList.toggle('change', window.scrollY > 0);
    headerS.classList.toggle('change', window.scrollY > 0);
  },

  _buttonStickyOpen(header, headerT, headerS) {
    header.classList.add('sticky');
    headerT.classList.add('change');
    headerS.classList.add('change');
  },

  _scrollToggleDrawer(drawer) {
    drawer.classList.toggle('open', window.scroll === 0);
  },
};

export default DrawerInitiator;
