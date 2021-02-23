import React from 'react';
import { Link } from 'react-router-dom';

import { ItemWrapper as Container } from './ProductCardListing.style';
import LazyImage from '../LazyImage/LazyImage';
import RatingStars from '../RatingStars/RatingStars';

import { parseProductUrlToSlug } from 'app/core/utils/string.util';

function ProductCard ({ data }) {
  const ratings = parseFloat(data?.ratingScore) || 0,
    numOfRaters = parseInt(data?.review, 10) || 0;
  const productSlug = parseProductUrlToSlug(data?.productUrl),
    productUrl = `/products/${ productSlug }`;

  return <Container>
    <Link to={ productUrl } className="w-100 featured-image-wrapper">
      <LazyImage
        src={ data?.image }
        ratio={ 1 } />
    </Link>
    <div className="p-2">
      <div className="mt-2 product-label">
        {
          data?.icons && data.icons[0]?.url && <LazyImage
            src={ data.icons[0].url }
            ratio={ 28 / 94 } />
        }
      </div>
      <Link to={ productUrl } className="d-block mt-2 product-title">
        <h6>{ data?.name || '--' }</h6>
      </Link>
      <div className="price-wrapper">
        <span className="highlight-price">{ data?.priceShow || '--' }</span>
        <div className="d-flex mt-1 old-price">
          <p className="deprecated-price">{ data?.originalPriceShow }</p>
          <p className="ml-1 discount-percentage">{ data?.discount }</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center others-wrapper">
        <div>
          <RatingStars
            ratings={ ratings }
            usingSmallInfo={ true }
            numOfRaters={ numOfRaters } />
        </div>
        <span className="location">{ data?.location || '--' }</span>
      </div>
    </div>
  </Container>;
}

export default ProductCard;