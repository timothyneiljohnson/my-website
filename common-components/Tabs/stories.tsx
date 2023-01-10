import React from 'react';
import { Tabs } from '.';
import { colors } from '../design-tokens';

export default {
  title: 'Common/Tabs',
  component: Tabs,
};

export const Default = () => (
  <div style={{ width: '400px' }}>
    <Tabs
      color={colors.primary}
      data={[
        {
          title: 'John',
          content: <div>Lennon</div>,
        },
        {
          title: 'Paul',
          content: <div>McCartney</div>,
        },
        {
          title: 'George',
          content: <div>Harrison</div>,
        },
        {
          title: 'Ringo',
          content: <div>Starr</div>,
        },
      ]}
    />
  </div>
);
