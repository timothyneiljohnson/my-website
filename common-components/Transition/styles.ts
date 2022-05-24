import styled, { css, Keyframes } from 'styled-components';

interface StyledTransitionProps {
  duration: number;
  isShown: boolean;
  inValue: boolean;
  keyframe: Keyframes;
  shouldAnimate: boolean;
  timingFunction: string;
}
export const StyledTransition = styled.div<StyledTransitionProps>`
  opacity: ${({ isShown }) => (isShown ? '1' : '0')};
  ${({ duration, inValue, keyframe, shouldAnimate, timingFunction }) =>
    shouldAnimate &&
    css`
      animation: ${keyframe} ${duration}ms ${timingFunction}
        ${inValue ? 'normal' : 'reverse'} forwards;
    `}
`;
