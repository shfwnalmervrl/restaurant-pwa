import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { restoCard } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="container">
                <h1 class="main-content__title">Favorited Resto</h1>
                <section id="fav-resto"></section>
            </div>
        `;
    },

    async afterRender() {
        const data = await FavoriteRestaurantIdb.getAllRestaurants();
        const listFavorite = document.querySelector('#fav-resto');
        data.forEach((restaurant) => {
            listFavorite.innerHTML += restoCard(restaurant);
        });
    },
};

export default Favorite;