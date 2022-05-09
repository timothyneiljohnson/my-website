import styled from 'styled-components';
import { animation, colors, decorations, focusStyle } from '../design-tokens';

export const BannerWrapper = styled.div`
  height: 490px;
  max-width: 1000px;
`;

export const StyledBanner = styled.a`
  width: 100%;
  height: 450px;
  overflow: hidden;
  display: block;
  position: relative;
  ${decorations.boxShadow.mdStyle}
  ${decorations.borderRadiusStyle}
`;

interface BannerSlideStyledProps {
  imageUrl: string;
  isCurrentSlide: boolean;
}
export const BannerSlideStyled = styled.div<BannerSlideStyledProps>`
  background: url(${({ imageUrl }) => imageUrl}) no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 1000px;
  height: 450px;
  position: absolute;
  transition: opacity ${animation.durationSlow}ms ease-in-out;
  opacity: ${({ isCurrentSlide }) => (isCurrentSlide ? 1 : 0)};
  overflow: hidden;
  ${decorations.borderRadiusStyle}
`;

export const BannerControlsStyled = styled.div`
  width: 100%;
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface StyledBannerControlProps {
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
  overflow: hidden;
  width: 18px;
  height: 18px;
  margin-left: 10px;
  font-weight: bold;

  color: ${({ isActive }) => (isActive ? colors.white : colors.grayDarker)};
  font-size: 11.5px;
  text-align: center;
  line-height: 20px;

  ${({ isActive }) =>
    !isActive &&
    `
    box-shadow: inset 0 0 4px 1.5px ${colors.grayLighter};
    transition: filter ${animation.durationFaster}ms ease-in-out;
    &:hover {
      ${decorations.buttons.hoverFilterStyle}
    }
  `}

  &:focus, &:active {
    ${focusStyle}
  }

  ${({ isDarkMode }) => isDarkMode && `
    ${({ isActive }) => `
      background-color: ${isActive ? colors.grayLightest : colors.grayLight};
      box-shadow: inset 0 0 4px 1.5px ${isActive ? colors.grayLightest : colors.grayLight};
    `}

    &:hover {
      filter: brightness(110%);
    }
  `}
`;

interface NextPreviousControlProps {
  isDarkMode?: boolean;
}
export const NextPreviousControl = styled(StyledBannerControl)<NextPreviousControlProps>`
  height: 24px;
  width: 24px;
  transition: transform ${animation.durationFaster}ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }

  ${({ isDarkMode }) => isDarkMode && `
    background-color: ${colors.grayLightest};
  `}
`;
