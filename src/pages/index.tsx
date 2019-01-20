import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Grid from '../components/grid';
import Header from '../components/header';
import Layout from '../components/layout';
import ReleaseItem from '../components/release-item';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import { Release } from '../types/gatsby-types';

const CONTENT_QUERY = graphql`
  query PrismicEpk {
    prismicEpk {
      data {
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
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={CONTENT_QUERY}
      render={data => {
        const { hero_image, title, biography, releases } = data.prismicEpk.data;
        const sortedReleases = releases.sort((a: Release, b: Release) => b.release_year - a.release_year);

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

            <Section id="releases" variation="secondary">
              <Wrapper>
                <h2>Releases</h2>
                <Grid>
                  {sortedReleases.map(({ release_name, release_year, release_image }: Release) => (
                    <ReleaseItem name={release_name.text} year={release_year} image={release_image} />
                  ))}
                </Grid>
              </Wrapper>
            </Section>
          </>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
