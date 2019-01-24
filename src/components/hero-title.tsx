import React from 'react';
import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';
import Wrapper from './wrapper';

const HeroTitleWrapper = styled(Wrapper)`
  position: relative;
  z-index: 1;
  height: 0;

  & {
    padding-top: 0;
    padding-bottom: 15px;

    ${breakpoint.large`
      padding-bottom: 0;
    `}
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colorBlue};
  }
`;

const HeroTitleText = styled.h1`
  margin: 0;
  transform: translateY(-50%);
  color: ${props => props.theme.colorYellow};
`;

const HeroTitle: React.SFC = ({ children }) => (
  <HeroTitleWrapper small={true}>
    <HeroTitleText>{children}</HeroTitleText>
  </HeroTitleWrapper>
);

export default HeroTitle;
