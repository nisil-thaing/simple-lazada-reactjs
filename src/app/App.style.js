import styled, { createGlobalStyle } from 'styled-components';

import { COLORS } from './core/constants/ui-styling.constant';
import { FONT_BASE, pixelsToRem } from './core/utils/stylesheet-mixins.util';

export const Container = styled.section`
  text-align: center;

  .main-content-wrapper {
    background-color: ${ COLORS.BACKGROUND_COLOR };
    padding: ${ pixelsToRem(48) };
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${ FONT_BASE }px;

    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      letter-spacing: 0.01em;
      box-sizing: border-box;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
