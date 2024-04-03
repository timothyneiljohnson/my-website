import styled from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  mediaQueries,
  spacing,
} from '../design-tokens';
import { Image } from '../Image';
import { StandardSizes } from '../types';
import { Heading } from '../Heading';
import { hexToRgba } from '../helpers';

export const BannerWrapper = styled.div`
  width: 100%;
  max-width: 1032px;
`;

export const StyledBanner = styled.a`
  width: 100%;
  max-width: 1032px;
  display: block;
  position: relative;
  transition: box-shadow ${animation.durations.faster}ms ease-in-out;
  ${decorations.boxShadow.smStyle}
  ${decorations.borderRadiusStyle}
  aspect-ratio: 2.35 / 1;

  @media ${mediaQueries.smMax} {
    aspect-ratio: 16 / 9;
  }

  &:focus,
  &:active {
    ${focusStyle.withRadius()}
  }

  &:hover {
    ${decorations.boxShadow.mdStyle}
  }
`;

interface BannerImageStyledProps {
  isCurrentSlide: boolean;
}
export const BannerImageStyled = styled(Image).withConfig({
  shouldForwardProp: (prop) => !['isCurrentSlide'].includes(prop),
})<BannerImageStyledProps>`
  transition: opacity ${animation.durations.slow}ms ease-in-out;
  opacity: ${({ isCurrentSlide }) => (isCurrentSlide ? 1 : 0)};
  overflow: hidden;
  ${decorations.borderRadiusStyle}

  img {
    object-fit: cover;
    object-position: top;
  }
`;

export const BannerSlideStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1032px;
  overflow: hidden;
`;

export const BannerControlsStyled = styled.div`
  width: 100%;
  padding: ${spacing.x4} 0 ${spacing.x2};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface StyledBannerControlProps {
  ariaLabel?: string;
  isActive?: boolean;
  isDarkMode?: boolean;
}

export const StyledBannerControl = styled.button<StyledBannerControlProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) =>
    isActive ? colors.grayLight : colors.grayLightest};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: ${spacing.x2};
  font-weight: bold;
  font-size: 11.5px;
  text-align: center;
  line-height: 20px;

  ${({ isActive }) =>
    !isActive &&
    `
    box-shadow: inset 0 0 4px 1.5px #ccc;
    transition: filter ${animation.durations.faster}ms ease-in-out;
    &:hover {
      ${decorations.buttons.hoverFilterStyle}
    }
  `}

  &:focus, &:active {
    ${focusStyle.withRadius(9999)}
  }

  ${({ isDarkMode, isActive }) =>
    isDarkMode &&
    `
      background-color: ${isActive ? colors.grayLighter : colors.grayLight};
      ${!isActive ? `box-shadow: inset 0 0 4px 1.5px ${colors.grayLight};` : ''}
    `}

  &:hover {
    filter: brightness(110%);
  }
`;

interface NextPreviousControlProps {
  isDarkMode?: boolean;
}
const NextPreviousControl = styled(
  StyledBannerControl
)<NextPreviousControlProps>`
  height: 24px;
  width: 24px;
  transition: transform ${animation.durations.faster}ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: ${colors.grayLighter};
  `}
`;

export const NextControl = styled(NextPreviousControl)`
  padding-left: 1px;
`;

export const PreviousControl = styled(NextPreviousControl)`
  padding-right: 1px;
`;

const paddingBySize = {
  md: `${spacing.x5} ${spacing.x6}`,
  lg: spacing.x4,
};

const fontSizeBySize = {
  md: '22px',
  lg: '32px',
};

const lineHeightBySize = {
  md: '25px',
  lg: '35px',
};

const paddingBySizeSmMaxScreen = {
  md: `${spacing.x4} ${spacing.x5}`,
  lg: spacing.x4,
};

const fontSizeBySizeSmMaxScreen = {
  md: '18px',
  lg: '28px',
};

const lineHeightBySizeSmMaxScreen = {
  md: '21px',
  lg: '31px',
};

const paddingBySizeXsMaxScreen = {
  md: `${spacing.x2} ${spacing.x3}`,
  lg: spacing.x2,
};

const fontSizeBySizeXsMaxScreen = {
  md: '10px',
  lg: '10px',
};

const lineHeightBySizeXsScreen = {
  md: '13px',
  lg: '13px',
};

interface BannerTitleWrapperProps {
  background: string;
  gradientEnd: string;
  gradientStart: string;
  isCurrentSlide: boolean;
  position: string;
  size: StandardSizes;
}
export const BannerTitleWrapper = styled.div<BannerTitleWrapperProps>`
  position: absolute;
  transition: opacity ${animation.durations.slow}ms ease-in-out;
  opacity: ${({ isCurrentSlide }) => (isCurrentSlide ? 1 : 0)};
  padding: ${({ size }) => paddingBySize[size]};
  backdrop-filter: blur(3px) brightness(60%);
  ${decorations.borderRadiusStyle}

  ${({ position, size }) => `
    ${position.includes('top') ? 'top' : 'bottom'}: ${
    ['lg', 'xl'].includes(size) ? spacing.x10 : spacing.x9
  };
    ${position.includes('left') ? 'left' : 'right'}: ${spacing.x9};
    text-align: ${position.includes('left') ? 'left' : 'right'};
  `}
  ${({ background }) =>
    background
      ? `
    background: ${hexToRgba(colors[background], 0.4)};`
      : ''}
  ${({ gradientStart, gradientEnd }) =>
    gradientStart && gradientEnd
      ? `
    background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
  `
      : ''}

  @media ${mediaQueries.smMax} {
    padding: ${({ size }) => paddingBySizeSmMaxScreen[size]};
    ${({ position }) => `
      ${position.includes('top') ? 'top' : 'bottom'}: ${spacing.x8};
      ${position.includes('left') ? 'left' : 'right'}: ${spacing.x8};
      text-align: ${position.includes('left') ? 'left' : 'right'};
    `}
  }
  @media ${mediaQueries.xsMax} {
    padding: ${({ size }) => paddingBySizeXsMaxScreen[size]};
    ${({ position }) => `
      ${position.includes('top') ? 'top' : 'bottom'}: ${spacing.x3};
      ${position.includes('left') ? 'left' : 'right'}: ${spacing.x3};
      text-align: ${position.includes('left') ? 'left' : 'right'};
    `}
  }
`;

interface StyledHeadingProps {
  overrideSize: StandardSizes;
}
export const StyledHeading = styled(Heading)<StyledHeadingProps>`
  font-size: ${({ overrideSize }) => fontSizeBySize[overrideSize]};
  line-height: ${({ overrideSize }) => lineHeightBySize[overrideSize]};
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin: 0;

  @media ${mediaQueries.smMax} {
    font-size: ${({ overrideSize }) => fontSizeBySizeSmMaxScreen[overrideSize]};
    line-height: ${({ overrideSize }) =>
      lineHeightBySizeSmMaxScreen[overrideSize]};
  }
  @media ${mediaQueries.xsMax} {
    font-size: ${({ overrideSize }) => fontSizeBySizeXsMaxScreen[overrideSize]};
    line-height: ${({ overrideSize }) =>
      lineHeightBySizeXsScreen[overrideSize]};
  }
`;
