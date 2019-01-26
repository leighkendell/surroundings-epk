import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import SectionTitle from '../components/section-title';
import Wrapper from '../components/wrapper';

const NotFoundPage = () => (
  <Layout>
    <Section variation="primary">
      <Wrapper small={true}>
        <SectionTitle as="h1">Not found</SectionTitle>
        <p>
          Oops, you just hit a page that doesn't exist. Try going back <Link to="/">home</Link>.
        </p>
      </Wrapper>
    </Section>
  </Layout>
);

export default NotFoundPage;
