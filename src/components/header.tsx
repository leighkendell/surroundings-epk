import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { theme } from '../helpers/theme';

interface Props {
  image: FluidObject;
  alt: string;
}

const Header = ({ image, alt }: Props) => (
  <header role="banner">
    <Img fluid={image} alt={alt} backgroundColor={theme.colorGrey} />
  </header>
);

export default Header;
