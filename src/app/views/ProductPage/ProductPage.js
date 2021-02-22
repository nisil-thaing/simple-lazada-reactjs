import React from 'react';

import { Container } from './ProductPage.style';
import LazyImage from 'app/components/LazyImage/LazyImage';
import RatingStars from 'app/components/RatingStars/RatingStars';
import QuantitySelectionsToCart from 'app/components/QuantitySelectionsToCart/QuantitySelectionsToCart';

function ProductPage () {
  return <Container className="container">
    <section className="row">
      <section className="row col-12 col-lg-8 product-info-wrapper">
        <div className="col-12 col-md-5 gallery-wrapper">
          <LazyImage
            src={ 'https://vn-test-11.slatic.net/p/cb123be2c1534f0b41601a6389f99636.jpg' }
            ratio={ 1 } />
        </div>
        <div className="col-12 col-md-7 product-details-wrapper">
          <div className="mod-product-badge">
            <LazyImage
              src={ 'https://laz-img-cdn.alicdn.com/imgextra/i1/O1CN01JUOYif22N3Uu7JX4R_!!6000000007107-2-tps-162-48.png' }
              ratio={ 48 / 162 } />
          </div>
          <h5 className="mt-3">[PHIÊN BẢN MỚI] Điện thoại Samsung Galaxy A01 Core (2GB/32GB)  - Màn hình chuẩn HD+ - Mới 100% - Bảo Hành 12 tháng -  Miễn phí vận chuyển</h5>
          <div className="mt-4 social-rating-wrapper">
            <RatingStars ratings={ 3.5 } numOfRaters={ 38 } />
          </div>
          <div className="mt-4 brand-info">
            Brand:
            <a
              href="https://www.lazada.vn/samsung/"
              className="ml-1 mr-1">
              Samsung
            </a>
            |
            <a
              href="https://www.lazada.vn/dien-thoai-di-dong/samsung/"
              className="ml-1">
              More Smartphones from Samsung
            </a>
          </div>
          <div className="w-100 mt-3 ads-banner">
            <LazyImage src="https://gcp-img.slatic.net/lazada/id0074631-480-72.jpg#width=480&height=72"
              ratio={ 72 / 480 } />
          </div>
          <div className="mt-3 price-wrapper">
            <h2 className="m-0">₫1,750,000</h2>
            <div className="mt-1 origin-price">
              <span className="line-through-text">₫2,590,000</span>
              <span className="ml-2">-32%</span>
            </div>
          </div>
          <div className="d-flex align-items-center mt-4 promotion-wrapper">
            <h6 className="m-0">Promotions</h6>
            <div className="pt-1 pb-1 pl-2 pr-2 tag-name">
              <span>Spend ₫ 2,000,000 get ₫ 50,000 shipping fee off</span>
            </div>
          </div>
          <div className="mt-3 pt-2 quantity-wrapper">
            <QuantitySelectionsToCart />
          </div>
        </div>
      </section>
      <section className="col-12 col-lg-4 delivery-info-wrapper">
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

export default ProductPage;