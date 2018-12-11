import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

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
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={CONTENT_QUERY}
      render={data => {
        const { hero_image } = data.prismicEpk.data;
        return <Header image={hero_image.localFile.childImageSharp.fluid} alt={hero_image.alt} />;
      }}
    />
  </Layout>
);

export default IndexPage;
