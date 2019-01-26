import React, { ReactElement } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
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

class Nav extends React.Component<Props> {
  public static contextType = StoreContext;
  public navEl = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    this.observeHeight();
  }

  public render() {
    const { className, children } = this.props;

    return (
      <nav role="navigation" className={className} ref={this.navEl}>
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
  }

  private observeHeight() {
    const navEl = this.navEl.current;

    if (navEl) {
      const navObserver = new ResizeObserver(entries => {
        const [navElEntry] = entries;
        this.updateHeight(navElEntry);
      });

      navObserver.observe(navEl);
    }
  }

  private updateHeight(entry: ResizeObserverEntry) {
    const { height } = entry.contentRect;

    if (height !== this.context.state.navHeight) {
      this.context.setNavHeight(height);
    }
  }
}

const StyledNav = styled(Nav)`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  align-items: center;
  height: ${props => props.theme.headerSmall};
  background-color: ${props => props.theme.colorWhite};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  ${breakpoint.medium`
    height: ${props => props.theme.headerLarge};
  `}
`;

export default StyledNav;
