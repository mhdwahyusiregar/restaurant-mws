import RestaurantSource from '../../data/restaurant-source';
import { createDaftarRestaurantTemplate } from '../templates/template-creator';

const DaftarRestaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Explore Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.DaftarRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createDaftarRestaurantTemplate(restaurant);
    });
  },
};

export default DaftarRestaurant;
