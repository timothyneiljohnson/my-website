import styled from 'styled-components';
import { animation, colors } from '../../../../../../common-components/design-tokens';

export const SecondHand = styled.div`
  border-radius: 4px;
  background: #eb8b36;
  border: 1px solid #eb8b36;
  overflow: hidden;
  position: absolute;
  left: calc(50%);
  top: calc(50%);
  height: 41.5%;
  transform-origin: top center;
  animation: ${animation.keyframes.rotate360} 60s infinite linear;
`;

export const MinuteHand = styled.div`
  border-radius: 4px;
  border: 2px solid ${colors.grayDarker};
  background: ${colors.grayDarker};
  position: absolute;
  left: calc(50% - 1px);
  top: calc(50% - 1px);
  height: 41.5%;
  transform-origin: top center;
  animation: ${animation.keyframes.rotate360} 3600s infinite linear;
`;

export const HourHand = styled.div`
  border-radius: 4px;
  border: 2px solid ${colors.grayDarker};
  background: ${colors.grayDarker};
  position: absolute;
  left: calc(50% - 1px);
  top: calc(50% - 1px);
  height: 24.5%;
  transform-origin: top center;
  animation: ${animation.keyframes.rotate360} 43200s infinite linear;
`;

export const ClockPin = styled.div`
  position: absolute;
  left: calc(50% - 4px);
  top: calc(50% - 4px);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 3px solid ${colors.grayDarker};
  background: ${colors.white};
`;
