import { FlattenSimpleInterpolation } from 'styled-components';
import { css } from './styled-components';

// Media queries
interface Sizes {
  [key: string]: number;
}

interface Breakpoint {
  [key: string]: (args: any) => FlattenSimpleInterpolation;
}

interface Breakpoints {
  xlarge?: any;
  large?: any;
  medium?: any;
  small?: any;
}

const sizes: Sizes = {
  xlarge: 1170,
  large: 1000,
  medium: 700,
  small: 375,
};

// iterate through the sizes and create a media template
export const breakpoint: Breakpoints = Object.keys(sizes).reduce((accumulator: Breakpoint, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
