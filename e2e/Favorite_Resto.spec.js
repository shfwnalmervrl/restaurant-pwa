const assert = require('assert');

Feature('Favorite Resto');

Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card a');
    const firstRestoCard = locate('.card-content-title').first();
    const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
    I.click(firstRestoCard);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.card-content-title');
    assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.card-content-title');
    I.click(likedCardTitle);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('#fav-resto');
    I.dontSeeElement('.card');
    I.dontSeeElement('.card-content-title');
});