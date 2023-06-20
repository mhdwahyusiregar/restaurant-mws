import { createDaftarRestaurantTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <input id="query" type="text">
          <div id="restaurants" class="restaurants">
          </div>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  showFavoriteRestaurants(restaurants = []) {
    if (!restaurants) return; // untuk mengecek restaurant undefine atau null
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createDaftarRestaurantTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
