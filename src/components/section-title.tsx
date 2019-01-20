import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

const SectionTitle = styled.h2`
  --margin: ${props => props.theme.spacingSmall};

  max-width: 800px;
  margin: 0 auto var(--margin);

  ${breakpoint.small`
    --margin: ${props => props.theme.spacingMedium};
  `}
`;

export default SectionTitle;
