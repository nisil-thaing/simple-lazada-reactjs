import Loadable from 'react-loadable';

import PageLoading from './core/components/PageLoading';

/* START - Dummy component for testing routing config */
const AsyncSandwichesPage = Loadable({
    loader: function () {
      return import(
        /* webpackChunkName: 'sandwichesPage' */ 'app/views/DummyPage/SandwichesPage'
      );
    },
    loading: PageLoading,
    modules: ['sandwichesPage'],
  }),
  AsyncTacosPage = Loadable({
    loader: function () {
      return import(
        /* webpackChunkName: 'tacosPage' */ 'app/views/DummyPage/TacosPage'
      );
    },
    loading: PageLoading,
    modules: ['tacosPage'],
  }),
  AsyncBusPage = Loadable({
    loader: function () {
      return import(
        /* webpackChunkName: 'busPage' */ 'app/views/DummyPage/BusPage'
      );
    },
    loading: PageLoading,
    modules: ['busPage'],
  }),
  AsyncCartPage = Loadable({
    loader: function () {
      return import(
        /* webpackChunkName: 'cartPage' */ 'app/views/DummyPage/CartPage'
      );
    },
    loading: PageLoading,
    modules: ['cartPage'],
  });

/* END - Dummy component for testing routing config */

const routes = [
  {
    path: '/sandwiches',
    component: AsyncSandwichesPage,
  },
  {
    path: '/tacos',
    component: AsyncTacosPage,
    routes: [
      {
        path: '/tacos/bus',
        component: AsyncBusPage,
      },
      {
        path: '/tacos/cart',
        component: AsyncCartPage,
      },
    ],
  },
];

export default routes;
