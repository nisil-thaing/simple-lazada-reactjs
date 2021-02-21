import styled from 'styled-components';

import { pixelsToRem } from 'app/core/utils/stylesheet-mixins.util';

export const Container = styled.header`
  padding: ${ pixelsToRem(48) };
`;