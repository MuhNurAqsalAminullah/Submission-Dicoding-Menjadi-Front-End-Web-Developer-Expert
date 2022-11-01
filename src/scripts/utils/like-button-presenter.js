/* eslint-disable prefer-const */
// import FavoriteRestorantIdb from '../data/favoriterestoran-idb';
import { createLikeRestoranButtonTemplate, createLikedRestoranButtonTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRstaurant, restoran }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restoran;
    this._favoriteRestaurant = favoriteRstaurant;

    await this._renderButton(restoran.id, restoran);
  },

  async _renderButton(id, restaurant) {
    if (await this._isRestoranExist(id)) {
      this._renderLiked(restaurant);
    } else {
      this._renderLike(restaurant);
    }
  },

  async _isRestoranExist(id) {
    const restoran = await this._favoriteRestaurant.getRestoran(id);
    return !!restoran;
  },

  _renderLike(restaurant) {
    this._likeButtonContainer.innerHTML = createLikeRestoranButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestoran(restaurant);
      await this._renderButton(restaurant.id, restaurant);
    });
  },

  _renderLiked(restaurant) {
    this._likeButtonContainer.innerHTML = createLikedRestoranButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestoran(restaurant.id);
      await this._renderButton(restaurant.id, restaurant);
    });
  },
};

export default LikeButtonInitiator;
