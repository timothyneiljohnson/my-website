import styled from 'styled-components';
import {
  colors,
  decorations,
  font,
  mediaQueries,
  spacing,
} from '../../../common-components/design-tokens';
import { Heading } from '../../../common-components/Heading';
import { Image } from '../../../common-components/Image';
import { Ribbon } from '../../../common-components/Ribbon';
import { Icon } from '../../../common-components/Icon';

interface PostBodyProps {
  isDarkMode?: boolean;
}
export const PostBody = styled.div<PostBodyProps>`
  background: url('/postBottom.jpg') no-repeat 0 bottom,
    url('/postTop.jpg') no-repeat 0 top, url('/postbg.png') repeat-y 0 0;
  background-size: 100% auto;
  padding: ${spacing.x8} 120px 70px ${spacing.x12};
  width: 100%;
  line-height: 1.5;

  @media ${mediaQueries.smMax} {
    padding: ${spacing.x5} ${spacing.x8} ${spacing.x10} ${spacing.x8};
    font-size: 14px;
    line-height: 1.4;
  }

  @media ${mediaQueries.xsMax} {
    padding: ${spacing.x4} ${spacing.x6} ${spacing.x8} ${spacing.x6};
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: none;
  `}
`;

export const PostHeading = styled(Heading)`
  word-break: break-word;

  ${font.headingStyle.h1}
  @media ${mediaQueries.mdMax} {
    ${font.headingStyle.h2}
  }
  @media ${mediaQueries.smMax} {
    padding-right: 90px;
    ${font.headingStyle.h3}
  }
  @media ${mediaQueries.xsMax} {
    padding-right: 85px;
    ${font.headingStyle.h4}
  }
`;

export const StyledPostImage = styled(Image)`
  img {
    object-fit: cover;
    object-position: top;
  }
`;

export const ExcerptImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: ${spacing.x6} 0 ${spacing.x6};

  @media ${mediaQueries.smMax} {
    margin: ${spacing.x3} 0 ${spacing.x3};
  }
`;

export const Day = styled.div`
  font-weight: bold;
  text-shadow: 0 -1px 0px ${colors.grayDark};
  font-size: ${spacing.x6};
  letter-spacing: 1px;

  @media ${mediaQueries.md} {
    margin-top: ${spacing.x3};
  }
`;

export const Month = styled.div`
  font-weight: bold;
  text-shadow: 0 -1px 0px ${colors.grayDark};
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  width: 100%;
  float: left;
`;

interface PostInnerContainerProps {
  isDarkMode?: boolean;
}
export const PostInnerContainer = styled.div<PostInnerContainerProps>`
  position: relative;
  width: 100%;

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    color: ${colors.grayLightest};
    background: ${colors.grayDarker};
    ${decorations.borderRadiusStyle}
    ${decorations.boxShadow.mdStyle}
  `}
`;

interface PostWrapperProps {
  isDarkMode?: boolean;
}
export const PostWrapper = styled.div<PostWrapperProps>`
  position: relative;
  margin-bottom: ${spacing.x14};

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: none;
  `}
`;

interface TeardropCategoryWrapperProps {
  isDarkMode?: boolean;
}
export const TeardropCategoryWrapper = styled.div<TeardropCategoryWrapperProps>`
  display: none;
  @media ${mediaQueries.sm} {
    display: flex;
  }

  top: ${spacing.x8};
  position: absolute;
  background-color: ${colors.tertiary};
  align-items: center;
  justify-content: center;
  border-radius: 0 50% 50%;
  transform: rotate(135deg);
  left: -${spacing.x8};
  height: 52px;
  width: 52px;

  @media ${mediaQueries.smMax} {
    height: 34px;
    width: 34px;
    left: -${spacing.x5};
    top: ${spacing.x6};
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: ${colors.secondary};
  `}
`;

export const TeardropCategoryInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-135deg);
`;

export const StyledRibbon = styled(Ribbon)`
  z-index: 1;
  right: 36px;
  width: 62px;
  &:before {
    right: 62px;
  }

  @media ${mediaQueries.smMax} {
    right: 20px;
    width: 45px;
    &:before {
      right: 45px;
    }
  }

  
`;

export const StyledIcon = styled(Icon)`
  @media ${mediaQueries.xsMax} {
    display: none;
  }
`;
