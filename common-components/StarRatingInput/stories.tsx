import React, { useCallback, useState } from 'react';
import { StarRatingInput } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { StandardSizes } from '../types';

export default {
  title: 'Common/StarRatingInput',
  component: StarRatingInput,
};

export const Default = ({ color, rating }) => {
  const [starRating, setStarRating] = useState(rating);
  const handleStarChange = useCallback((value: string) => {
    setStarRating(parseFloat(value));
  }, []);

  return ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(
    (size: StandardSizes, i: number) => (
      <div key={i} style={{ marginBottom: '20px', width: '400px' }}>
        <StarRatingInput
          color={color}
          onChange={handleStarChange}
          rating={starRating}
          size={size}
        />
      </div>
    )
  );
};
Default.args = {
  rating: 3.5,
};
Default.decorators = globalDecorators;
