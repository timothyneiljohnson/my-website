import styled from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  mediaQueries,
  spacing,
} from '../design-tokens';
import { Icon } from '../Icon';

interface StyledCarouselProps {
  height?: number;
  width?: number;
  topMargin?: number;
  isDarkMode?: boolean;
}
export const StyledCarousel = styled.div<StyledCarouselProps>`
  position: relative;
  width: 100%;
  contain: content;
  box-sizing: border-box;
  height: ${({ height }) => height}px;
  overflow: hidden;

  @media ${mediaQueries.smMax} {
    overflow: auto;
  }
`;

interface CarouselRowProps {
  isDragging: boolean;
  style?: {
    '--translate-carousel-row-x': number;
  };
}
export const CarouselRow = styled.div<CarouselRowProps>`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: flex-start;
  align-items: stretch;
  flex-grow: 1;
  flex-basis: 0;
  gap: ${spacing.x2};
  transform: translateX(calc(var(--translate-carousel-row-x) * 1px));
  transition: ${({ isDragging }) =>
    !isDragging ? `transform ${animation.durations.fast}ms ease-out` : 'none'};
  cursor: grab;

  &[data-dragging='true'] * {
    pointer-events: none;
  }

  > * {
    flex: 0 0 auto;
  }
`;

const CarouselNavButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  border: none;
  padding: 0 ${spacing.x1};
  margin: 3px;
  top: 0;
  bottom: 0;
  z-index: 1;

  ${decorations.borderRadiusStyle}

  &:focus,
  &:active {
    ${focusStyle.default}
  }

  @media ${mediaQueries.smMax} {
    padding: 0;
  }

  button {
    ${decorations.boxShadow.mdStyle}
  }
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  border-radius: 50% 50%;
  width: 32px;
  height: 32px;
  ${decorations.boxShadow.mdStyle}
`;

export const StyledIcon = styled(Icon)`
  display: block;
`;

export const CarouselNavButtonLeft = styled(CarouselNavButton)`
  left: 0;

  ${ArrowIconWrapper} {
    padding-right: 3px;
  }
`;

export const CarouselNavButtonRight = styled(CarouselNavButton)`
  right: 0;

  ${ArrowIconWrapper} {
    padding-left: 3px;
  }
`;
