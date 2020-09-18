import React from 'react';
import { Homepage } from './Homepage';

export default {
  title: 'Views/Homepage',
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;

export const Default = Template.bind({});

Default.args = {
  pageContext: {
    githubStats: [
      {
        name: 'Example',
        count: 12,
      }
    ]
  }
};
