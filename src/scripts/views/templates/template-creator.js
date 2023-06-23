import CONFIG from '../../globals/config';

const restoCard = (restaurant) => `
        <div tabindex="0" class="card">
            <a href="#/detail/${restaurant.id}" class="card-a-tag">
                <div class="img-container">
                    <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
                    <span tabindex="0" class="card-rating">
                        <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>

            <div tabindex="0" class="card-content">
                <h2 class="card-content-title">${restaurant.name} - ${restaurant.city}</h2>
                <p class="truncate">${restaurant.description}</p>
            </div>
        </a>
    </div>
`;

const restoDetail = (restaurant) => `
        <div class="detail">
            <div class="img-container">
                <img class="detail-img lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
            </div>

            <ul class="detail-info">
                <li>
                    <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
                    <p class="detail-name-address-rating">${restaurant.name}</p>
                </li>

                <li>
                    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
                    <p class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
                </li>
                <li>
                    <i title="ratings" class="fas fa-star icon-primary"></i>
                    <p class="detail-name-address-rating">${restaurant.rating}</p>
                </li>

                <li><p class="detail-desc">${restaurant.description}</p></li>

                <li>${restaurant.categories
                    .map(
                        (category) => `
                            <span class="category">${category.name}</span>
                        `,
                        )
                    .join('')}
                </li>
            </ul>

        <h3>Menu</h3>

        <div class="detail-menu">
            <div class="detail-food">
                <h4>Food</h4>
                    <ul>
                    ${restaurant.menus.foods
                        .map(
                        (food, i) => `
                            <li><p>${i + 1}) ${food.name}</p></li>
                        `,
                        )
                        .join('')}
                    <ul>
            </div>

        <div class="detail-drink">
            <h4>Drink</h4>
                    <ul>
                    ${restaurant.menus.drinks
                        .map(
                        (drink, i) => `
                            <li><p>${i + 1}) ${drink.name}</p></li>
                        `,
                        )
                        .join('')}
                    <ul>
            </div>
        </div>

        <h3 class="title-review">Reviews</h3>

            <div class="detail-review">
            ${restaurant.customerReviews
            .map(
                (review) => `
                <div class="detail-review-item">
                    <div class="review-header">
                        <p class="review-name">${review.name}</p>

                        <p class="review-date">${review.date}</p>
                    </div>

                    <div class="review-body">
                    ${review.review}
                    </div>
                </div>
                `,
            )
            .join('')}
        </div>
    </div>
`;

const createLikeRestoButtonTemplate = () => `
    <button aria-label="like this resto" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestoButtonTemplate = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    restoCard,
    restoDetail,
    createLikeRestoButtonTemplate,
    createUnlikeRestoButtonTemplate,
};