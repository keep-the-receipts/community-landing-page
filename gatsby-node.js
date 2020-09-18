/*
 * See the [Gatsby Node API
 * documentation](https://www.gatsbyjs.org/docs/api-files-gatsby-node/) for an
 * overview of this file's purpose. 
 */

const path = require('path');
const dotenv = require('dotenv');
const { getGithubStats } = require('./scripts');

/**
 * If `.env` file exist, values will be added to `process.env` inside Gatsby
 * build pipeline.
 */
dotenv.config();


/**
 * Creates all routes
 */
exports.createPages = async ({ actions }) => {
  const githubStats = await getGithubStats(process.env.GITHUB_TOKEN)
  
  actions.createPage({
    path: '/',
    component: path.resolve(`./src/views/Homepage/Homepage.jsx`),
    context: {
      githubStats,
    }
  })
}
