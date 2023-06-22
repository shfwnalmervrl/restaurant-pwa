const assert = require('assert');

Feature('Favorite Resto');

Scenario('liking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(2);

    I.waitForElement('.card a');
    I.seeElement('.card a');
    const firstRestoCard = locate('.card-content-title').first();
    const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
    I.click(firstRestoCard);

    I.wait(0.5);
    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.card-content-title');
    assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(2);

    I.waitForElement('.card a');
    I.seeElement('.card a');
    I.click(locate('.card-content-title').first());

    I.wait(0.5);
    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.wait(2);

    I.waitForElement('.card');
    I.seeElement('.card');
    const firstRestoCard = locate('.card-content-title').first();
    I.click(firstRestoCard);

    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.wait(2);

    I.dontSeeElement('.card');
    // I.dontSeeElement('.card-content-title');
});