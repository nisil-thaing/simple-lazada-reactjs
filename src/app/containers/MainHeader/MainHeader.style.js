import styled from 'styled-components';

import { pixelsToRem } from 'app/core/utils/stylesheet-mixins.util';
import { COLORS } from 'app/core/constants/ui-styling.constant';

export const Container = styled.header`
  padding: ${ pixelsToRem(48) };
  background-color: ${ COLORS.GLOBAL_WHITE };

  ul {
    list-style: none;
  }

  .app-logo {
    width: ${ pixelsToRem(127) };
  }

  .nav-links {
    a.active {
      font-weight: bold;
      text-decoration: none;
    }
  }
`;