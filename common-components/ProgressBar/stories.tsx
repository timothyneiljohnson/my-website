import React from 'react';
import { StandardSizes } from '../types';
import { ProgressBar } from '.';

export default {
  title: 'Common/ProgressBar',
  component: ProgressBar,
};

export const Default = ({
  progressColor,
  size,
  trackColor,
}) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((value: StandardSizes, i) => (
    <div key={i} style={{ marginBottom: '20px', width: '400px' }}>
      <ProgressBar
        percentage={0.16 + (0.16 * i)}
        progressColor={progressColor}
        size={size ?? value}
        trackColor={trackColor}
      />
    </div>
  ));
