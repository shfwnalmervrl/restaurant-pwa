import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import { restoDetail } from '../templates/template-creator';

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

    // eslint-disable-next-line no-empty-function
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const data = RestaurantSource.getRestaurantDetail(url.id);
        const detailContainer = document.querySelector('#detail-resto');
        detailContainer.innerHTML += restoDetail(data);
    },
};

export default Detail;