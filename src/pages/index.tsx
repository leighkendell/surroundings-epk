import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Biography from '../components/biography';
import Downloads from '../components/downloads';
import Hero from '../components/hero';
import HeroTitle from '../components/hero-title';
import Layout from '../components/layout';
import Listen from '../components/listen';
import Releases from '../components/releases';
import Videos from '../components/videos';

const CONTENT_QUERY = graphql`
  query PrismicEpk {
    prismicEpk {
      data {
        title {
          text
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
        const { title } = data.prismicEpk.data;

        return (
          <>
            <Hero />
            <HeroTitle>{title.text}</HeroTitle>
            <Biography />
            <Releases />
            <Listen />
            <Videos />
            <Downloads />
          </>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
