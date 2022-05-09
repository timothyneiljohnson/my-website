import styled from 'styled-components';
import { colors } from '../../../../../common-components/design-tokens';

const rotateKeyframes = `
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SecondHand = styled.div`
  border-radius: 4px;
  border: 1px solid #eb8b36;
  position: absolute;
  left: calc(50%);
  top: calc(50%);
  height: 41.5%;
  animation-duration: 60s;
  transform-origin: top center;
  animation-name: rotate;
  animation-iteration-count:infinite;
  animation-timing-function:linear;

  ${rotateKeyframes}
`;

export const MinuteHand = styled.div`
  border-radius: 4px;
  border: 2px solid ${colors.grayDarker};
  background: ${colors.grayDarker};
  position: absolute;
  left: calc(50% - 1px);
  top: calc(50% - 1px);
  height: 41.5%;
  animation-duration: 3600s;
  transform-origin: top center;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  ${rotateKeyframes}
`;

export const HourHand = styled.div`
  border-radius: 4px;
  border: 2px solid ${colors.grayDarker};
  background: ${colors.grayDarker};
  position: absolute;
  left: calc(50% - 1px);
  top: calc(50% - 1px);
  height: 24.5%;
  animation-duration: 43200s;
  transform-origin: top center;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  ${rotateKeyframes}
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
