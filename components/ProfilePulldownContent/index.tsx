import { FC, useEffect, useRef } from 'react';
import { Button } from '../../common-components/Button';
import { Col } from '../../common-components/Col';
import { Grid } from '../../common-components/Grid';
import { Heading } from '../../common-components/Heading';
import { Row } from '../../common-components/Row';
import { colors } from '../../common-components/design-tokens';
import { useMediaQueries } from '../media-queries-context';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import {
  ContactMeWrapper,
  ContactMeLink,
  MyNameIs,
  ProfileDescription,
  BioCallToActionWrapper,
  ProfilePicture,
  ContactMeIcon,
  StyledHeadingContainer,
} from './styles';

export const ProfilePulldownContent: FC = () => {
  const { isDarkMode } = useStorageDarkMode();
  const { smMax } = useMediaQueries();
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current.focus();
  }, []);

  return (
    <ProfileDescription isDarkMode={isDarkMode}>
      <Grid>
        <Row noWrap>
          <Col>
            <ContactMeWrapper>
              <ContactMeLink
                href="https://github.com/timothyneiljohnson"
                target="_blank"
              >
                <ContactMeIcon
                  fill={isDarkMode ? colors.white : colors.grayDarker}
                  name="logo-github"
                  size={24}
                />
              </ContactMeLink>
              <ContactMeLink href="mailto:timothyneiljohnson@gmail.com">
                <ContactMeIcon
                  fill={isDarkMode ? colors.white : colors.grayDarker}
                  name={isDarkMode ? 'mail' : 'mail-outline'}
                  size={24}
                />
              </ContactMeLink>
              <ContactMeLink
                href="https://linkedin.com/in/timothyneiljohnson"
                target="_blank"
              >
                <ContactMeIcon
                  fill={isDarkMode ? colors.white : colors.grayDarker}
                  name="logo-linkedin"
                  size={24}
                />
              </ContactMeLink>
            </ContactMeWrapper>
          </Col>
          <Col shrink>
            <StyledHeadingContainer
              aria-label="Hi. My name is Tim Johnson, Software Engineer."
              aria-level={3}
              ref={headingRef}
              role="heading"
              tabIndex={-1}
            >
              <MyNameIs>Hi, my name is</MyNameIs>
              <Heading
                color={isDarkMode ? colors.grayLightest : colors.grayDarker}
                level={smMax ? 2 : 1}
              >
                Tim Johnson.
                <br />
                Software Engineer 👨‍💻
              </Heading>
            </StyledHeadingContainer>
            <p>
              I'm a driven, experienced developer/designer based in Minneapolis.
            </p>
            <p>Lead Software Engineer at Target.</p>
            <BioCallToActionWrapper>
              <Button href="mailto:timothyneiljohnson@gmail.com">
                Get In Touch
              </Button>
              <Button href="#" variant="primary">
                My Resume
              </Button>
            </BioCallToActionWrapper>
          </Col>
          <Col end flex grow smHiddenDown>
            <ProfilePicture
              height={222}
              layout="fixed"
              noFadeIn
              src="/photo.png"
              width={184}
            />
          </Col>
        </Row>
      </Grid>
    </ProfileDescription>
  );
};

ProfilePulldownContent.displayName = 'ProfilePulldownContent';
