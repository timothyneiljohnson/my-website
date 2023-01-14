import React from 'react';
import { Link } from '.';
import { colors } from '../design-tokens';

export default {
  title: 'Common/Link',
  component: Link,
};

const DefaultArgs = {
  color: colors.grayDarker,
};

export const Default = ({ color }) => (
  <Link color={color} href="/home">
    This is a test
  </Link>
);
Default.args = DefaultArgs;

export const ReverseUnderline = ({ color }) => (
  <Link color={color} href="/home" reverseUnderline>
    This is a test
  </Link>
);
ReverseUnderline.args = DefaultArgs;

export const NoUnderline = ({ color }) => (
  <Link color={color} href="/home" noUnderline>
    This is a test
  </Link>
);
NoUnderline.args = DefaultArgs;

export const LinkButton = ({ color }) => (
  <Link color={color} role="button">
    This is a test
  </Link>
);
LinkButton.args = DefaultArgs;
