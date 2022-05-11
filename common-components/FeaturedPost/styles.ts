import styled, { css } from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  gradients,
} from '../design-tokens';
import { Heading } from '../Heading';
import { Image } from '../Image';

export const FeaturedPostBody = styled.div`
  padding: 0 120px 70px 48px;
  line-height: 1.6em;
  font-size: 14px;
`;

interface FeaturedPostHeadingProps {
  isDarkMode?: boolean;
}
export const FeaturedPostHeading = styled(Heading)<FeaturedPostHeadingProps>`
  color: ${colors.grayDarkest};
  margin: 15px 0 0 12px;

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    color: ${colors.white};
  `}
`;

export const HeroLink = styled.a`
  display: block;
`;

export const FeaturedPostImage = styled(Image)`
  height: 287px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  background-color: ${colors.white};
`;

export const ViewThisFeatureWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 287px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ViewThisFeatureProps {
  isDarkMode?: boolean;
}
export const ViewThisFeature = styled.span<ViewThisFeatureProps>`
  display: flex;
  opacity: 0;
  z-index: 10;
  transition: opacity ${animation.durations.faster}ms ease-in-out;
  background-color: ${colors.white};
  padding: 10px 10px 9px;
  ${decorations.borderRadiusStyle}

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: ${colors.grayDark};
  `}
`;

interface ViewThisFeatureTextProps {
  isDarkMode?: boolean;
}
export const ViewThisFeatureText = styled.span<ViewThisFeatureTextProps>`
  font-weight: bold;
  font-size: 12px;
  line-height: 10px;
  text-decoration: none;
  white-space: nowrap;
  color: ${colors.grayDarker};

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    color: ${colors.white};
  `}
`;

interface FeaturedPostWrapperProps {
  isDarkMode?: boolean;
}
export const FeaturedPostWrapper = styled.a<FeaturedPostWrapperProps>`
  height: 386px;
  display: block;
  position: relative;
  margin: 5px;
  background-color: ${colors.white};
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}

  ${({ isDarkMode }) =>
    isDarkMode &&
    css`
      background-color: ${colors.grayDarker};
      background-clip: padding-box;

      &:hover {
        box-shadow: none;
      }
      &:after {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: '';
        position: absolute;
        transition: top ${animation.durations.faster}ms ease-in-out,
          left ${animation.durations.faster}ms ease-in-out,
          height ${animation.durations.faster}ms ease-in-out,
          width ${animation.durations.faster}ms ease-in-out;
        border-radius: 10px;
        z-index: -1;
        background: linear-gradient(
          60deg,
          ${gradients.primary.start},
          ${gradients.primary.end},
          ${gradients.secondary.start},
          ${gradients.secondary.end}
        );
      }
      &:hover&:after {
        top: -5px;
        left: -5px;
        height: calc(100% + 10px);
        width: calc(100% + 10px);
        animation: ${animation.keyframes.backgroundPosition}
          ${animation.durations.slowest}ms ease alternate infinite;
        background-size: 300% 300%;
      }
    `}

  &:focus,
  &:active {
    ${focusStyle}
  }

  ${FeaturedPostImage} {
    opacity: 1;
    transition: opacity ${animation.durations.fast}ms ease-out;
  }

  ${ViewThisFeatureText} {
    transition: transform ${animation.durations.faster}ms ease-out;
    transform: scale(0.92);
  }

  &:hover {
    ${ViewThisFeature} {
      opacity: 1;
    }

    ${ViewThisFeatureText} {
      transform: scale(1);
    }

    ${FeaturedPostImage} {
      opacity: 0.8;
    }

    ${FeaturedPostHeading} {
      color: ${colors.primary};

      ${({ isDarkMode }) =>
        isDarkMode &&
        `
        color: ${colors.quinary};
      `}
    }
  }
`;