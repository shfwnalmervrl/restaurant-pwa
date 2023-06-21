import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
    async init({ likeButtonContainer, restaurant, favRestoIdb }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
        this._favRestoIdb = favRestoIdb;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderDislike();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderDislike() {
        this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

        const dislikeButton = document.querySelector('#likeButton');
        dislikeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonPresenter;