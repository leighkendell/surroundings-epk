require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Surroundings EPK',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Surroundings EPK',
        short_name: 'EPK',
        start_url: '/',
        background_color: '#2851DC',
        theme_color: '#2851DC',
        display: 'minimal-ui',
        icon: 'src/images/surroundings-logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `surroundings-epk`,
        accessToken: process.env.PRISMIC_TOKEN,
        lang: '*',
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        }
      }
    }
  ],
}
