import React from 'react';
import { Placeholder } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';

export default {
  title: 'Common/Placeholder',
  component: Placeholder,
};

export const Default = ({ height, width, topMargin }) => (
  <Placeholder height={height} topMargin={topMargin} width={width} />
);
Default.args = {
  height: 250,
  width: 400,
  topMargin: 30,
};
Default.decorators = globalDecorators;
