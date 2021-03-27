// Source environment variables.
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Max Phillips`,
    description: `Web Developer & Student with interest in DevOps`,
    author: `Max Phillips (@blueybloke)`,
    splashTitle: `Hi! 👋`,
    splashSubtitle: `I'm Max, I like building apps that scale and last. 🍂`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, // Low level plugin used by other gatsby plugins.
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max Phillips, Web Developer`,
        short_name: `MaxPhillips`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/images/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
        watchMode: process.env.NODE_ENV === "development",
        overlayDrafts: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        sampleRate: 0.7,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
