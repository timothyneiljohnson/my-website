import React from 'react';
import { Image } from '.';

export default {
  title: 'Common/Image',
  component: Image,
};

export const Default = ({ height, width, noFadeIn, round, src }) => (
  <Image
    height={height}
    width={width}
    noFadeIn={noFadeIn}
    round={round}
    src={src}
  />
);
Default.args = {
  height: 569,
  width: 380,
  src: '/athens.jpg',
};

export const Round = ({ height, width, noFadeIn, round, src }) => (
  <Image
    height={height}
    width={width}
    noFadeIn={noFadeIn}
    round={round}
    src={src}
  />
);
Round.args = {
  height: 569,
  round: true,
  width: 380,
  src: '/athens.jpg',
};
