import { FC } from 'react';
import { Heading, Icon } from '../../common-components';
import { colors } from '../../common-components/design-tokens';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import {
  ContactMeWrapper,
  ContactMeLink,
  MapBackground,
  ProfileDescription,
  ProfileWrapper,
} from './styles';

export const ProfilePulldownContent: FC = () => {
  const { isDarkMode } = useStorageDarkMode();

  return (
    <MapBackground isDarkMode={isDarkMode}>
      <ProfileWrapper isDarkMode={isDarkMode}>
        <ProfileDescription isDarkMode={isDarkMode}>
          <Heading
            color={isDarkMode ? colors.grayLightest : colors.grayDarker}
            level={4}
          >
            Timothy Neil Johnson
          </Heading>
          <p>
            Hi, I'm a driven, experienced developer/designer in Minneapolis.
          </p>
          <p>Lead Software Engineer at Target.</p>
          <p>Get in touch:</p>
          <ContactMeWrapper>
            <ContactMeLink href="mailto:timothyneiljohnson@gmail.com">
              <Icon
                fill={isDarkMode ? colors.white : colors.grayDarkest}
                name="mail-outline"
                size={42}
              />
            </ContactMeLink>
            <ContactMeLink
              href="linkedin.com/in/timothyneiljohnson"
              target="_blank"
            >
              <Icon
                fill={isDarkMode ? colors.white : '#306EA8'}
                name="logo-linkedin"
                size={33}
              />
            </ContactMeLink>
          </ContactMeWrapper>
        </ProfileDescription>
      </ProfileWrapper>
    </MapBackground>
  );
};

ProfilePulldownContent.displayName = 'ProfilePulldownContent';
