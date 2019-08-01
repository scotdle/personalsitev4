require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {

  plugins: [
      `gatsby-plugin-sass`,

      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'img',
              path: './src/assets/images',

          }
      },

      {
          resolve: `gatsby-source-contentful`,
          options: {
              spaceId: `d9ho63829gm5`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          },

      },
      "gatsby-plugin-transition-link",
      `gatsby-plugin-sharp`]
};