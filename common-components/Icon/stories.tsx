import React from 'react';
import { Icon } from '..';
import { colors } from '../design-tokens';
import { IconList } from './helpers';

export default {
  title: 'Common/Icon',
  component: Icon,
};

const iconArgTypes = {
  fill: {
    control: {
      type: 'color',
    },
  },
  name: {
    control: {
      type: 'select',
      options: IconList,
    },
  },
};

export const Default = ({
  fill,
  height,
  hoverFill,
  name,
  rotate,
  size,
  src,
  width,
}) => (
  <Icon
    fill={fill}
    height={height}
    hoverFill={hoverFill}
    name={name}
    rotate={rotate}
    size={size}
    src={src}
    width={width}
  />
);
Default.args = {
  name: 'code-slash',
  size: 70,
  fill: colors.primary,
};
Default.argTypes = iconArgTypes;

export const CustomSource = ({
  fill,
  height,
  hoverFill,
  name,
  rotate,
  size,
  src,
  width,
}) => (
  <Icon
    fill={fill}
    height={height}
    hoverFill={hoverFill}
    name={name}
    rotate={rotate}
    size={size}
    src={src}
    width={width}
  />
);
CustomSource.args = {
  height: 30,
  width: 485,
  src: '/name-logo.svg',
};
CustomSource.argTypes = iconArgTypes;
