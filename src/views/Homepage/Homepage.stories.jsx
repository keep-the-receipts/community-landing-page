import React from 'react';
import faker from 'faker';
import { Homepage } from './Homepage';

export default {
  title: 'Views/Homepage',
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;

const GITHUB_STATS_MOCK = {
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

export const Default = Template.bind({});

Default.args = {
  pageContext: {
    githubStats: GITHUB_STATS_MOCK,
  }
};
