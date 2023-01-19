import styled from 'styled-components';
import {
  animation,
  colors,
  decorations,
  spacing,
} from '../design-tokens';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.x1};
`;

interface PageButtonProps {
  isSelected?: boolean;
}
export const PageButton = styled.button<PageButtonProps>`
  padding: ${spacing.x2} ${spacing.x4};
  border: 1px solid transparent;
  transition: border ${animation.durations.fastest}ms ease-in-out;
  outline: none;

  ${({ isSelected }) =>
    isSelected
      ? `
        background-color: ${colors.primary};
        color: ${colors.white};
      `
      : `
        &:not([disabled]) {
          &:hover, &:focus {
            border: 1px solid ${colors.grayLighter};
          }
        }
      `}

  ${decorations.borderRadiusStyle}

  &:disabled {
    background-color: ${colors.white};
    color: ${colors.grayLighter};
    cursor: default;
  }
`;
