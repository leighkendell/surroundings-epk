import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Wrapper from '../components/wrapper';

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
        biography {
          raw {
            text
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
        const { hero_image, biography } = data.prismicEpk.data;

        return (
          <>
            <Header image={hero_image.localFile.childImageSharp.fluid} alt={hero_image.alt} />
            <Wrapper small={true}>
              {biography.raw.map((paragraph: { text: string }, index: number) => (
                <p key={index}>{paragraph.text}</p>
              ))}
            </Wrapper>
          </>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
