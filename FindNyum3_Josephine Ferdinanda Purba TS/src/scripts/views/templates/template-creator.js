import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__pic lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information Restaurant</h3>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kota</h4>
    <p>${restaurant.city} minutes</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p> 
    
    <div class="restaurant__description">
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <h4>Kategori Makanan</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Menu Restoran</h4>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
    <h4>Review</h4>
    <p>${restaurant.customerReviews.map(
    (customerReview) => `
    <div class="restaurant__review">
    <p>${customerReview.date}</p>
    <h5>${customerReview.name}</h5>
    <p>${customerReview.review}</p>
    </div>
    `,
  )}</p>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__pic lazyload" alt="${restaurant.name}"
           data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}">
      <div class=restaurant-item__header__rating__score">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
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
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
