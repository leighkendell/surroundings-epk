import React from 'react';
import styled from '../helpers/styled-components';

interface Props {
  playlistID: string;
  className: string;
}

const SpotifyPlayer: React.SFC<Props> = ({ playlistID, className }) => (
  <iframe
    src={`https://open.spotify.com/embed/playlist/${playlistID}`}
    width="100%"
    height="400"
    frameBorder="0"
    allow="encrypted-media"
    className={className}
    title="Spotify Player"
  />
);

const StyledSpotifyPlayer = styled(SpotifyPlayer)`
  position: relative;
  background-color: ${props => props.theme.colorWhite};
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 40px;
`;

export default StyledSpotifyPlayer;
