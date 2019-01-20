import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Nav from '../components/nav';
import NavListItem from '../components/nav-list-item';
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
              <Store>
                <Nav>
                  <NavListItem target="releases">Releases</NavListItem>
                  <NavListItem target="listen">Listen</NavListItem>
                  <NavListItem target="videos">Videos</NavListItem>
                  <NavListItem target="downloads">Downloads</NavListItem>
                  <NavListItem target="contact">Contact</NavListItem>
                </Nav>
                <main>{children}</main>
              </Store>
            </>
          </ThemeProvider>
        </>
      );
    }}
  />
);

export default Layout;
