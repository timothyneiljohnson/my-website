import React, { useRef } from 'react';
import { ScrollProgressIndicator } from '.';

export default {
  title: 'Common/ScrollProgressIndicator',
  component: ScrollProgressIndicator,
};

export const Default = ({ color, height }) => {
  const ref = useRef(null);
  return (
    <div ref={ref} style={{ height: '3600px', background: '#ccc' }}>
      <ScrollProgressIndicator color={color} height={height} />
    </div>
  );
};
Default.args = {
  height: 5,
  color: '#c00',
};
