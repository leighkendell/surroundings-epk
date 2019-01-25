import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Section from './section';
import SectionTitle from './section-title';
import Wrapper from './wrapper';

const contactQuery = graphql`
  query Contact {
    prismicEpk {
      data {
        contact_information {
          html
        }
      }
    }
  }
`;

const Contact = () => (
  <StaticQuery
    query={contactQuery}
    render={data => {
      const { contact_information } = data.prismicEpk.data;
      const htmlContent = {
        __html: contact_information.html,
      };

      return (
        <Section id="contact" variation="dark">
          <Wrapper small={true}>
            <SectionTitle>Contact</SectionTitle>
            <div dangerouslySetInnerHTML={htmlContent} />
          </Wrapper>
        </Section>
      );
    }}
  />
);

export default Contact;
