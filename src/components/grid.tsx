import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

interface Props {
  minWidth?: number;
}

const Grid = styled.div<Props>`
  --gap: ${props => props.theme.spacingSmall};

  display: grid;
  grid-gap: var(--gap);

  ${breakpoint.medium`
    --gap: ${props => props.theme.spacingMedium};
    grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth}px, 1fr));
  `}
`;

Grid.defaultProps = {
  minWidth: 300,
};

export default Grid;
