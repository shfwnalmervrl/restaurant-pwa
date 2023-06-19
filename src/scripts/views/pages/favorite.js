const Favorite = {
    async render() {
        return `
            <div class="container">
                <h1 class="main-content__title">Favorited Resto</h1>
                <section id="fav-resto"></section>
            </div>
        `;
    },

    // eslint-disable-next-line no-empty-function
    async afterRender() {
        
    },
};

export default Favorite;