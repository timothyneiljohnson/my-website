import React from 'react';
import { Link } from '.';
import { colors } from '../design-tokens';

export default {
  title: 'Common/Link',
  component: Link,
};

const DefaultColorArg = {
  color: colors.grayDarker,
};

export const Default = ({ color }) => (
  <Link color={color} href="/home">
    This is a test
  </Link>
);
Default.args = DefaultColorArg;

export const NoUnderline = ({ color }) => (
  <Link color={color} href="/home" noUnderline>
    This is a test
  </Link>
);
NoUnderline.args = DefaultColorArg;

export const LinkButton = ({ color }) => (
  <Link color={color} role="button">
    This is a test
  </Link>
);
LinkButton.args = DefaultColorArg;
