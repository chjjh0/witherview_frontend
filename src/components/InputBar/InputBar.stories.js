/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import InputBar from './InputBar';

export default {
  title: 'inputBar',
  component: InputBar,
};

export const TextInput = (args) => <InputBar {...args} />;