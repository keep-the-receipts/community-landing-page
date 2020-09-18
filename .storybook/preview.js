import React from 'react';
import { addDecorator } from '@storybook/react';
import { Base } from '../src/components';

const addDefaultStyles = Story => (
  <Base>
    <Story />
  </Base>
);

addDecorator(addDefaultStyles);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}