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
`;

export const PhotoGalleryCol = styled.div`
  display: flex;
  flex-direction: column;
  place-content: stretch flex-start;
  flex-grow: 1;
  flex-basis: 0;
`;

export const StyledImage = styled(Image)`
  margin: 1.5px;
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

export const StyledFullscreenImage = styled(Image)`
  height: calc(100% - ${spacing.x10});
`;

export const StyledGrid = styled(Grid)`
  height: 100%;
`;

export const StyledRow = styled(Row)`
  height: 100%;
`;

export const StyledCol = styled(Col)`
  height: calc(100% - ${spacing.x10});
`;

export const GalleryNavButton = styled.button`
  display: flex;
  align-items: center;
  height: 200px;
  padding: 0 ${spacing.x4};
  transition: background ${animation.durations.faster}ms ease-in-out;
  ${decorations.borderRadiusStyle}

  &:hover {
    background: ${hexToRgba(colors.grayDark, 0.85)};
  }

  &:focus,
  &:active {
    ${focusStyle}
  }

  @media ${mediaQueries.smMax} {
    padding: 0;
  }
`;

export const ImageCountStatus = styled.div`
  font-size: 12px;
  color: ${colors.grayLighter};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  &:focus {
    ${focusStyle}
    outline-offset: 0;
  }
`;
