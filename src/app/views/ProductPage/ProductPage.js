import React from 'react';
import {
  arrayOf,
  shape,
  oneOfType,
  number,
  string
} from 'prop-types';

import { Container } from './ProductPage.style';
import withExtractingMockData from 'app/hocs/withExtractingMockData';
import LazyImage from 'app/components/LazyImage/LazyImage';
import RatingStars from 'app/components/RatingStars/RatingStars';
import QuantitySelectionsToCart from 'app/components/QuantitySelectionsToCart/QuantitySelectionsToCart';

function ProductPage ({ data }) {
  const ratings = parseFloat(data?.ratingScore) || 0,
    numOfRaters = parseInt(data?.review, 10) || 0;

  return <Container className="container pt-4 pt-lg-5 pb-4 pb-lg-5">
    <section className="row">
      {/* <section className="row col-12 col-lg-8 product-info-wrapper"> */}
      <section className="row col-12 product-info-wrapper">
        <div className="col-12 col-md-5 gallery-wrapper">
          <LazyImage
            src={ data?.image }
            ratio={ 1 } />
        </div>
        <div className="col-12 col-md-7 product-details-wrapper">
          {
            data?.icons && data.icons[0]?.url && <div className="mb-3 mod-product-badge"><LazyImage
              src={ data.icons[0].url }
              ratio={ 28 / 94 } /></div>
          }
          <h5>{ data?.name || '--' }</h5>
          <div className="mt-4 social-rating-wrapper">
            <RatingStars ratings={ ratings } numOfRaters={ numOfRaters } />
          </div>
          <div className="mt-4 brand-info">
            Brand:
            <a
              href="javascript:void(0)"
              className="ml-1 mr-1">
              { data?.brandName || '--' }
            </a>
            |
            <a
              href="https://www.lazada.vn/dien-thoai-di-dong/samsung/"
              className="ml-1" hidden>
              More Smartphones from Samsung
            </a>
          </div>
          <div className="w-100 mt-3 ads-banner">
            <LazyImage src="https://gcp-img.slatic.net/lazada/id0074631-480-72.jpg#width=480&height=72"
              ratio={ 72 / 480 } />
          </div>
          <div className="mt-3 price-wrapper">
            <h2 className="m-0">{ data?.priceShow || '--' }</h2>
            <div className="mt-1 origin-price">
              <span className="line-through-text">{ data?.originalPriceShow }</span>
              <span className="ml-2">{ data?.discount }</span>
            </div>
          </div>
          <div hidden>
            <div className="d-flex align-items-center mt-4 promotion-wrapper">
              <h6 className="m-0">Promotions</h6>
              <div className="pt-1 pb-1 pl-2 pr-2 tag-name">
                <span>Spend ₫ 2,000,000 get ₫ 50,000 shipping fee off</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 quantity-wrapper">
            <QuantitySelectionsToCart />
          </div>
        </div>
      </section>
      <section className="col-12 col-lg-4 delivery-info-wrapper" hidden>
        <ul className="delivery-sections-wrapper">
          <li className="delivery-section-item">
            <div className="delivery-section-header"></div>
            <div className="delivery-section-body"></div>
          </li>
        </ul>
      </section>
    </section>
  </Container>;
}

ProductPage.propTypes = {
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
    productUrl: string,
    brandName: string
  }))
};

ProductPage.defaultProps = {
  data: []
};

export default withExtractingMockData(
  ProductPage,
  '/product-list.json',
  'slug',
  'productUrl',
  '',
  true
);