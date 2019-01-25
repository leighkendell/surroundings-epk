import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { sortByYear } from '../helpers/utils';
import { Video } from '../types/gatsby-types';
import Grid from './grid';
import ReleaseItem from './release-item';
import Section from './section';
import SectionTitle from './section-title';
import Wrapper from './wrapper';

const videosQuery = graphql`
  query Videos {
    prismicEpk {
      data {
        videos {
          video_name {
            text
          }
          video_year
          video_image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 1240, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          video_link {
            url
          }
        }
      }
    }
  }
`;

const Videos = () => (
  <StaticQuery
    query={videosQuery}
    render={data => {
      const videos: Video[] = sortByYear(data.prismicEpk.data.videos, 'video_year');

      return (
        <Section id="videos" variation="light">
          <Wrapper>
            <SectionTitle>Videos</SectionTitle>
            <Grid minWidth={450}>
              {videos.map(({ video_name, video_year, video_image, video_link }) => (
                <ReleaseItem
                  name={video_name.text}
                  year={video_year}
                  image={video_image}
                  link={video_link.url}
                  key={video_name.text}
                />
              ))}
            </Grid>
          </Wrapper>
        </Section>
      );
    }}
  />
);

export default Videos;
