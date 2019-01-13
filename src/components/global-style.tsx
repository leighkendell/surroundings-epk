import 'normalize.css';
import { breakpoint } from '../helpers/style-utils';
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

  h1,
  h2,
  h3 {
    margin: 0 0 1rem;
    font-weight: bold;
  }

  h1,
  h2 {
    --scale: 0.5;

    ${breakpoint.medium`
      --scale: 0.75;
    `}

    ${breakpoint.large`
      --scale: 1;
    `};
  }

  h1 {
    font-size: calc(${props => props.theme.fontSizeXLarge} * var(--scale));
  }

  h2 {
    font-size: calc(${props => props.theme.fontSizeLarge} * var(--scale));
  }

  h3 {
    --scale: 0.75;

    font-size: calc(${props => props.theme.fontSizeMedium} * var(--scale));

    ${breakpoint.medium`
      --scale: 1;
    `}
  }

  p {
    margin: 0 0 1rem;
  }
`;

export default GlobalStyle;
