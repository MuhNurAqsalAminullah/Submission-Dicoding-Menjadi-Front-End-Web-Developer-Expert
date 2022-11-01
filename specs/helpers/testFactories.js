/* eslint-disable import/prefer-default-export */
import FavoriteRestorantIdb from '../../src/scripts/data/favoriterestoran-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestoran = async (restoran) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRstaurant: FavoriteRestorantIdb,
    restoran,
  });
};

export { createLikeButtonPresenterWithRestoran };
