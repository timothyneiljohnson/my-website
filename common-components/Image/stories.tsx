import React from 'react';
import { Image } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';

export default {
  title: 'Common/Image',
  component: Image,
};

export const Default = ({ height, width, noFadeIn, round, src }) => (
  <Image
    height={height}
    noFadeIn={noFadeIn}
    round={round}
    src={src}
    width={width}
  />
);
Default.args = {
  height: 569,
  width: 380,
  src: '/athens.jpg',
};
Default.decorators = globalDecorators;

export const Round = ({ height, width, noFadeIn, round, src }) => (
  <Image
    height={height}
    noFadeIn={noFadeIn}
    round={round}
    src={src}
    width={width}
  />
);
Round.args = {
  height: 569,
  round: true,
  width: 380,
  src: '/athens.jpg',
};
Round.decorators = globalDecorators;
