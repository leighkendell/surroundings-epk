import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Grid from '../components/grid';
import Header from '../components/header';
import Layout from '../components/layout';
import ReleaseItem from '../components/release-item';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import SpotifyPlayer from '../components/spotify-player';
import Wrapper from '../components/wrapper';
import { sortByYear } from '../helpers/utils';
import { Release } from '../types/gatsby-types';

const CONTENT_QUERY = graphql`
  query PrismicEpk {
    prismicEpk {
      data {
        spotify_id
        hero_image {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 2160, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        title {
          text
        }
        biography {
          raw {
            text
          }
        }
        releases {
          release_name {
            text
          }
          release_year
          release_image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        videos {
          video_name {
            text
          }
          video_year
        }
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={CONTENT_QUERY}
      render={data => {
        const { hero_image, title, biography, releases, videos, spotify_id } = data.prismicEpk.data;
        const sortedReleases = sortByYear(releases, 'release_year');
        const sortedVideos = sortByYear(videos, 'video_year');

        return (
          <>
            <Header image={hero_image.localFile.childImageSharp.fluid} alt={hero_image.alt} />

            <Section variation="primary">
              <Wrapper small={true}>
                {/* <h1>{title.text}</h1> */}
                {biography.raw.map((paragraph: { text: string }, index: number) => (
                  <p key={index}>{paragraph.text}</p>
                ))}
              </Wrapper>
            </Section>

            <Section id="releases" variation="light">
              <Wrapper collapseBottom={true}>
                <SectionTitle>Releases</SectionTitle>
                <Grid>
                  {sortedReleases.map(({ release_name, release_year, release_image }: Release) => (
                    <ReleaseItem
                      name={release_name.text}
                      year={release_year}
                      image={release_image}
                      key={release_name.text}
                    />
                  ))}
                </Grid>
              </Wrapper>
            </Section>

            <Section id="listen" variation="secondary" angled={true}>
              <Wrapper small={true}>
                <SectionTitle>Listen</SectionTitle>
                <SpotifyPlayer playlistID={spotify_id} />
              </Wrapper>
            </Section>

            <Section id="videos" variation="light">
              <Wrapper>
                <SectionTitle>Videos</SectionTitle>
                {sortedVideos.map(item => item.video_name.text)}
              </Wrapper>
            </Section>
          </>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
