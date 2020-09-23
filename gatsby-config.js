/*
 * See the [Gatsby Config API
 * documentation](https://www.gatsbyjs.org/docs/api-files-gatsby-config/) for an
 * overview of this file's purpose. In addition , for documentation related to
 * each plugin used below go to the [Gatsby plugin
 * directory](https://www.gatsbyjs.org/packages) and search according to the
 * `gatsby-plugin-*` name of the plugin.
 */

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
  ],
}
