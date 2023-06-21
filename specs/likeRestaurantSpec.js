import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking Restaurant', () => {
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
        document.querySelector('[aria-label="like this resto"]'),
    ).toBeTruthy();
    });

    it('should not show the unlike button when the resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
        document.querySelector('[aria-label="unlike this resto"]'),
    ).toBeFalsy();
    });

    it('should be able to like the resto', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const resto = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(resto).toEqual({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a resto again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const allResto = await FavoriteRestaurantIdb.getAllRestaurants();
        expect(allResto).toEqual([{ id: 1 }]);

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    // menggunakan metode xit, bukan it
    it('should not add a resto when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const allResto = await FavoriteRestaurantIdb.getAllRestaurants();
        expect(allResto).toEqual([]);
    });
});