import styledNormalize from 'styled-normalize';
import { breakpoint } from '../helpers/style-utils';
import { createGlobalStyle } from '../helpers/styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    color: ${props => props.theme.colorBlack};
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
  }

  body {
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
    line-height: 1.2;
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

  a {
    color: currentColor;
    font-weight: bold;
    text-decoration: ${props => props.theme.colorYellow} underline;
    text-decoration-skip: ink;
  }
`;

export default GlobalStyle;
