module.exports = {
  siteMetadata: {
    title: `Orel Hassid`,
    description: `Hi, my name is Orel Hassid and I'm a Web Developer :)`,
    author: `@orelhassid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `orelhassid`,
        short_name: `orelh`,
        start_url: `/`,
        background_color: `#2F3437`,
        theme_color: `#B6DBCF`,
        display: `minimal-ui`,
        icon: `src/images/echoplus-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
