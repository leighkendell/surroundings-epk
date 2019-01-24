import React, { ReactElement } from 'react';
import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';
import Logo from './logo';
import NavList from './nav-list';
import NavToggle from './nav-toggle';
import NavWrapper from './nav-wrapper';
import { StoreContext } from './store';

interface Props {
  className?: string;
  children?: Array<ReactElement<any>>;
}

const Nav = ({ children, className }: Props) => (
  <nav role="navigation" className={className}>
    <StoreContext.Consumer>
      {context => (
        <NavWrapper>
          <Logo />
          <NavToggle role="button" onClick={context.toggleNavOpen} open={context.state.navOpen} />
          <NavList open={context.state.navOpen}>{children}</NavList>
        </NavWrapper>
      )}
    </StoreContext.Consumer>
  </nav>
);

const StyledNav = styled(Nav)`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  align-items: center;
  height: ${props => props.theme.headerSmall};
  overflow: hidden;
  background-color: ${props => props.theme.colorWhite};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  ${breakpoint.medium`
    height: ${props => props.theme.headerLarge};
  `}
`;

export default StyledNav;
