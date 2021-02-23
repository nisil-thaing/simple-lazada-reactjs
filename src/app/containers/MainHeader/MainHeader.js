import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import withExtractingMockData from 'app/hocs/withExtractingMockData';

import { Container } from './MainHeader.style';
import LazyImage from 'app/components/LazyImage/LazyImage';

function MainHeader ({ data }) {
  return <Container className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
    <Link to="/" className="d-block app-logo">
      <LazyImage
        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
        ratio={ 40 / 127 }
        backgroundColor='transparent' />
    </Link>
    <ul className="d-flex flex-column flex-md-row flex-wrap mt-4 mt-lg-0 mb-0 p-0 nav-links">
      {
        data?.map(function (item) {
          const slug = '/' + item.slug;

          return <li key={ item.id } className="mr-3">
            <NavLink to={ slug }>{ item.name }</NavLink>
          </li>;
        })
      }
    </ul>
  </Container>;
}

export default withExtractingMockData(
  MainHeader,
  '/category-list.json'
);