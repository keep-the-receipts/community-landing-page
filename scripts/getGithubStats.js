const axios = require("axios");
const faker = require("faker");

/**
 * @typedef {{ collaborators: { edges: { node: { id: string; avatarUrl: string; name: string; url: string } }[] } }} repository
 * @typedef {{ project: { columns: { edges: { node: { name: string; cards: { totalCount: number } } }[] } } }} organization
 * @typedef {{ data: { data: { respository: repository; organization: organization } } }} response
 * @typedef {{ collaborators: { id: string; avatarUrl: string; name: string; url: string }[]; columns: { name: string; count: number }[]} result
 */

const QUERY = `
  query {
    repository(owner: "South-Africa-Government-Procurement", name: "Data-cleaning") {
      collaborators {
        edges {
          node {
            id
            avatarUrl
            name
            url
          }
        }
      }
    }

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
`;

/**
 * @name transformResponse
 *
 * @description TODO Add description
 *
 * @param {response} response
 * @returns {result}
 */
const transformResponses = (response) => {
  const {
    data: {
      data: {
        repository: {
          collaborators: {
            edges: collaborators
          }
        },

        organization: {
          project: {
            columns: { edges: columns },
          },
        },
      },
    },
  } = response;

  return {
    collaborators: collaborators.map(({ node }) => node),

    columns: columns.reduce(
      (
        result,
        {
          node: {
            name,
            cards: { totalCount: count },
          },
        }
      ) => [...result, { name, count }],
      []
    ),
    }
};

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
    return {
      collaborators: new Array(faker.random.number({ min: 10, max: 50 }))
      .fill(undefined)
      .map(() => ({
        id: faker.random.uuid(),
        avatarUrl: faker.image.avatar(),
        name: faker.name.findName(),
        url: faker.internet.url(),
      })),
      
      columns: new Array(faker.random.number({ min: 3, max: 9 }))
      .fill(undefined)
      .map(() => ({
        name: faker.lorem.words(),
        count: faker.random.number({ min: 0, max: 100 }),
      })),
    }
  }

  /**
   * @type {Promise<response>}
   */
  const response = await axios({
    url: "https://api.github.com/graphql",
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: {
      query: QUERY,
    },
  });

  return transformResponses(response);
};

module.exports = getGithubStats;
