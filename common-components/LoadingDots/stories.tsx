import React from 'react';
import { LoadingDotsProps } from '.';
import { LoadingDots } from '.';
import { PlainGrid } from '../PlainGrid';
import { StandardSizes } from '../types';

export default {
  title: 'Common/LoadingDots',
  component: LoadingDots,
};

export const Default = ({ color }: LoadingDotsProps) => (
  <PlainGrid min="200px" rowGap="40px">
    {['xs', 'sm', 'md', 'lg', 'xl'].map((value: StandardSizes, i) => (
      <div key={i}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>{value}</div>
        <div>
          <LoadingDots color={color} size={value} />
        </div>
      </div>
    ))}
  </PlainGrid>
);
