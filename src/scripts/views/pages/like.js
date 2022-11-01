import FavoriteRestorantIdb from '../../data/favoriterestoran-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="latest">
      <section class="content">
          <h1>Favorite Restorant</h1>
          <hr>
          <div id="post" class="post"></div>
      </section>
    </div>`;
  },

  async afterRender() {
    const restorans = await FavoriteRestorantIdb.getAllRestorans();
    const restoContainer = document.querySelector('#post');
    if (restorans.length === 0) {
      restoContainer.innerHTML = `
      Belum ada restaurant yang disukai
      `;
    }
    const listresto = restorans.length;
    restorans.forEach((resto, index) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto, index, listresto);
    });
  },
};

export default Like;
