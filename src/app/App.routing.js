/* eslint-disable react/display-name */
import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

import PageLoading from './core/components/PageLoading';

const AsyncHomePage = Loadable({
    loader: function () {
      return import(
      /* webpackChunkName: 'homePage' */ 'app/views/HomePage/HomePage'
      );
    },
    loading: PageLoading,
    modules: ['HomePage'],
  }),
  /* START - Dummy component for testing routing config */
  AsyncSandwichesPage = Loadable({
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
  }),
  /* END - Dummy component for testing routing config */
  AsyncCategoryPage = Loadable({
    loader: function () {
      return import(
        /* webpackChunkName: 'categoryPage' */ 'app/views/CategoryPage/CategoryPage'
      );
    },
    loading: PageLoading,
    modules: ['CategoryPage'],
  }),
  AsyncProductPage = Loadable({
    loader: function () {
      return import(
        /* webpackChunkName: 'productPage' */ 'app/views/ProductPage/ProductPage'
      );
    },
    loading: PageLoading,
    modules: ['ProductPage'],
  });

const routes = [
  {
    path: '/',
    component: AsyncHomePage,
    exact: true
  },
  {
    path: '/sandwiches',
    component: AsyncSandwichesPage,
    exact: true
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
  {
    path: '/products',
    component: () => <Redirect to='/' />,
    exact: true
  },
  {
    path: '/products/:id',
    component: AsyncProductPage
  }, {
    path: '/:categorySlug',
    component: AsyncCategoryPage
  }
];

export default routes;
