import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

interface Props {
  open?: boolean;
}

const NavList = styled.ul<Props>`
  display: flex;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  position: fixed;
  z-index: -1;
  top: 100%;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${props => props.theme.headerSmall});
  margin: 0;
  padding: ${props => props.theme.spacingSmall};
  transform: ${props => (props.open ? 'translateY(-100%)' : 'translateY(0)')};
  transition: 0.35s ease-in-out;
  background-color: ${props => props.theme.colorWhite};
  text-align: center;

  ${breakpoint.medium`
    position: static;
    visibility: visible;
    flex-direction: row;
    width: auto;
    height: auto;
    padding: 0;
    transform: none;
    transition: none;
    z-index: 1;
  `}
`;

export default NavList;
