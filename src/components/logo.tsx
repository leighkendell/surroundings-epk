import styled from '../helpers/styled-components';
import logo from '../images/surroundings-logo.svg';

const Logo = styled(logo)`
  width: 60px;
  height: 30px;

  * {
    fill: ${props => props.theme.colorBlack};
  }
`;

export default Logo;
