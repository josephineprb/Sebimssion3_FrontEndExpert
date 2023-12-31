import ListRestaurant from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurant, // default page
  '/home': ListRestaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
