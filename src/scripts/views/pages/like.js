import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate(); // new template
    // return `
    //   <div class="content">
    //     <h2 class="content__heading">Your Favorite Restaurant</h2>
    //     <div id="restaurants" class="restaurants">

    //     </div>
    //   </div>
    // `;
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
