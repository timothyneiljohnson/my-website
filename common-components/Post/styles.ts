import styled from 'styled-components';
import { colors, decorations, mediaQueries } from '../design-tokens';
import { Heading } from '../Heading';
import { Image } from '../Image';

interface PostBodyProps {
  isDarkMode?: boolean;
}
export const PostBody = styled.div<PostBodyProps>`
  background: url('/postBottom.jpg') no-repeat 0 bottom,
    url('/postTop.jpg') no-repeat 0 top, url('/postbg.png') repeat-y 0 0;
  background-size: 100% auto;
  padding: 30px 120px 70px 48px;
  width: 100%;
  line-height: 1.6em;
  font-size: 14px;

  @media ${mediaQueries.smMax} {
    padding: 20px 90px 40px 30px;
  }

  @media ${mediaQueries.xsMax} {
    padding: 15px 85px 30px 25px;
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: none;
  `}
`;

interface PostHeadingProps {
  isDarkMode?: boolean;
}
export const PostHeading = styled(Heading)<PostHeadingProps>`
  text-transform: uppercase;
  margin-bottom: 22px;
  word-break: break-word;

  @media ${mediaQueries.smMax} {
    ${decorations.headingFontStyle.h2}
  }

  @media ${mediaQueries.xxsMax} {
    ${decorations.headingFontStyle.h3}
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    color: ${colors.grayLighter};
  `}
`;

export const ExcerptImage = styled(Image)`
  height: auto;
  width: 100%;
  margin-bottom: 22px;
`;

export const Day = styled.div`
  margin-top: 12px;
  font-weight: bold;
  text-shadow: 0 -1px 0px ${colors.grayDark};
  font-size: 24px;
  letter-spacing: 1px;
`;

export const Month = styled.div`
  font-weight: bold;
  text-shadow: 0 -1px 0px ${colors.grayDark};
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
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
  margin-bottom: 55px;

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
  top: 30px;
  position: absolute;
  background-color: ${colors.grayDarkest};
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 0 50% 50%;
  transform: rotate(135deg);
  left: -30px;
  height: 52px;
  width: 52px;

  @media ${mediaQueries.smMax} {
    height: 34px;
    width: 34px;
    left: -20px;
    top: 24px;
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: ${colors.quinary};
  `}
`;

export const TeardropCategoryInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-135deg);
`;
