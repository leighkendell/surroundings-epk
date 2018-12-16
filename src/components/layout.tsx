import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from '../helpers/styled-components';
import { theme } from '../helpers/theme';
import GlobalStyle from './global-style';
import Store from './store';

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

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={META_QUERY}
    render={data => {
      const { meta_title, meta_description } = data.prismicEpk.data;

      return (
        <>
          <Helmet title={meta_title} meta={[{ name: 'description', content: meta_description }]}>
            <html lang="en" />
          </Helmet>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Store>{children}</Store>
            </>
          </ThemeProvider>
        </>
      );
    }}
  />
);

export default Layout;
