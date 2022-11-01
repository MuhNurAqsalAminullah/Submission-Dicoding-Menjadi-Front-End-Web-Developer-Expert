/* eslint-disable no-undef */
import FavoriteRestorantIdb from '../src/scripts/data/favoriterestoran-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });
    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restoran = await FavoriteRestorantIdb.getRestoran(1);

    expect(restoran).toEqual({ id: 1 });

    FavoriteRestorantIdb.deleteRestoran(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    await FavoriteRestorantIdb.putRestoran({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestorantIdb.getAllRestorans()).toEqual([{ id: 1 }]);

    FavoriteRestorantIdb.deleteRestoran(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestorantIdb.getAllRestorans()).toEqual([]);
  });
});
