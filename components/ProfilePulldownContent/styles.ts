import styled from 'styled-components';
import { colors } from '../../common-components/design-tokens';

interface ProfileWrapperProps {
  isDarkMode?: boolean;
}
export const ProfileWrapper = styled.div<ProfileWrapperProps>`
  background: url('/photo.jpg') no-repeat right 23px;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  position: relative;

  ${({ isDarkMode }) => isDarkMode && `
    background: url('/photo-darkmode.jpg') no-repeat right 23px;
  `}
`;

interface ProfileDescriptionProps {
  isDarkMode?: boolean;
}
export const ProfileDescription = styled.div<ProfileDescriptionProps>`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.grayDark};
  line-height: 20px;
  margin-top: 36px;

  p {
    padding-bottom: 10px;
  }

  ${({ isDarkMode }) => isDarkMode && `
    color: ${colors.grayLighter};
  `}
`;

interface MapBackgroundProps {
  isDarkMode?: boolean;
}
export const MapBackground = styled.div<MapBackgroundProps>`
  background: #f2f2f2 url('/map.jpg') no-repeat center 160px;
  height: 100%;
  margin: 0 -15px;
  padding: 0 15px;

  ${({ isDarkMode }) => isDarkMode && `
    background: url('/map-darkmode.jpg') center bottom no-repeat, url('/footerbg-darkmode.jpg') left top repeat;
  `}
`;

export const ContactMeWrapper = styled.ul`
  display: flex;
  column-gap: 10px;
  margin-left: -2px;
`;

export const ContactMeLink = styled.a`
  display: flex;
  align-items: center;
`;
