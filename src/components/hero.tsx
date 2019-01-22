import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Header from './header';

const heroImageQuery = graphql`
  query HeroImage {
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

const Hero = () => (
  <StaticQuery
    query={heroImageQuery}
    render={data => {
      const { hero_image } = data.prismicEpk.data;

      return <Header image={hero_image.localFile.childImageSharp.fluid} alt={hero_image.alt} />;
    }}
  />
);

export default Hero;
