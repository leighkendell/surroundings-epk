import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from '../helpers/styled-components';
import { Release } from '../types/gatsby-types';

interface Props {
  image: Release['release_image'];
  name: string;
  year: number;
}

const ReleaseItem = ({ image, name, year }: Props) => (
  <div>
    <Img fluid={image.localFile.childImageSharp.fluid} alt={image.alt} />
    <h3>{name}</h3>
    <span>{year}</span>
  </div>
);

export default ReleaseItem;
