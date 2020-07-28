module.exports = {
  siteMetadata: {
    title: `All natural surf wax`,
    author: `Phil Collins`,
    description: `All natural surf wax`,
    siteUrl: `https://stingyring.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stingy Ring`,
        short_name: `Stingy Ring`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: "#fbba42",
        display: `minimal-ui`,
        icon: `content/assets/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        //replace with own Snipcart API key
        apiKey: process.env.STRIPE_API_KEY,
        autopop: true,
      },
    },

    `gatsby-plugin-styled-components`,
  ],
}
