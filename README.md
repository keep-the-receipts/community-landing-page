<!-- omit in toc -->
# 🕵️‍♂️ Keep The Receipt

<!-- omit in toc -->
## Table of Contents

- [Contribute](#contribute)
- [NPM Scripts](#npm-scripts)
- [Technologies](#technologies)

## Contribute

1. Clone the repository by running `git clone https://github.com/...`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository to install all dependencies.
4. Run `npm start` in the root folder to spin up a local instance of the website.

## NPM Scripts

- `npm start`: Starts a local instance of the website with mock data.
- `npm run storybook`: Starts a local instance of Storybook.
- `npm run build`: Builds a production version of the website into the `build/` folder.

*Note that you are welcome to use Yarn too if you prefer it over the standard NPM CLI tool*

## Technologies

- The project built using [React](https://reactjs.org) and [Gatsby](https://www.gatsbyjs.com).
- [Styled Components](https://styled-components.com) is used to apply CSS to components. 
- [Recharts](https://recharts.org) is used to visualise data.
- [Faker](https://www.npmjs.com/package/faker) is used to mock API calls if the required API tokens are not present in `.env`.
- [Axios](https://github.com/axios/axios) is used to abstract away REST API calls.
- [Dotenv](https://www.npmjs.com/package/dotenv) is used to feed environment variables into the build process.
