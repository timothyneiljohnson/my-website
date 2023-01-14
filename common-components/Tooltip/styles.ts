import styled from 'styled-components';
import { decorations, spacing } from '../design-tokens';
import { Transition } from '../Transition';

export const TooltipAndTriggerWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipTriggerWrapper = styled.div`
  z-index: 0;
`;

interface TooltipTransitionProps {
  bgColor?: string;
  height?: number;
  width?: number;
  topMargin?: number;
  isDarkMode?: boolean;
  style?: any;
}
export const TooltipTransition = styled(Transition)<TooltipTransitionProps>`
  background-color: ${({ bgColor }) => bgColor};
  padding: ${spacing.x3};
  position: fixed;
  left: calc(var(--destination-x, 0) * 1px);
  top: calc(var(--destination-y, 0) * 1px);
  z-index: -1;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}

  &:after {
    content: '';
    position: absolute;
    right: calc(50% - 4px);
    top: 100%;
    width: 0;
    height: 0;
    border-top: 8px solid ${({ bgColor }) => bgColor};
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }
`;
