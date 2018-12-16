import React from 'react';

interface State {
  navOpen: boolean;
}

interface StoreContext {
  state: State;
  toggleNavOpen?: () => void;
}

const initialState = {
  navOpen: false,
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

  public render() {
    const { children } = this.props;

    const data: StoreContext = {
      state: this.state,
      toggleNavOpen: this.toggleNavOpen,
    };

    return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
  }
}

export default Store;
