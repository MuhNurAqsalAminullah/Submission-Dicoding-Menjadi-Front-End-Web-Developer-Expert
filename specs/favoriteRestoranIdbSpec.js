/* eslint-disable no-undef */
import FavoriteRestorantIdb from '../src/scripts/data/favoriterestoran-idb';
import { itActsAsFavoriteRestoranModel } from './contract/favoriteRestoranContract';

describe('Favorite Restoran Idb Contract Test Implementatio', () => {
  afterEach(async () => {
    (await FavoriteRestorantIdb.getAllRestorans()).forEach(async (restoran) => {
      await FavoriteRestorantIdb.deleteRestoran(restoran.id);
    });
  });

  itActsAsFavoriteRestoranModel(FavoriteRestorantIdb);
});
