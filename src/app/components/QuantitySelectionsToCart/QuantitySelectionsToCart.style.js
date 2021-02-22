import styled from 'styled-components';

import { pixelsToRem } from 'app/core/utils/stylesheet-mixins.util';
import { COLORS } from 'app/core/constants/ui-styling.constant';

export const Container = styled.section`
  font-size: ${ pixelsToRem(14) };
  line-height: 100%;

  button.btn {
    &:not(:disabled) {
      &:focus {
        box-shadow: none;
      }
    }
  }

  .quantity-selections {
    button {
      width: ${ pixelsToRem(32) };
      height: ${ pixelsToRem(32) };
      background-color: ${ COLORS.BACKGROUND_COLOR };
      color: ${ COLORS.GREY };

      p {
        font-size: ${ pixelsToRem(24) };
        line-height: 100%;
      }

      &.btn {
        &:not(:disabled) {
          &:hover {
            background-color: #dadada;
            color: ${ COLORS.GLOBAL_WHITE };
          }
        }
      }

      &:disabled {
        background-color: #fafafa;
        cursor: not-allowed;
      }
    }

    > h6 {
      font-size: ${ pixelsToRem(14) };
      line-height: 100%;
      width: ${ pixelsToRem(90) };
      color: #757575;
    }
  }

  .value-wrapper {
    width: ${ pixelsToRem(44) };
    background-color: transparent;
  }

  .submission-wrapper {
    button {
      height: ${ pixelsToRem(42) };

      &:not(:disabled):active {
        &.buying-btn {
          background-color: #ffb916;
        }

        &.adding-to-cart-btn {
          background-color: ${ COLORS.ORANGE };
        }
      }
    }

    .buying-btn {
      background-color: #ffb916;
    }

    .adding-to-cart-btn {
      background-color: ${ COLORS.ORANGE };
    }
  }
`;