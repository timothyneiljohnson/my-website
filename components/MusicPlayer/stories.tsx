import React from 'react';
import { MusicPlayer } from '.';

export default {
  title: 'Experiments/MusicPlayer',
  component: MusicPlayer,
};

export const Default = ({ primaryColor }) => (
  <MusicPlayer primaryColor={primaryColor} />
);
