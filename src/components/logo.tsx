import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';
import logo from '../images/surroundings-logo.svg';

const Logo = styled(logo)`
  width: 60px;
  height: 30px;

  ${breakpoint.medium`
    width: 100px;
    height: 50px;
  `}

  * {
    fill: ${props => props.theme.colorBlack};
  }
`;

export default Logo;
