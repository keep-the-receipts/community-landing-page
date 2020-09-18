import React from 'react';
import { Base } from './Base';

export default {
  title: 'Components/Base',
  component: Base,
};

const Template = (args) => <Base {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello World!',
};
