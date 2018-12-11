import 'normalize.css';
import { createGlobalStyle } from '../helpers/styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.colorBlack};
    line-height: 1.4;
  }

  * {
    box-sizing: inherit;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
