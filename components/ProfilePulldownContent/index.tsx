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
            level={4}
            color={
              isDarkMode ? colors.grayLightest : colors.grayDarker
            }
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
                size={42}
                name="mail-outline"
                fill={
                  isDarkMode ? colors.white : colors.grayDarkest
                }
              />
            </ContactMeLink>
            <ContactMeLink href="linkedin.com/in/timothyneiljohnson" target="_blank">
              <Icon
                size={33}
                name="logo-linkedin"
                fill={isDarkMode ? colors.white : '#306EA8'}
              />
            </ContactMeLink>
          </ContactMeWrapper>
        </ProfileDescription>
      </ProfileWrapper>
    </MapBackground>
  );
};

ProfilePulldownContent.displayName = 'ProfilePulldownContent';
