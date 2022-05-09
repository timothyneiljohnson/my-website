import React, { useRef } from 'react';
import { StickyElement } from '..';
import { colors } from '../design-tokens';
import { PostInfo } from '../Post/PostInfoContent';

export default {
  title: 'Common/StickyElement',
  component: StickyElement,
};

export const Default = () => {
  const ref = useRef(null);
  return (
    <div style={{ height: '1000px', marginTop: '100px', width: '100%' }}>
      <div style={{ backgroundColor: colors.grayLight, width: '500px', height: '200px', position: 'relative' }} ref={ref}>
        <StickyElement targetRef={ref}>
          <PostInfo title="Stick 'em up!" date="2022-04-04T18:29:50" />
        </StickyElement>
      </div>
    </div>
  );
};
