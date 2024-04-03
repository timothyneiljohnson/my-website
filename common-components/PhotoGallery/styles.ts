import styled from 'styled-components';
import { Col } from '../Col';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  mediaQueries,
  spacing,
} from '../design-tokens';
import { Grid } from '../Grid';
import { hexToRgba } from '../helpers';
import { Image } from '../Image';
import { LoadingDots } from '../LoadingDots';
import { Row } from '../Row';

interface StyledPhotoGalleryProps {
  height?: number;
  width?: number;
  topMargin?: number;
  isDarkMode?: boolean;
}

export const StyledPhotoGallery = styled.div<StyledPhotoGalleryProps>`
  display: flex;
  flex-direction: row;
  place-content: stretch center;
  box-sizing: border-box;
  width: 100%;
  gap: ${spacing.x1};
`;

export const PhotoGalleryCol = styled.div`
  display: flex;
  flex-direction: column;
  place-content: stretch flex-start;
  flex-grow: 1;
  flex-basis: 0;
`;

export const StyledImage = styled(Image)`
  overflow: hidden;
  cursor: pointer;

  img {
    transition: transform ${animation.durations.slow}ms ease-in-out,
      opacity ${animation.durations.slow}ms ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
    opacity: 0.75;
  }
`;

interface StyledFullscreenImageProps {
  isLoaded: boolean;
}
export const StyledFullscreenImage = styled(Image)<StyledFullscreenImageProps>`
  height: 100%;
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
  z-index: 99;

  img {
    object-fit: contain;
  }
`;

export const StyledGrid = styled(Grid)`
  height: 100%;
`;

export const StyledRow = styled(Row)`
  height: calc(100% - ${spacing.x10});
`;

export const StyledCol = styled(Col)`
  height: 100%;
`;

export const StyledLoadingDots = styled(LoadingDots)`
  position: fixed;
  top: calc(50% - 23px);
  margin: 0 auto;
  z-index: 98;
`;

export const GalleryNavButton = styled.button`
  display: flex;
  align-items: center;
  height: 200px;
  padding: 0 ${spacing.x4};
  transition: background ${animation.durations.faster}ms ease-in-out;
  user-select: none;
  ${decorations.borderRadiusStyle}

  &:hover {
    background: ${hexToRgba(colors.grayDark, 0.85)};
  }

  &:focus,
  &:active {
    ${focusStyle.withRadius()}
  }

  @media ${mediaQueries.smMax} {
    padding: 0;
  }
`;

export const ImageCountStatus = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  bottom: 0;
  font-size: 12px;
  color: ${colors.grayLighter};
`;

export const StyledButton = styled.button`
  &:focus {
    ${focusStyle.withRadius()}
    outline-offset: 0;
  }
`;
