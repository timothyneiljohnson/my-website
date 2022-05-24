import React from 'react';
import { Toggle } from '.';
import { StandardSizes } from '../types';

export default {
  title: 'Common/Toggle',
  component: Toggle,
};

export const Default = ({ size, activeColor, inactiveColor }) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((value: StandardSizes, i) => (
    <div key={i} style={{ marginBottom: '12px' }}>
      <Toggle
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        size={size ?? value}
      />
    </div>
  ));
