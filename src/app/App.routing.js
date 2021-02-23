/* eslint-disable react/display-name */
import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

import PageLoading from './core/components/PageLoading';
import MainHeader from './containers/MainHeader/MainHeader';
import MainFooter from './containers/MainFooter/MainFooter';

const AsyncHomePage = Loadable({
    loader: function () {
      return import(
      /* webpackChunkName: 'homePage' */ 'app/views/HomePage/HomePage'
      );
    },
    loading: PageLoading,
    modules: ['HomePage'],
  }),
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
    exact: true,
    header: MainHeader,
    footer: MainFooter
  },
  {
    path: '/products',
    component: () => <Redirect to='/' />,
    exact: true,
    header: MainHeader,
    footer: MainFooter
  },
  {
    path: '/products/:slug',
    component: AsyncProductPage,
    header: MainHeader,
    footer: MainFooter
  }, {
    path: '/:categorySlug',
    component: AsyncCategoryPage,
    header: MainHeader,
    footer: MainFooter
  }
];

export default routes;
