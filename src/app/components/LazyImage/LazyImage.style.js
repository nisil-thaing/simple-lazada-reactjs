import styled from 'styled-components';

import { COLORS } from 'app/core/constants/ui-styling.constant';

export const Container = styled.div`
  background-color: ${ props => props.backgroundColor || COLORS.BACKGROUND_COLOR };
  width: 100%;

  .lazy-image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: ${ props => props.imageRatio || '100%' };
    opacity: 1;
    transition: opacity 0.1s ease-in-out;

    &.loading {
      opacity: 0;
    }
  }
`;
