import styled from 'styled-components';
import {
  colors,
  decorations,
  focusStyle,
  mediaQueries,
  spacing,
} from '../../../common-components/design-tokens';
import { Image } from '../../../common-components/Image';
import { Transition } from '../../../common-components/Transition';

interface StyledMainProps {
  isFullWidth?: boolean;
}
export const StyledMain = styled.main<StyledMainProps>`
  width: 100%;
  ${({ isFullWidth }) =>
    isFullWidth ? 'text-align: center;' : 'max-width: 1032px;'}
  margin: 0 auto ${spacing.x8};
  padding: 0 ${spacing.x4};
`;

interface StyledPageContainerProps {
  isDarkMode?: boolean;
}
export const StyledPageContainer = styled.div<StyledPageContainerProps>`
  ${({ isDarkMode }) => `
    background-color: ${isDarkMode ? colors.grayDarker : colors.white};
    color: ${isDarkMode ? colors.grayLightest : colors.grayDarker};
  `}
  padding: ${spacing.x9};
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}


  @media ${mediaQueries.smMax} {
    padding: ${spacing.x4};
  }

  /* PrismJS Theme Overrides - Darcula Aurora */
  code[class*='language-'],
  pre[class*='language-'] {
    color: #dddddd;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #2f474f;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #2f474f;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    ${({ isDarkMode }) => isDarkMode ? 'border: 1px solid #666666;' : null}
    ${decorations.borderRadiusStyle};
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: #303030 !important;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment {
    color: #707070;
  }

  .token.punctuation {
    color: #cccccc;
  }

  .token.interpolation-punctuation {
    color: #ed8f72;
  }

  .token.constant,
  .token.boolean {
    color: #ed8f72;
  }

  .token.hexcode {
    color: #ed8f72;
  }

  .token.regex {
    color: #ed8f72;
  }

  .token.operator {
    color: #cccccc;
  }

  .token.keyword {
    color: #ed8f72;
  }

  .token.number {
    color: #88c0d0;
  }

  .token.property {
    color: #88c0d0;
  }

  .token.variable {
    color: #a985bd;
  }

  .token.tag {
    color: #cccccc;

    > .punctuation {
      &:first-of-type,
      :last-of-type {
        color: #fac77d;
      }
    }
  }

  .token.attr-name {
    color: #88c0d0;
    font-style: italic;
  }

  .token.selector {
    color: #cccccc;
  }

  .token.builtin {
    color: #cccccc;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #9ec67d;
  }

  .token.class-name {
    color: #fac77d;
  }

  .token.function {
    color: #fac77d;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
`;

export const FeaturedImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2.35 / 1;
  margin: ${spacing.x6} 0 ${spacing.x4};

  @media ${mediaQueries.smMax} {
    margin: ${spacing.x4} 0 ${spacing.x2};
    aspect-ratio: 16 / 9;
  }
`;

interface StyledDateProps {
  isDarkMode?: boolean;
}
export const StyledDate = styled.div<StyledDateProps>`
  font-family: Helvetica, Arial, Sans-Serif;
  ${({ isDarkMode }) => `
    color: ${isDarkMode ? colors.grayLighter : colors.grayDark};
  `}
  font-weight: bold;
  font-style: italic;
  letter-spacing: 0.2px;
  padding: ${spacing.x3} 0;
`;

interface PostContentProps {
  isDarkMode?: boolean;
}
export const PostContent = styled.div<PostContentProps>`
  a {
    color: ${({ isDarkMode }) =>
      isDarkMode ? colors.secondary : colors.primary};
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    list-style: initial;
    margin: revert;
    padding: revert;

    li {
      margin-bottom: ${spacing.x2};
    }
  }

  p {
    padding-bottom: ${spacing.x2};
    font-size: 16px;
    line-height: 24px;
  }

  blockquote {
    border-left: 2px solid ${colors.grayDark};
    margin: ${spacing.x2} 0 ${spacing.x4};
    padding-left: ${spacing.x5};
  }
`;

export const BackToTop = styled(Transition)`
  position: fixed;
  bottom: 0;
  right: ${spacing.x5};
  bottom: ${spacing.x5};
  width: 40px;
  height: 40px;
  z-index: 98;
  overflow: hidden;
  cursor: pointer;
  margin-left: 10px;
`;

export const BackToTopButton = styled.button`
  border-radius: 999px;
  width: 32px;
  height: 32px;
  
  &::before {
    margin-left: ${spacing.x1};
    margin-top: ${spacing.x1};
  }

  &:focus {
    ${focusStyle.withRadius(9999)}
  }
`;

export const StyledImage = styled(Image)`
  img {
    object-fit: cover;
    object-position: top;
  }
`;
