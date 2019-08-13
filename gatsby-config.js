require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {

  plugins: [

      {
          resolve: `gatsby-source-contentful`,
          options: {
              spaceId: `d9ho63829gm5`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          },

      },

      {
          resolve: `gatsby-plugin-favicon`,
          options: {
              logo: "./src/assets/images/sclogo.svg",

              icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  yandex: false,
                  windows: false
              }
          }
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-sass`,
      "gatsby-plugin-transition-link",
      `gatsby-plugin-sharp`]
};