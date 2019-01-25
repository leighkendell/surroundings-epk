import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';

interface Props {
  open?: boolean;
}

const NavToggle = styled.button.attrs(({ open }: Props) => ({
  'aria-label': open ? 'Close menu' : 'Open menu',
}))<Props>`
  position: relative;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 0.5s ease-in-out;
  border: 0;
  outline: 0;
  background: none;
  appearance: none;
  ${props => props.open && `transform: rotate(1turn)`};

  ${breakpoint.medium`
    display: none;
  `}

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 10%;
    width: 80%;
    height: 2px;
    transform-origin: right;
    transition: 0.25s ease;
    transition-delay: 0.25s;
    background-color: ${props => props.theme.colorBlack};
  }

  &::before {
    top: 6px;
    ${props => !props.open && `box-shadow: 0 8px 0 0 currentColor`};
    ${props => props.open && `transform: rotate(-45deg) translate(-2px, -3px)`};
  }

  &::after {
    bottom: 6px;
    ${props => props.open && `transform: rotate(45deg) translate(-2px, 3px)`};
  }
`;

export default NavToggle;
