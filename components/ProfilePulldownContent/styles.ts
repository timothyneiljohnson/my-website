import styled from 'styled-components';
import { Icon } from '../../common-components/Icon';
import { Image } from '../../common-components/Image';
import { animation, colors, mediaQueries } from '../../common-components/design-tokens';

interface ProfileDescriptionProps {
  isDarkMode?: boolean;
}
export const ProfileDescription = styled.div<ProfileDescriptionProps>`
  padding: 36px 0;
  color: ${colors.grayDarker};
  max-width: 1000px;
  margin: 0 auto;

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    color: ${colors.grayLighter};
  `}
`;

export const BioCallToActionWrapper = styled.ul`
  display: flex;
  column-gap: 10px;
  padding-top: 24px;
`;

export const ContactMeWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  // TODO: Get Row's "gap" working with px and remove
  padding-right: 32px;

  @media ${mediaQueries.smMax} {
    padding-right: 16px;
  }
`;

export const ContactMeIcon = styled(Icon)`
  transform: translateY(0) scale(1);
  transition: transform ${animation.durations.faster}ms
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const ContactMeLink = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    ${ContactMeIcon} {
      transform: translateY(-3px) scale(1.03);
      background-color: ${colors.secondary};
    }
  }
`;

export const MyNameIs = styled.p`
  color: ${colors.secondary};
  padding-bottom: 4px;
  line-height: 1.5;
`;

export const ProfilePicture = styled(Image)`
  max-width: 200px;
  margin-left: auto;
`;
