import React from 'react';
import { StarRating } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { StandardSizes } from '../types';

export default {
  title: 'Common/StarRating',
  component: StarRating,
};

export const Default = ({ color, rating }) =>
  ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((size: StandardSizes, i: number) => (
    <div key={i} style={{ marginBottom: '20px', width: '400px' }}>
      <StarRating color={color} rating={rating} size={size} />
    </div>
  ));
Default.args = {
  rating: 3.5,
};
Default.decorators = globalDecorators;
