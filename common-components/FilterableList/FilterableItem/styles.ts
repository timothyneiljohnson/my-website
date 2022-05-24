import styled from 'styled-components';
import { animation } from '../../design-tokens';

interface FilterableItemWrapperProps {
  animationDistanceX: number | null;
  animationDistanceY: number | null;
  isAnimating: boolean;
  isForeshadowItem: boolean;
  isFilteredOut: boolean;
  itemWidth: number;
  wasFilteredOut: boolean;
}

export const FilterableItemWrapper = styled.div<FilterableItemWrapperProps>`
  position: relative;
  z-index: 1;
  display: ${(props) =>
    props.isForeshadowItem && props.isFilteredOut ? 'none' : 'block'};
  ${({ animationDistanceX, animationDistanceY, isAnimating }) =>
    `transform: ${
      isAnimating
        ? `translate(${-animationDistanceX}px, ${-animationDistanceY}px)`
        : 'none'
    };
    transition: ${
      isAnimating
        ? `transform ${animation.durations.slow}ms ease-in-out, opacity ${animation.durations.fast}ms ease-in-out`
        : 'none'
    };`}

  /* If was not filtered out before, and is filtered out now — translate to origin */
  ${(props) =>
    !props.wasFilteredOut &&
    props.isFilteredOut &&
    `
    opacity: 0;
    z-index: 0;
    // TODO: Try margin instead of transform! It's still taking up its original space...
    transform: translate(${-props.animationDistanceX}px, ${-props.animationDistanceY}px);
  `}
  ${(props) =>
    props.isFilteredOut &&
    !props.isAnimating &&
    `
    display: none;
    opacity: 0;
    // transform: translate(${-props.animationDistanceX}px, ${-props.animationDistanceY}px);
  `}

  /* If was filtered out before, and is filtered out now — hide */
  ${(props) =>
    props.wasFilteredOut &&
    props.isFilteredOut &&
    `
    display: none;
  `}
  
  /* If was filtered out before, and is not filtered out now — translate from origin to foreshadow position
  ${(props) =>
    props.wasFilteredOut &&
    !props.isFilteredOut &&
    props.isAnimating &&
    !props.isForeshadowItem &&
    `
    transform: translate(0px, 0px);
  `} */


  
`;
