import React from 'react';

interface Props {
  playlistID: string;
}

const SpotifyPlayer: React.SFC<Props> = ({ playlistID }) => (
  <iframe
    src={`https://open.spotify.com/embed/playlist/${playlistID}`}
    width="100%"
    height="380"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
);

export default SpotifyPlayer;
