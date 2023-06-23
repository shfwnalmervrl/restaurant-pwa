import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
    getRestaurant(id) {
        if (!id) {
            return;
        }

        return favoriteRestos.find((restaurant) => restaurant.id === id);
    },

    getAllRestaurants() {
        return favoriteRestos;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestos.push(restaurant);
    },

    deleteRestaurant(id) {
        favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id !== id);
    },
};

describe('Favorite resto array contract test', () => {
  // eslint-disable-next-line no-return-assign
    afterEach(() => (favoriteRestos = []));

    itActsAsFavoriteRestoModel(FavoriteRestoArray);
});