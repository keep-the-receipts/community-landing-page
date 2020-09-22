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
  const keys = Object.keys(githubStats);

  const total = keys.reduce((result, key) => result + githubStats[key].count, 0)
  const outstanding = keys.slice(0, keys.length - 2).reduce((result, key) => result + githubStats[key].count, 0);
  const progress = 100 - Math.floor(outstanding / total * 100);

  actions.createPage({
    path: '/',
    component: path.resolve(`./src/views/Homepage/Homepage.jsx`),
    context: {
      progress: progress < 1 ? 1 : progress,
    }
  })
}
