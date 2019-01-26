import Img from 'gatsby-image';
import React from 'react';
import styled from '../helpers/styled-components';
import { Image } from '../types/gatsby-types';

interface Props {
  image: Image;
  name: string;
  year: number;
  link?: string;
}

const ReleaseItemWrapper = styled.div`
  position: relative;

  h3 {
    margin: 0;
  }

  .gatsby-image-wrapper {
    margin-bottom: ${props => props.theme.spacingSmall};
    transition: 0.25s ease;
  }

  a {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:hover + .gatsby-image-wrapper {
      opacity: 0.5;
    }
  }
`;

const ReleaseItem = ({ image, name, year, link }: Props) => (
  <ReleaseItemWrapper>
    {/* tslint:disable:react-a11y-anchors */}
    {link && <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube" />}
    {/* tslint:enable */}
    <Img fluid={image.localFile.childImageSharp.fluid} alt={image.alt} />
    <h3>{name}</h3>
    <span>{year}</span>
  </ReleaseItemWrapper>
);

export default ReleaseItem;
