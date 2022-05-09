import React from 'react';
import { StandardSizes } from '../types';
import { Slider } from '..';

export default {
  title: 'Common/Slider',
  component: Slider,
};

export const Default = ({
  hoverProgressColor,
  progressColor,
  markerColor,
  size,
  trackColor,
}) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((value: StandardSizes, i) => (
    <div style={{ marginBottom: '20px', width: '400px' }} key={i}>
      <Slider
        hoverProgressColor={hoverProgressColor}
        progressColor={progressColor}
        markerColor={markerColor}
        size={size ?? value}
        trackColor={trackColor}
      />
    </div>
  ));
