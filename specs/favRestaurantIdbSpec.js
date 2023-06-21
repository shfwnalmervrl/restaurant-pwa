import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});