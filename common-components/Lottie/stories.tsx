import React from 'react';
import { Lottie } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import { colors } from '../design-tokens';

export default {
  title: 'Common/Lottie',
  component: Lottie,
};

export const Default = ({ background, height, width }) => (
  <Lottie
    background={background}
    height={height}
    src="/image-assets/lotties/aussie.json"
    width={width}
  />
);
Default.args = {
  background: colors.secondary,
  height: 400,
  width: 400,
};
Default.decorators = globalDecorators;
