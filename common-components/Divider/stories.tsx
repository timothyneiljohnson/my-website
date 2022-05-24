import React from 'react';
import { Divider } from '.';

export default {
  title: 'Common/Divider',
  component: Divider,
};

export const Default = ({ color, height }) => (
  <Divider color={color} height={height} />
);
