import React from 'react';

import { Container } from './CategoryPage.style';
import ProductCardListing from 'app/components/ProductCardListing/ProductCardListing';

function CategoryPage () {
  return <Container className="container">
    <ProductCardListing />
  </Container>;
}

export default CategoryPage;