import React from 'react';
import { Link } from 'react-router-dom';

import { ItemWrapper as Container } from './ProductCardListing.style';
import LazyImage from '../LazyImage/LazyImage';
import RatingStars from '../RatingStars/RatingStars';

function ProductCard () {
  return <Container>
    <Link to="/products/some-products-0" className="w-100 featured-image-wrapper">
      <LazyImage
        src="https://vn-test-11.slatic.net/p/b23f6b864c6cee15022574703ba74c59.jpg_400x400q90.jpg_.webp"
        ratio={ 1 } />
    </Link>
    <div className="p-2">
      <div className="product-label">
        <LazyImage
          src="https://gw.alicdn.com/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png"
          ratio={ 28 / 94 } />
      </div>
      <Link to="/products/some-products-0" className="d-block mt-2 product-title">
        <h6>[PHIÊN BẢN MỚI] Điện thoại Samsung Galaxy A01 Core (2GB/32GB)  - Màn hình chuẩn HD+ - Mới 100% - Bảo Hành 12 tháng -  Miễn phí vận chuyển</h6>
      </Link>
      <div className="price-wrapper">
        <span className="highlight-price">₫10,990,000</span>
        <div className="d-flex mt-1 old-price">
          <p className="deprecated-price">₫22,990,000</p>
          <p className="ml-1 discount-percentage">-52%</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center others-wrapper">
        <div><RatingStars ratings={ 4.5 } usingSmallInfo={ true } /></div>
        <span className="location">Ho Chi Minh</span>
      </div>
    </div>
  </Container>;
}

export default ProductCard;