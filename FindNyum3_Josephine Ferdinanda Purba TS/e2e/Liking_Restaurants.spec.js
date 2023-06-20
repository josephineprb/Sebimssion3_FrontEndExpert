const assert = require('assert');

Feature('Liking A Restaurant');

Scenario('liking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.waitForElement('.restaurant-item a');

  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.wait(3);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.waitForElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-item a');

  assert.strictEqual(likedRestaurantName, firstRestaurantName);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.waitForElement('.restaurant-item a');

  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.wait(3);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.wait(3);

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.waitForElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-item a');

  assert.strictEqual(likedRestaurantName, firstRestaurantName);

  I.click('.restaurant-item a');

  I.wait(3);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.wait(3);

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.dontSeeElement('.restaurant-item');
});
