import React from 'react';

import { Container } from './ProductCardListing.style';
import ProductCard from './ProductCard';

function ProductCardListing () {
  return <Container className="row">
    {
      [ ...Array(20).keys() ].map(value => <li key={ value } className="col-12 col-md-6 col-lg-3 mb-4">
        <ProductCard />
      </li>)
    }
  </Container>;
}

export default ProductCardListing;