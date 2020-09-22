const axios = require('axios');
const faker = require('faker');

/**
 * @typedef {{ data: { data: { organization: { project: { columns: { edges: { node: { name: string; cards: { totalCount: number } } }[] } } } } } }} response
 * @typedef {{ name: string; count: number }[]} result
 */

const QUERY = `
  query {
    organization(login: "South-Africa-Government-Procurement") {
      project(number: 1) {
        columns(first: 100) {
          edges {
            node {
              name
              cards {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

/**
 * @name transformResponse
 *
 * @description TODO Add description
 * 
 * @param {response} response
 * @returns {result}
 */
const transformResponses = (response) => {
  const { data: { data: { organization: { project: { columns: { edges } } } } } } = response;
  return edges.reduce((result, { node: { name, cards: { totalCount: count }} }) => [...result, { name, count }], [])
}

/**
 * @name getGithubStats
 *
 * @description TODO Add description
 *
 * @param {string | undefined} token
 * @returns {result}
 */
const getGithubStats = async (token) => {
  if (!token) {
    return new Array(faker.random.number({ min: 3, max: 9 })).fill(undefined).map(() => ({
      name: faker.lorem.words(),
      count: faker.random.number(({ min: 0, max: 100 })),
    }))
  }

  /**
   * @type {Promise<response>}
   */
  const response = await axios({
    url: 'https://api.github.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`
    },
    data: {
      query: QUERY,
    }
  })

  return transformResponses(response)
}

module.exports = getGithubStats;