import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { breakpoint } from '../helpers/style-utils';
import styled from '../helpers/styled-components';
import { byteToMb } from '../helpers/utils';
import download from '../images/download.svg';

interface Props {
  name: string;
  size: string;
  type: string;
  url: string;
  image: FluidObject;
  className?: string;
}

const DownloadListItemContent = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.theme.spacingSmall};
  color: currentColor;
  text-decoration: none;

  ${breakpoint.medium`
    padding: 30px;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -80px;
    width: 80px;
    height: 80px;
    transform: translateY(-50%);
  }
`;

const DownloadIcon = styled(download)`
  min-width: 30px;
  margin-left: ${props => props.theme.spacingSmall};
  fill: currentColor;
`;

const DownloadListItemText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DownloadListItem: React.SFC<Props> = ({ name, size, type, url, image, className }) => (
  <li className={className}>
    <Img fluid={image} />
    <DownloadListItemContent href={url}>
      <DownloadListItemText>
        <strong>{name}</strong> ({byteToMb(size)}MB {type})
      </DownloadListItemText>
      <DownloadIcon />
    </DownloadListItemContent>
  </li>
);

const StyledDownloadListItem = styled(DownloadListItem)`
  display: flex;
  align-items: center;
  height: 5em;
  transition: 0.25s ease;
  background-color: ${props => props.theme.colorWhite};
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  list-style: none;

  .gatsby-image-wrapper {
    min-width: 80px;
    min-height: 80px;
  }

  &:hover {
    background-color: ${props => props.theme.colorBlue};
    color: ${props => props.theme.colorWhite};
  }
`;

export default StyledDownloadListItem;
