import React from 'react';
import { StickyElement } from '.';
import { colors } from '../design-tokens';
import { PostInfo } from '../../src/components/Post/PostInfoContent';

export default {
  title: 'Common/StickyElement',
  component: StickyElement,
};

export const Default = () => (
  <div
    style={{
      backgroundColor: colors.grayLight,
      width: '500px',
      height: '1500px',
      position: 'relative',
    }}
  >
    <StickyElement topOffset={20}>
      <PostInfo date="2022-04-04T18:29:50" title="Stick 'em up!" />
    </StickyElement>
  </div>
);
