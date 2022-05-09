import React from 'react';
import { Heading } from '..';
import { colors } from '../design-tokens';

export default {
  title: 'Common/Heading',
  component: Heading,
};

export const HeadingLevels = () =>
  [...Array(6)].map((_, i) => (
    <Heading key={i} level={i + 1}>{`Heading Level ${i + 1}`}</Heading>
  ));

export const HeadingSizeOverride = () => {
  const sizes = [...Array(6)];
  return sizes.map((_, i) => (
    <Heading key={i} level={sizes.length - i} size={i + 1}>
      {`Heading Level ${sizes.length - i}, Size ${i + 1}`}
    </Heading>
  ));
};

export const HeadingColor = ({ color, className, level, size }) => (
  <Heading className={className} color={color} level={level} size={size}>
    {`Heading Color: ${color}`}
  </Heading>
);

HeadingColor.args = { color: colors.grayDarker };
