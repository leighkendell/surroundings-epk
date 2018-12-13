import Img, { FluidObject } from 'gatsby-image';
import React from 'react';

interface Props {
  image: FluidObject;
  alt: string;
}

const Header = ({ image, alt }: Props) => (
  <header role="banner">
    <Img fluid={image} alt={alt} />
  </header>
);

export default Header;
