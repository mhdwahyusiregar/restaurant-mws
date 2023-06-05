import DaftarRestaurant from '../views/pages/daftar-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': DaftarRestaurant, // default page
  '/favorite': Like,
  '/detail/:id': Detail,
};

export default routes;
