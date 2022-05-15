import styled from 'styled-components';
import { StandardSizes } from '../types';

const sizeMap = {
  xs: '0.65em',
  sm: '0.825em',
  md: '1em',
  lg: '1.1em',
  xl: '1.2em',
};

interface StyledBadgeProps {
  inline?: boolean;
}
export const StyledBadge = styled.div<StyledBadgeProps>`
  ${({ inline }) =>
    inline
      ? `
        display: inline-block;
        margin-left: 0.333em;
      `
      : `
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-50%) translateX(100%);
      `}
`;

interface BadgeInnerProps {
  color: string;
  isSingleChar: boolean;
  pill?: boolean;
  size: StandardSizes;
  textColor: string;
}
export const BadgeInner = styled.span<BadgeInnerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ pill }) => (!pill ? '4px' : '999px')};
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  ${({ isSingleChar }) => isSingleChar ? `
    width: 1.25em;
    padding: 0.8em;
  ` : `
    min-width: 1.25em;
    padding: 0.8em 0.5em;
  `}
  height: 1.25em;
  font-size: ${({ size }) => sizeMap[size]};
  font-weight: 400;
  
  white-space: nowrap;
  line-height: 1;
`;
