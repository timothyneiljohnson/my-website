import styled from 'styled-components';
import { HeadingElement } from './HeadingElement';
import { colors, decorations, font } from '../design-tokens';

interface StyledHeadingProps {
  children?: string;
  color?: string;
  level?: number;
  size?: number;
  noMargin?: boolean;
  animateTyping?: boolean;
}

export const StyledHeading = styled(HeadingElement)<StyledHeadingProps>`
  font-weight: bold;
  margin: ${({ noMargin }) => (noMargin ? 0 : '8px 0 12px')};
  color: ${({ color }) => (color ?? undefined)};
  ${({ level, size }) => decorations.headingFontStyle[`h${size ?? level}`]}

  ${({ animateTyping, children, color }) =>
    animateTyping &&
    `
    display: inline;
    font-family: ${font.families.monospace};
    color: #0000;
    background:
      linear-gradient(-90deg, ${colors.primary} 4px, #0000 0) 10px 0,
      linear-gradient(${color ?? colors.grayDarker} 0 0) 0 0;
    background-size:${children.length}ch 200%;
    -webkit-background-clip:padding-box,text;
    background-clip:padding-box,text;
    background-repeat:no-repeat;
    animation: 
      background 700ms infinite steps(1),   
      typing calc(${children.length} * 50ms) steps(${children.length}) forwards;

    @keyframes typing {
      from {
        background-size: 0 200%
      }
    }

    @keyframes background {
      50% {
        background-position: 0 -100%, 0 0
      }
    }
  `}
`;
