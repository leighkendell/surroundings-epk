import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

const Grid = styled.div`
  --gap: ${props => props.theme.spacingSmall};

  display: grid;
  grid-gap: var(--gap);

  ${breakpoint.small`
    --gap: ${props => props.theme.spacingMedium};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`;

export default Grid;
