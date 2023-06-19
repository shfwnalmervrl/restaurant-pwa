import RestaurantSource from '../../data/resto-source';
import { restoCard } from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="container">
    
                <div id="main-container">
                    <h1 tabindex="0" class="main-content__title">Explore Restaurant</h1>
    
                    <section id="explore-restaurant"></section>
                </div>
            </div>
        `;
    },

    // eslint-disable-next-line no-empty-function
    async afterRender() {
        const data = await RestaurantSource.getRestaurantList();
        const listContainer = document.querySelector('#explore-restaurant');
        data.forEach((restaurant) => {
            listContainer.innerHTML += restoCard(restaurant);
        });
    },
};

export default Home;