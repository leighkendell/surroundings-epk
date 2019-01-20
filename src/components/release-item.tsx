import Img from 'gatsby-image';
import React from 'react';
import styled from '../helpers/styled-components';
import { Release } from '../types/gatsby-types';

interface Props {
  image: Release['release_image'];
  name: string;
  year: number;
}

const ReleaseItemWrapper = styled.div`
  h3 {
    margin: 0;
  }

  .gatsby-image-wrapper {
    margin-bottom: ${props => props.theme.spacingSmall};
  }
`;

const ReleaseItem = ({ image, name, year }: Props) => (
  <ReleaseItemWrapper>
    <Img fluid={image.localFile.childImageSharp.fluid} alt={image.alt} />
    <h3>{name}</h3>
    <span>{year}</span>
  </ReleaseItemWrapper>
);

export default ReleaseItem;
