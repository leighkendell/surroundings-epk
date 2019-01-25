import React from 'react';
import styled from '../helpers/styled-components';
import Section from './section';
import SocialIcons from './social-icons';
import Wrapper from './wrapper';

const currentYear = new Date().getFullYear();

const FooterWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Footer = () => (
  <Section as="footer" variation="primary" role="contentinfo">
    <FooterWrapper>
      <strong>&copy; {currentYear} Surroundings</strong>
      <SocialIcons />
    </FooterWrapper>
  </Section>
);

export default Footer;
