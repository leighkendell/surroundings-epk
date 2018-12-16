import 'normalize.css';
import { createGlobalStyle } from '../helpers/styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${props => props.theme.colorBlack};
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
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

  p {
    margin: 0 0 1rem;
  }
`;

export default GlobalStyle;
