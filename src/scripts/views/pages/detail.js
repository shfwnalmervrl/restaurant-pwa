import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import { restoDetail } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Detail = {
    async render() {
        return `
            <div class="container">
    
                <div class="like" id="likeButtonContainer"></div>
    
                <div id="main-container">
                    <h1 class="main-content__title">Resto Detail</h1>
    
                    <section id="detail-resto"></section>
                </div>
            </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
        const detailContainer = document.querySelector('#detail-resto');
        detailContainer.innerHTML = restoDetail(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favRestoIdb: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                pictureId: restaurant.pictureId,
                rating: restaurant.rating,
                city: restaurant.city,
                description: restaurant.description,
            },
        });
    },
};

export default Detail;