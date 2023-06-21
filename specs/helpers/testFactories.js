import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favRestoIdb: FavoriteRestaurantIdb,
        restaurant,
    });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };