/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestoranModel } from './contract/favoriteRestoranContract';

let favoriteRstaurant = [];

const FavoriteRestoranArray = {

  getRestoran(id) {
    if (!id) {
      return;
    }

    return favoriteRstaurant.find((restoran) => restoran.id == id);
  },

  getAllRestorans() {
    return favoriteRstaurant;
  },

  putRestoran(restoran) {
    if (!restoran.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getRestoran(restoran.id)) {
      return;
    }

    favoriteRstaurant.push(restoran);
  },

  deleteRestoran(id) {
    favoriteRstaurant = favoriteRstaurant.filter((restoran) => restoran.id != id);
  },
};

describe('Favorite Restoran Array Contract Test Implementation', () => {
  afterEach(() => favoriteRstaurant = []);

  itActsAsFavoriteRestoranModel(FavoriteRestoranArray);
});
