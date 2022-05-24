import React from 'react';
import { Outdent } from '.';

export default {
  title: 'Common/Layout/Outdent',
  component: Outdent,
};

export const Default = ({ horizontal, vertical }) => (
  <Outdent horizontal={horizontal} vertical={vertical} />
);
