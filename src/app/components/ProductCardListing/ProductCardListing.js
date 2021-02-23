import React from 'react';
import {
  arrayOf,
  shape,
  oneOfType,
  number,
  string
} from 'prop-types';

import { Container } from './ProductCardListing.style';
import ProductCard from './ProductCard';

function ProductCardListing ({ data }) {
  return <Container className="row">
    {
      data?.map(item => <li key={ item.itemId } className="col-12 col-md-6 col-lg-3 mb-4">
        <ProductCard data={ item } />
      </li>)
    }
  </Container>;
}

ProductCardListing.propTypes = {
  data: arrayOf(shape({
    itemId: oneOfType([ number, string ]),
    name: string,
    image: string,
    originalPriceShow: string,
    priceShow: string,
    discount: string,
    ratingScore: string,
    review: string,
    location: string,
    icons: arrayOf(shape({
      url: string
    })),
    productUrl: string
  }))
};

ProductCardListing.defaultProps = {
  data: []
};

export default ProductCardListing;