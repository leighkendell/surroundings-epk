import Img from 'gatsby-image';
import React from 'react';

interface Props {
  title: string;
  image: any;
}

const Header = ({ title, image }: Props) => (
  <header role="banner">
    <h1>{title}</h1>
    <Img fluid={image} />
  </header>
);

export default Header;
