import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { sortByYear } from '../helpers/utils';
import { Release } from '../types/gatsby-types';
import Grid from './grid';
import ReleaseItem from './release-item';
import Section from './section';
import SectionTitle from './section-title';
import Wrapper from './wrapper';

const releasesQuery = graphql`
  query Releases {
    prismicEpk {
      data {
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
      }
    }
  }
`;

const Releases = () => (
  <StaticQuery
    query={releasesQuery}
    render={data => {
      const releases: Release[] = sortByYear(data.prismicEpk.data.releases, 'release_year');

      return (
        <Section id="releases" variation="light">
          <Wrapper collapseBottom={true}>
            <SectionTitle>Releases</SectionTitle>
            <Grid>
              {releases.map(({ release_name, release_year, release_image }) => (
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
      );
    }}
  />
);

export default Releases;
