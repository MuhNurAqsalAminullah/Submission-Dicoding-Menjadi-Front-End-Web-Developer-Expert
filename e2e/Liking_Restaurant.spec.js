/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty favorite Restaurant', ({ I }) => {
  I.seeElement('#post');
  I.see('Belum ada restaurant yang disukai', '#post');
});

Scenario('liking one Restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang disukai', '#post');

  I.amOnPage('/');

  I.seeElement('.post_title a');

  const firstRestaurant = locate('.post_title a').first();
  const firstrestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post_title');

  assert.strictEqual(firstrestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one Restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang disukai', '#post');

  I.amOnPage('/');

  I.seeElement('.post_title a');

  const firstRestaurant = locate('.post_title a').first();
  const firstrestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post_title');

  assert.strictEqual(firstrestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#post');
  const favRestaurantDisable = await I.grabTextFrom('#post');

  assert.strictEqual(favRestaurantDisable, 'Belum ada restaurant yang disukai');
});
// Scenario('test something', ({ I }) => {

// });
