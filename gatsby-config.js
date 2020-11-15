require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pearson Digital Marketing`,
    description: `Web development and digital marketing services in San Diego, CA.`,
    author: `@ryanpinpb`,
    year: 2020,
    image: "src/assets/images/pearson-digital-marketing.png",
    siteUrl: `https://pearsondigitalmarketing.com`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://wp.pearsondigitalmarketing.com/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        // id: "YOUR_GOOGLE_TAGMANAGER_ID",
        id: "GTM-MGQK3DM",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pearson Digital Marketing`,
        short_name: `PDM`,
        description: `Web development and digital marketing services in San Diego, CA.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/assets/svg/favicon.inline.svg`,
        // icons: [
        //   {
        //     src: `src/assets/svg/favicon.inline.svg`,
        //     sizes: `192x192`,
        //     type: `image/svg+xml`,
        //   },
        // ],
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        // localize: [
        //   {
        //     start_url: `/de/`,
        //     lang: `de`,
        //     name: `Die coole Anwendung`,
        //     short_name: `Coole Anwendung`,
        //     description: `Die Anwendung macht coole Dinge und macht Ihr Leben besser.`,
        //   },
        // ],
      },
    },
  ],
}
