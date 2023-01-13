import React from 'react';
import { Tooltip } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { Button } from '../Button';
import { colors } from '../design-tokens';

export default {
  title: 'Common/Tooltip',
  component: Tooltip,
};

const TooltipContent = () => <div>Fun fact: This is a tooltip.</div>;

export const Default = () => (
  <div style={{ marginTop: '60px', textAlign: 'center' }}>
    <Tooltip bgColor={colors.grayLightest} content={<TooltipContent />}>
      <Button variant="primary">Hover for Tooltip</Button>
    </Tooltip>
  </div>
);
Default.args = {};
Default.decorators = globalDecorators;
