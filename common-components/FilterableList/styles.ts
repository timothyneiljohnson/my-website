import styled, { css } from 'styled-components';
import { animation, spacing } from '../design-tokens';

export const FilterList = styled.ul`
  padding: 3px 0 0 5px;
  font-size: 12px;
  height: 60px;
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
`;

export const FilterListWrapper = styled.div`
  width: 100%;
  margin-top: ${spacing.x6};
  overflow: hidden;
`;

export const FilterListItemStyled = styled.li`
  display: inline-block;
  margin: 0 ${spacing.x2} 0 0;
`;

export const HiddenForeshadow = styled.div`
  overflow: hidden;
  height: 0;
  opacity: 0;
`;

interface FilterableItemsContainerProps {
  isAnimating: boolean;
  startingHeight: number | null;
  endingHeight: number | null;
}
export const FilterableItemsContainer = styled.div<FilterableItemsContainerProps>`
  /* Preserve starting height */
  ${({ isAnimating, startingHeight }) =>
    isAnimating &&
    startingHeight !== null &&
    `
    height: ${Math.max(startingHeight)}px;
  `}
  /* Update height to largest of starting or ending height, animate height */
  ${({ isAnimating, startingHeight, endingHeight }) =>
    isAnimating &&
    startingHeight !== null &&
    endingHeight !== null &&
    css`
      height: ${Math.max(startingHeight, endingHeight)}px;
      overflow: hidden;
      ${css`
        animation: ${animation.keyframes.changeHeight(
            Math.max(startingHeight, endingHeight),
            endingHeight
          )}
          ${animation.durations.fast}ms ${animation.durations.faster}ms
          ease-in-out forwards;
      `}
    `}
`;
