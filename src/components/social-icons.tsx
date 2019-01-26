import React from 'react';
import styled from '../helpers/styled-components';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  a {
    display: block;
    line-height: 0;
  }

  svg {
    margin-left: ${props => props.theme.spacingSmall};
  }
`;

const SocialIcons: React.SFC = () => (
  <SocialIconsWrapper>
    {/* tslint:disable:react-a11y-anchors */}
    <a href="https://www.facebook.com/surroundingsau" aria-label="Facebook">
      <Facebook />
    </a>
    <a href="https://instagram.com/surroundingsau" aria-label="Instagram">
      <Instagram />
    </a>
    <a href="https://twitter.com/surroundingsau" aria-label="Twitter">
      <Twitter />
    </a>
    {/* tslint:enable */}
  </SocialIconsWrapper>
);

export default SocialIcons;
