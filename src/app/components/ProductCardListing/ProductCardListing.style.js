import styled from 'styled-components';

import { pixelsToRem, truncateText } from 'app/core/utils/stylesheet-mixins.util';
import { COLORS } from 'app/core/constants/ui-styling.constant';

export const Container = styled.ul`
  list-style: none;
`;

export const ItemWrapper = styled.div`
  &:hover {
    box-shadow: 0 1px 6px rgb(0 0 0 / 30%);
  }

  .product-label {
    width: ${ pixelsToRem(50) };
  }

  .product-title {
    h6 {
      line-height: 150%;
      ${ truncateText(2) };
    }
  }

  .price-wrapper {}

  .highlight-price {
    font-size: ${ pixelsToRem(20) };
    font-weight: bold;
    line-height: 100%;
    color: ${ COLORS.ORANGE };
  }

  .old-price, .location {
    font-size: ${ pixelsToRem(12) };
    line-height: 100%;
  }

  .deprecated-price, .location {
    color: ${ COLORS.GREY };
  }

  .old-price {
    color: #757575;
  }

  .deprecated-price {
    text-decoration: line-through;
  }
`;
