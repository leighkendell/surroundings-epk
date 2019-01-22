import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Section from './section';
import SectionTitle from './section-title';
import SpotifyPlayer from './spotify-player';
import Wrapper from './wrapper';

const listenQuery = graphql`
  query Listen {
    prismicEpk {
      data {
        spotify_id
      }
    }
  }
`;

const Listen = () => (
  <StaticQuery
    query={listenQuery}
    render={data => {
      const { spotify_id } = data.prismicEpk.data;

      return (
        <Section id="listen" variation="secondary" angled={true}>
          <Wrapper small={true}>
            <SectionTitle>Listen</SectionTitle>
            <SpotifyPlayer playlistID={spotify_id} />
          </Wrapper>
        </Section>
      );
    }}
  />
);

export default Listen;
