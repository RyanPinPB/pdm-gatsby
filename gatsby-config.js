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
  },
  plugins: [
    `gatsby-plugin-sharp`,
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
          `http://pearsondigitalmarketing.local/graphql`,
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
    `gatsby-plugin-chakra-ui`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
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
