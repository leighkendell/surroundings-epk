import { graphql, StaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

interface Props extends React.SFC {
  children: ReactNode;
}

const META_QUERY = graphql`
  query AllPrismicEpk {
    prismicEpk {
      data {
        meta_title
        meta_description
      }
    }
  }
`;

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={META_QUERY}
    render={data => {
      const { meta_title, meta_description } = data.prismicEpk.data;

      return (
        <>
          <Helmet title={meta_title} meta={[{ name: 'description', content: meta_description }]}>
            <html lang="en" />
          </Helmet>
          {children}
        </>
      );
    }}
  />
);

export default Layout;
