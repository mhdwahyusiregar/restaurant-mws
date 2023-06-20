import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__content">
      <h2 class="restaurant__name" tabindex="0">${restaurant.name}</h2>
      <img class="restaurant__poster" src="${CONFIG.DETAIL_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0" />
      <div class="restaurant__info" tabindex="0">
        <h3>Information</h3>
        <h4>Address :</h4>
        <p>${restaurant.address}, ${restaurant.city}</p>
        <h4>Rating :</h4>
        <p>${restaurant.rating}</p>
        <h4>Categories :</h4>
        <p>${restaurant.categories.map((category) => category.name).join(' & ')}</p>
        <h4>Foods :</h4>
        <div class="detail-food">
          <ul>
            ${restaurant.menus.foods.map((food, i) => `<li><p>${i + 1}) ${food.name}</p></li>`).join('')}
          </ul>
        </div>
        <h4>Drinks :</h4>
        <div class="detail-drink">
          <ul>
            ${restaurant.menus.drinks.map((drink, i) => `<li><p>${i + 1}) ${drink.name}</p></li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="restaurant__overview" tabindex="0">
        <h3>Deskripsi :</h3>
        <p>${restaurant.description}</p>
      </div>
      <div class="restaurant__overview">
        <h3 class="header" tabindex="0">Customer Reviews :</h3>
        <div class="detail-review">
          ${restaurant.customerReviews.map((review) => `
            <div class="detail-review-item" tabindex="0">
              <div class="review-header">
                <img src="./icon/man.png" alt="icon user">
                <p class="review-name">${review.name}</p>
                <p class="review-name">•</p>
                <p class="review-date">${review.date}</p>
              </div>
              <div class="review-body">
                ${review.review}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
`;

const createDaftarRestaurantTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name || '-'}"
        src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" tabindex="0">
      <div class="restaurant-item__header__rating" tabindex="0">
        <p><span class="restaurant-item__header__rating__score">⭐️ ${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content" tabindex="0">
      <h3 class="restaurant__name"><a href="/#/detail/${restaurant.id}" class="name">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
      <h4>City : ${restaurant.city || '-'}</h4>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createDaftarRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
