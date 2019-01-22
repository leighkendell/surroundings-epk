import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Section from './section';
import Wrapper from './wrapper';

const biographyQuery = graphql`
  query Biography {
    prismicEpk {
      data {
        biography {
          raw {
            text
          }
        }
      }
    }
  }
`;

const Biography = () => (
  <StaticQuery
    query={biographyQuery}
    render={data => {
      const { biography } = data.prismicEpk.data;

      return (
        <Section variation="primary">
          <Wrapper small={true}>
            {/* <h1>{title.text}</h1> */}
            {biography.raw.map((paragraph: { text: string }, index: number) => (
              <p key={index}>{paragraph.text}</p>
            ))}
          </Wrapper>
        </Section>
      );
    }}
  />
);

export default Biography;
