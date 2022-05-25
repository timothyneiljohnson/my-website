import React from 'react';
import styled from 'styled-components';
import { MusicPlayer } from '.';

export default {
  title: 'Experiments/MusicPlayer',
  component: MusicPlayer,
};

const StyledStoryStageContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

export const Default = ({ primaryColor }) => (
  <StyledStoryStageContainer>
    <MusicPlayer primaryColor={primaryColor} />
  </StyledStoryStageContainer>
);
