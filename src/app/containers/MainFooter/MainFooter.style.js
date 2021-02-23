import styled from 'styled-components';

import { pixelsToRem } from 'app/core/utils/stylesheet-mixins.util';
import { COLORS } from 'app/core/constants/ui-styling.constant';

export const Container = styled.footer`
  padding: ${ pixelsToRem(48) };
  background-color: ${ COLORS.GLOBAL_WHITE };
`;
