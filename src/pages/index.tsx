import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Section from '../components/section';
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
        title {
          text
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
        const { hero_image, title, biography } = data.prismicEpk.data;

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
              </Wrapper>
            </Section>
          </>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
