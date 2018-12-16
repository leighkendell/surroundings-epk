import React from 'react';
import styled from '../helpers/styled-components';

interface Props {
  target: string;
  className?: string;
}

class NavListItem extends React.Component<Props> {
  public scrollToTarget(event: React.MouseEvent) {
    const target = event.target as HTMLAnchorElement;
    const targetEl = document.querySelector(`${target.hash}`);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public render() {
    const { children, target, className } = this.props;

    return (
      <li className={className}>
        <a href={`#${target}`} onClick={this.scrollToTarget}>
          {children}
        </a>
      </li>
    );
  }
}

const StyledNavListItem = styled(NavListItem)`
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    display: block;
    padding: ${props => props.theme.spacingSmall};
    color: currentColor;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default StyledNavListItem;
