import styled from 'styled-components';
import { colors, mediaQueries } from '../../common-components/design-tokens';
import { Icon } from '../../common-components/Icon';
import { PlainGrid } from '../../common-components/PlainGrid';
import { Row } from '../../common-components/Row';

interface StyledPhoneHomeProps {
  height?: number;
  width?: number;
  topMargin?: number;
}

export const StyledPhoneHome = styled.div<StyledPhoneHomeProps>`
  &:root {
    --page-swipe-distance-px: calc(var(--page-scroll-position) * 1px);
  }
  height: 1334px;
  width: 750px;
  background: url('/athens.jpg') no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  color: ${colors.white};
  touch-action: none;
  user-select: none;
  transform-origin: top left;
  overflow: hidden;
`;

interface PhoneHomeScreenPagesRowProps {
  currentPageIndex?: number;
  pageScrollPosition?: number;
  pageWidth?: number;
}
export const PhoneHomeScreenPagesRow = styled(
  Row
)<PhoneHomeScreenPagesRowProps>`
  height: 100%;
  width: calc(var(--number-of-pages) * 100%);
  transition: ${({ pageScrollPosition, pageWidth }) =>
    pageScrollPosition === 0 || Number.isInteger(pageScrollPosition / pageWidth)
      ? 'margin-left 360ms ease'
      : 'none'};
  margin-left: calc(var(--page-swipe-distance) * 1px);
`;

export const PhoneHomeScreenPage = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 49.3px;
  flex-basis: calc((100 / var(--number-of-pages)) * 1%);
`;

export const PhoneHomeScreenPageInnerGrid = styled(PlainGrid)`
  height: calc(100% - 183px);
  width: 88.7%;
  margin: 0 auto;
`;

export const AppGridItem = styled.div`
  min-width: 0;
`;

export const FolderAppCol = styled.div`
  flex-basis: 28.263%;
  align-items: center;
  justify-content: center;
  min-width: 0;
`;

const AppOrFolder = styled.div`
  height: 0;
  padding: 50%;
  position: relative;
`;

export const AppOrFolderInner = styled.div`
  border-radius: 22%;
  overflow: hidden;
  position: absolute;
  top: 8%;
  left: 8%;
  bottom: 8%;
  right: 8%;
`;

interface FolderInnerProps {
  animateClose?: boolean;
  isOpen?: boolean;
  translationCoords?: string;
  style?: any;
}
export const FolderInner = styled(AppOrFolderInner)<FolderInnerProps>`
  background: rgb(230, 230, 230, 0.35);
  backdrop-filter: blur(15px);
  padding: 9%;
  transform-origin: top center;
  ${({ animateClose, isOpen }) =>
    isOpen &&
    !animateClose &&
    `
    background: rgb(195, 195, 195, 0.75);
    backdrop-filter: blur(0px);
    animation: openFolder 480ms forwards normal;
    padding: 6%; // Snap change, because padding transitions cause layout recalculations
    z-index: 999;
  `}
  ${({ animateClose, isOpen }) =>
    isOpen &&
    animateClose &&
    `
    animation: closeFolder 480ms forwards normal;
    z-index: 999;
  `}

  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  @keyframes openFolder {
    from {
      transform: scale(1) translate(0, 0);
    }
    to {
      transform: scale(4.85)
        translate(
          calc(var(--translation-x) * 1px),
          calc(var(--translation-y) * 1px)
        );
      border-radius: 12%;
      height: 95%;
    }
  }
  @keyframes closeFolder {
    from {
      transform: scale(4.85)
        translate(
          calc(var(--translation-x) * 1px),
          calc(var(--translation-y) * 1px)
        );
      border-radius: 12%;
      height: 95%;
    }
    to {
      transform: scale(1) translate(0, 0);
    }
  }

  @media ${mediaQueries.darkMode} {
    background: none;
    backdrop-filter: blur(15px) brightness(70%);
  }
`;

export const FolderItemStyled = styled(AppOrFolder)``;

export const AppItemStyled = styled(AppOrFolder)``;

export const AppOrFolderHeading = styled.div`
  font-size: 23.28px;
  line-height: 25px;
  letter-spacing: 0.7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: system-ui;
  text-shadow: 0 0 3px rgb(0, 0, 0, 0.08);
`;

export const AppOrFolderHeadingSmall = styled(AppOrFolderHeading)`
  font-size: calc(22px / 4.85);
  letter-spacing: 0;
  line-height: calc(27.936px / 4.85);
  margin-top: calc(2px / 4.85);
`;

export const AppDock = styled.div`
  height: 183px;
  width: 100%;
  background: rgb(255, 255, 255, 0.35);
  backdrop-filter: blur(15px);
  position: absolute;
  bottom: 0;

  @media ${mediaQueries.darkMode} {
    background: rgb(0, 0, 0, 0.1);
  }
`;

export const AppDockInnerGrid = styled(PlainGrid)`
  height: 100%;
  width: 88.7%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const AppDockRow = styled(Row)`
  height: 100%;
`;

export const AppIcon = styled.div``;

export const Keyboard = styled.div``;

export const KeyboardKey = styled.div``;

interface FullscreenFolderFilterProps {
  isShown?: boolean;
}
export const FullscreenFolderFilter = styled.div<FullscreenFolderFilterProps>`
  position: absolute;
  top: 0;
  transition: backdrop-filter 360ms ease, visibility 360ms ease;
  visibility: ${({ isShown }) => (isShown ? 'visible' : 'hidden')};
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ isShown }) =>
    isShown ? 'blur(12px) brightness(85%)' : 'blur(0) brightness(100%)'};
  z-index: 998;
`;

interface FullscreenSearchFilterProps {
  isOpen?: boolean;
  blurPercent?: number;
}
export const FullscreenSearchFilter = styled.div<FullscreenSearchFilterProps>`
  position: absolute;
  top: 0;
  transition: opacity 400ms ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ blurPercent }) =>
    `blur(${blurPercent * 25}px) brightness(${100 - 25 * blurPercent}%)`};
  pointer-events: none;
  z-index: 998;
`;

interface OpenFolderHeadingProps {
  isShown?: boolean;
  blurPercent?: number;
}
export const OpenFolderHeading = styled.div<OpenFolderHeadingProps>`
  transition: opacity 360ms ease;
  font-size: 58px;
  margin-top: 170px;
  font-weight: 400;
  opacity: ${({ isShown }) => (isShown ? 1 : 0)};
`;

interface SearchViewProps {
  searchOpenPercent?: number;
  isOpen?: boolean;
}
export const SearchView = styled.div<SearchViewProps>`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 78px;
  z-index: 999;
  padding: 0 2.5%;
  transition: transform 400ms ease, opacity 400ms ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translateY(
    ${({ isOpen, searchOpenPercent }) =>
      isOpen ? -160 + searchOpenPercent * 132 : -160}px
  );
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  font-size: 35px;
  &::placeholder {
    color: rgb(255, 255, 255, 0.82);
  }

  &:focus {
    outline: none;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  height: 68px;
  width: 100%;
  background: rgb(255, 255, 255, 0.2);
  border-radius: 18px;
  padding-left: 70px;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  left: 18px;
  top: 15px;
  opacity: 0.82;
`;

export const MicIcon = styled(Icon)`
  position: absolute;
  right: 15px;
  top: 10px;
  opacity: 0.82;
`;

export const SearchCancelButton = styled.button`
  padding-left: 20px;
  font-size: 32px;
  color: rgb(255, 255, 255, 0.82);
`;
