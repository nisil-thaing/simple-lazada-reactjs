import styled from 'styled-components';

import { COLORS } from 'app/core/constants/ui-styling.constant';
import { pixelsToRem } from 'app/core/utils/stylesheet-mixins.util';

export const Container = styled.div`
  font-size: ${ pixelsToRem(12) };
  line-height: 100%;
  color: ${ COLORS.STAR_YELLOW };

  ul {
    list-style: none;
  }
`;
