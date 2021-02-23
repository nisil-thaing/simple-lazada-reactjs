import React, { useState } from 'react';
import { number } from 'prop-types';

import { Container } from './QuantitySelectionsToCart.style';

function QuantitySelectionsToCart ({ maxValue }) {
  const [ quantity, updateQuantity ] = useState(1);

  function handleDecreaseValue (event) {
    event.stopPropagation();

    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  }

  function handleIncreaseValue (event) {
    event.stopPropagation();

    if (quantity < maxValue) {
      updateQuantity(quantity + 1);
    }
  }

  return <Container>
    <div className="d-flex align-items-center quantity-selections">
      <h6 className="m-0">Quantity</h6>
      <div className="d-flex align-items-center">
        <button
          type="button"
          className="border-0 rounded-0 p-0 btn btn-light"
          onClick={ handleDecreaseValue }
          disabled={ quantity <= 1 }>
          <p className="m-0 pb-1">-</p>
        </button>
        <div className="text-center value-wrapper">{ quantity }</div>
        <button
          type="button"
          className="border-0 rounded-0 p-0 btn btn-light"
          onClick={ handleIncreaseValue }
          disabled={ quantity >= maxValue }>
          <p className="m-0 pb-1">+</p>
        </button>
      </div>
    </div>
    <div className="row mt-3 submission-wrapper">
      <div className="col-12 col-md-6 pr-1">
        <button
          type="button"
          className="w-100 border-0 btn btn-primary buying-btn">
          Buy Now
        </button>
      </div>
      <div className="col-12 col-md-6 pl-1">
        <button
          type="button"
          className="w-100 border-0 btn btn-primary adding-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  </Container>;
}

QuantitySelectionsToCart.propTypes = {
  maxValue: number
};

QuantitySelectionsToCart.defaultProps = {
  maxValue: 10
};

export default QuantitySelectionsToCart;