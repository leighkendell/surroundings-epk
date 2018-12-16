import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';
import NavListItem from '../components/nav-list-item';
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
            <Nav>
              <NavListItem target="releases">Releases</NavListItem>
              <NavListItem target="listen">Listen</NavListItem>
              <NavListItem target="videos">Videos</NavListItem>
              <NavListItem target="downloads">Downloads</NavListItem>
              <NavListItem target="contact">Contact</NavListItem>
            </Nav>
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
