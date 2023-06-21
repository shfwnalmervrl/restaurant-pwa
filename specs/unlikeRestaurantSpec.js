import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking Restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(
            document.querySelector('[aria-label="unlike this resto"]'),
        ).toBeTruthy();
    });

    it('should not display unlike widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(
            document.querySelector('[aria-label="like this resto"]'),
        ).toBeFalsy();
    });

    it('should be able to remove liked resto from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document
            .querySelector('[aria-label="unlike this resto"]')
            .dispatchEvent(new Event('click'));
        const allResto = await FavoriteRestaurantIdb.getAllRestaurants();

        expect(allResto).toEqual([]);
    });

    it('should not throw error if the unliked resto is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);
        document
            .querySelector('[aria-label="unlike this resto"]')
            .dispatchEvent(new Event('click'));
        const allResto = await FavoriteRestaurantIdb.getAllRestaurants();

        expect(allResto).toEqual([]);
    });
});