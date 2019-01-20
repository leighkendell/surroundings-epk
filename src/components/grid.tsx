import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacingMedium};

  ${breakpoint.small`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`;

export default Grid;
