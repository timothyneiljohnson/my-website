import styled from 'styled-components';
import { Icon } from '../../../common-components/Icon';
import { Image } from '../../../common-components/Image';
import { animation, colors, focusStyle, gradients, mediaQueries, spacing } from '../../../common-components/design-tokens';

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
  padding-right: ${spacing.x5};

  @media ${mediaQueries.smMax} {
    padding-right: ${spacing.x4};
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

  &:focus, &:active {
    ${focusStyle.default}
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
  font-weight: 500;
  padding-bottom: 0;
  line-height: 1.5;
`;

export const ProfilePicture = styled(Image)`
  max-width: 200px;
  margin-left: auto;
`;

export const StyledHeadingContainer = styled.div`
  padding-bottom: ${spacing.x3};

  &:focus{
    outline: none;   
  }
`;

export const SkillsList = styled.span`
  font-weight: bold;
  background-image: linear-gradient(45deg, ${gradients.primary.start}, ${gradients.primary.end});
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;

export const SkillsWrapper = styled.p`
  padding-top: ${spacing.x5};
`;

export const AndMore = styled.span`
  font-style: italic;
  color: ${colors.grayLight};
  white-space: nowrap;
`;
