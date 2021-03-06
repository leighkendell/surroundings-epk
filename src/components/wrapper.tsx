import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

interface Props {
  small?: boolean;
  collapseBottom?: boolean;
}

const Wrapper = styled.div<Props>`
  width: 100%;
  max-width: calc(${props => `(${props.theme.spacingLarge} * 2) + ${props.small ? 800 : 1280}px`});
  margin: 0 auto;
  padding: ${props => props.theme.spacingSmall};

  ${breakpoint.medium`
    padding: ${props => props.theme.spacingMedium};
  `};

  ${breakpoint.large`
    padding: ${props => props.theme.spacingLarge};
  `};

  & {
    ${props => props.collapseBottom && `padding-bottom: 0;`}
  }

  > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
