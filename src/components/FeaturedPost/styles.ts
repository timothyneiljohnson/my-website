import styled, { css } from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  gradients,
  mediaQueries,
  spacing,
} from '../../../common-components/design-tokens';
import { Heading } from '../../../common-components/Heading';
import { Image } from '../../../common-components/Image';

interface FeaturedPostHeadingProps {
  isDarkMode?: boolean;
}
export const FeaturedPostHeading = styled(Heading)<FeaturedPostHeadingProps>`
  color: ${colors.grayDarker};
  margin-top: 0;

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    color: ${colors.white};
  `}
`;

export const FeaturedPostDescription = styled.div`
  margin: ${spacing.x4} ${spacing.x3};
`;

interface FeaturedPostImageProps {
  isDarkMode?: boolean;
}
export const FeaturedPostImage = styled(Image).withConfig({
  shouldForwardProp: (prop) => !['isDarkMode'].includes(prop),
})<FeaturedPostImageProps>`
  height: 230px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.grayDarker : colors.white};

  @media ${mediaQueries.xsMax} {
    border-radius: 10px 0 0 10px;
    height: 124px;
    width: 100px;
  }

  img {
    object-fit: cover;
  }
`;

export const ViewThisFeatureWrapper = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${mediaQueries.xsMax} {
    width: 100px;
    height: 124px;
  }
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
  position: absolute;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}

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
  display: flex;
  flex-direction: column;
  height: 345px;
  position: relative;
  margin: 5px;
  background-color: ${colors.white};
  transition: box-shadow ${animation.durations.faster}ms ease-in-out;
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}

  @media ${mediaQueries.xsMax} {
    flex-direction: row;
    height: auto;
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    css`
      background-color: #2A2E33;
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
    ${focusStyle.withRadius()}
  }

  ${FeaturedPostImage} {
    opacity: 1;
    transition: opacity ${animation.durations.fast}ms ease-out;
  }

  ${ViewThisFeatureText} {
    transition: transform ${animation.durations.faster}ms ease-out;
    transform: scale(0.92);
  }

  &:hover,
  &:focus {
    ${decorations.boxShadow.mdStyle}

    ${ViewThisFeature} {
      opacity: 1;
    }

    ${ViewThisFeatureText} {
      transform: scale(1);
    }

    ${FeaturedPostImage} {
      opacity: 0.6;
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
