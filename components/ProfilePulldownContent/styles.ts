import styled from 'styled-components';
import { Icon } from '../../common-components/Icon';
import { Image } from '../../common-components/Image';
import { animation, colors, focusStyle, mediaQueries, spacing } from '../../common-components/design-tokens';
import { Heading } from '../../common-components/Heading';

interface ProfileDescriptionProps {
  isDarkMode?: boolean;
}
export const ProfileDescription = styled.div<ProfileDescriptionProps>`
  padding: ${spacing.x9} 0;
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
  column-gap: ${spacing.x3};
  padding-top: ${spacing.x6};
`;

export const ContactMeWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing.x3};

  // TODO: Get Row's "gap" working with px and remove
  padding-right: ${spacing.x7};

  @media ${mediaQueries.smMax} {
    padding-right: ${spacing.x4};
  }
`;

export const ContactMeIcon = styled(Icon)`
  transform: translateY(0) scale(1);
  transition: transform ${animation.durations.faster}ms
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const StyledHeading = styled(Heading)`
  margin-top: 0;
`;

export const ContactMeLink = styled.a`
  display: flex;
  align-items: center;

  &:focus, &:active {
    ${focusStyle}
  }

  &:hover {
    ${ContactMeIcon} {
      transform: translateY(-3px) scale(1.03);
      background-color: ${colors.secondary};
    }
  }
`;

export const MyNameIs = styled.p`
  color: ${colors.secondary};
  padding-bottom: 0;
  line-height: 1.5;
`;

export const ProfilePicture = styled(Image)`
  max-width: 200px;
  margin-left: auto;
`;

export const StyledHeadingContainer = styled.div`
  &:focus{
    outline: none;   
  }
`;
