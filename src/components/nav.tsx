import React, { ReactElement } from 'react';
import styled from '../helpers/styled-components';
import Logo from './logo';
import NavList from './nav-list';
import NavToggle from './nav-toggle';
import NavWrapper from './nav-wrapper';

interface Props {
  className?: string;
  children?: Array<ReactElement<any>>;
}

interface State {
  open: boolean;
}

class Nav extends React.Component<Props, State> {
  public state = {
    open: false,
  };

  public render() {
    const { children, className } = this.props;
    const { open } = this.state;

    return (
      <nav role="navigation" className={className}>
        <NavWrapper>
          <Logo />
          <NavToggle role="button" onClick={this.toggleOpen} open={open} />
          <NavList open={open}>{children}</NavList>
        </NavWrapper>
      </nav>
    );
  }

  private toggleOpen = () => {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  };
}

const StyledNav = styled(Nav)`
  position: sticky;
  z-index: 1;
  top: 0;
  height: ${props => props.theme.headerSmall};
  background-color: ${props => props.theme.colorWhite};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export default StyledNav;
