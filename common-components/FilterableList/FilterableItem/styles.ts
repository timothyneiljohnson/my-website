import styled, { css } from 'styled-components';
import { animation } from '../../design-tokens';

interface FilterableItemWrapperProps {
  isAnimating: boolean;
  isForeshadowItem: boolean;
  isFilteredOut: boolean;
  itemWidth: number;
  wasFilteredOut: boolean;
  style: {
    '--animation-distance-x': number | null;
    '--animation-distance-y': number | null;
    '--animation-start-width': number | null;
    '--animation-start-x': number | null;
    '--animation-start-y': number | null;
  };
}

export const FilterableItemWrapper = styled.div<FilterableItemWrapperProps>`
  position: relative;
  z-index: 0;

  /* Send items to animation start position */
  ${({ isAnimating, isForeshadowItem }) =>
    isAnimating &&
    !isForeshadowItem &&
    `
    position: absolute;
    left: calc(var(--animation-start-x) * 1px);
    top: calc(var(--animation-start-y) * 1px);
    width: calc(var(--animation-start-width) * 1px);
  `}

  ${({ isAnimating, isFilteredOut, isForeshadowItem, wasFilteredOut }) =>
    isAnimating &&
    !isForeshadowItem &&
    !isFilteredOut &&
    wasFilteredOut &&
    css`
      animation: ${animation.keyframes.fadeIn} ${animation.durations.slow}ms ease-in-out;
    `
  }

  display: ${(props) =>
    props.isForeshadowItem && props.isFilteredOut ? 'none' : 'block'};
  ${({ isAnimating }) =>
    `transform: ${
      isAnimating
        ? `translate(calc(var(--animation-distance-x) * -1px), calc(var(--animation-distance-y) * -1px))`
        : 'none'
    };
    transition: ${
      isAnimating
        ? `transform ${animation.durations.slow}ms ease-in-out, opacity ${animation.durations.fast}ms ease-in-out`
        : 'none'
    };
  `}

  /* If was not filtered out before, and is filtered out now — translate to origin */
  ${(props) =>
    !props.wasFilteredOut &&
    props.isFilteredOut &&
    `
    opacity: 0;
    z-index: 0;
    transform: translate(calc(var(--animation-distance-x) * -1px), calc(var(--animation-distance-y) * -1px));
  `}
  ${(props) =>
    props.isFilteredOut &&
    !props.isAnimating &&
    `
    display: none;
    opacity: 0;
  `}

  /* If was filtered out before, and is filtered out now — hide */
  ${(props) =>
    props.wasFilteredOut &&
    props.isFilteredOut &&
    `
    display: none;
    opacity: 0;
  `}
`;
