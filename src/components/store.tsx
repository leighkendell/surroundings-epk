import React from 'react';

interface State {
  navOpen: boolean;
  navHeight: number;
}

interface StoreContext {
  state: State;
  toggleNavOpen?: () => void;
  setNavHeight?: (height: number) => void;
}

const initialState = {
  navOpen: false,
  navHeight: 0,
};

export const StoreContext = React.createContext<StoreContext>({ state: initialState });

class Store extends React.Component<{}, State> {
  public state = initialState;

  public toggleNavOpen = () => {
    const { navOpen } = this.state;

    this.setState({
      navOpen: !navOpen,
    });
  };

  public setNavHeight = (height: number) => {
    this.setState({
      navHeight: height,
    });
  };

  public render() {
    const { children } = this.props;

    const data: StoreContext = {
      state: this.state,
      toggleNavOpen: this.toggleNavOpen,
      setNavHeight: this.setNavHeight,
    };

    return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
  }
}

export default Store;
