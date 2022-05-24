import React from 'react';
import { StandardSizes } from '../types';
import { Slider } from '.';

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
    <div key={i} style={{ marginBottom: '20px', width: '400px' }}>
      <Slider
        hoverProgressColor={hoverProgressColor}
        markerColor={markerColor}
        progressColor={progressColor}
        size={size ?? value}
        trackColor={trackColor}
      />
    </div>
  ));
