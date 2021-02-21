import styled from 'styled-components';

import { pixelsToRem } from 'app/core/utils/stylesheet-mixins.util';
import { COLORS } from 'app/core/constants/ui-styling.constant';

export const Container = styled.section`
  .mod-product-badge {
    width: ${ pixelsToRem(54) };
  }

  .brand-info {
    font-size: ${ pixelsToRem(12) };
    line-height: 100%;
    color: ${ COLORS.GREY };
  }

  .price-wrapper {
    color: #f57224;
  }

  .origin-price {
    font-size: ${ pixelsToRem(14) };
    line-height: 100%;

    span {
      color: ${ COLORS.BLACK };
    }

    .line-through-text {
      text-decoration: line-through;
      color: ${ COLORS.GREY };
    }
  }

  .promotion-wrapper {
    font-size: ${ pixelsToRem(14) };
    line-height: 100%;
    color: #757575;

    .tag-name {
      font-size: ${ pixelsToRem(12) };
      line-height: 100%;
      background-color: ${ COLORS.ORANGE };
      color: ${ COLORS.GLOBAL_WHITE };
    }
  }
`;