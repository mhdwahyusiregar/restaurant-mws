const assert = require('assert');

Feature('Liking Restaurant & Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('h3 a', 2);
  I.seeElement('h3 a');

  const firstRestaurant = locate('h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('h3');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('h3 a', 2);
  I.seeElement('h3 a');

  const firstRestaurant = locate('h3 a').first();
  const firstRestaurantsNames = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const unlikedRestaurantsNames = await I.grabTextFrom('h3 a');
  assert.strictEqual(firstRestaurantsNames, unlikedRestaurantsNames);

  I.waitForElement('h3 a', 2);
  I.seeElement('h3 a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// eslint-disable-next-line max-len
// Untuk kk Reviewers. tolong bantu bagaimana cara menjalankan ,
// fitur search restaurant di bawah ini, karena saya penasaran banget tetapi ke ketemu2 solusinya

// Scenario('searching restaurants', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.waitForElement('.restaurant__name a', 2);
//   I.seeElement('.restaurant__name a');

//   const name = [];

//   // eslint-disable-next-line no-plusplus
//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.restaurant__name a').at(i));
//     I.waitForElement('#likeButton', 2);
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     // eslint-disable-next-line no-await-in-loop
//     name.push(await I.grabTextFrom('.restaurant__name'));
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/favorite');
//   I.waitForElement('#query', 2);
//   I.seeElement('#query');

//   const searchQuery = name[1].substring(1, 3);
//   const searchURL = `/#/favorite/${searchQuery}`;

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter', '#query');

//   I.waitInUrl(searchURL, 20); // Tunggu hingga URL berubah menjadi `/search?q=<searchQuery>`
//   I.waitForElement('.restaurant-item', 30);

//   const matchingRestaurants = await I.grabTextFromAll('.restaurant__name');
//   const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');

//   assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

//   // eslint-disable-next-line no-shadow
//   matchingRestaurants.forEach(async (name, index) => {
//     const visibleName = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
//     assert.strictEqual(name, visibleName);
//   });
// });
