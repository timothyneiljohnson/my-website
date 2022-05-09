import React from 'react';
import { Image } from '.';

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
