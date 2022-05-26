import styled from 'styled-components';
import {
  colors,
  decorations,
  mediaQueries,
  spacing,
} from '../../common-components/design-tokens';
import { Heading } from '../../common-components/Heading';

interface PostBodyProps {
  isDarkMode?: boolean;
}
export const PostBody = styled.div<PostBodyProps>`
  background: url('/postBottom.jpg') no-repeat 0 bottom,
    url('/postTop.jpg') no-repeat 0 top, url('/postbg.png') repeat-y 0 0;
  background-size: 100% auto;
  padding: ${spacing.x8} 120px 70px ${spacing.x12};
  width: 100%;
  line-height: 1.6em;
  font-size: 14px;

  @media ${mediaQueries.smMax} {
    padding: ${spacing.x5} 90px ${spacing.x10} ${spacing.x8};
  }

  @media ${mediaQueries.xsMax} {
    padding: ${spacing.x4} 85px ${spacing.x8} ${spacing.x6};
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: none;
  `}
`;

export const PostHeading = styled(Heading)`
  text-transform: uppercase;
  /* margin-bottom: ${spacing.x6}; */
  word-break: break-word;
`;

export const ExcerptImageWrapper = styled.div`
  position: relative;
  height: 300px;
  margin-bottom: ${spacing.x6};
`;

export const Day = styled.div`
  margin-top: ${spacing.x3};
  font-weight: bold;
  text-shadow: 0 -1px 0px ${colors.grayDark};
  font-size: ${spacing.x6};
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
  top: ${spacing.x8};
  position: absolute;
  background-color: ${colors.grayDarkest};
  align-items: center;
  display: flex;
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
