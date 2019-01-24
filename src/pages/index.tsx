import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Biography from '../components/biography';
import Hero from '../components/hero';
import HeroTitle from '../components/hero-title';
import Layout from '../components/layout';
import Listen from '../components/listen';
import Releases from '../components/releases';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import Wrapper from '../components/wrapper';
import { sortByYear } from '../helpers/utils';

const CONTENT_QUERY = graphql`
  query PrismicEpk {
    prismicEpk {
      data {
        title {
          text
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
        const { title, videos } = data.prismicEpk.data;
        const sortedVideos = sortByYear(videos, 'video_year');

        return (
          <>
            <Hero />
            <HeroTitle>{title.text}</HeroTitle>
            <Biography />
            <Releases />
            <Listen />

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
