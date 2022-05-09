import NextLink from 'next/link';
import { forwardRef } from 'react';
import { Grid, Row, Col, Image } from '../../common-components';
import { useMediaQueries } from '../media-queries-context';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { Nav } from './Nav';
import { LogoLink } from './styles';

interface NavProps {
  handleOpenProfileDrawer: () => void;
}

export const HeaderFooterContent = forwardRef<HTMLButtonElement, NavProps>(
  ({ handleOpenProfileDrawer }: NavProps, ref) => {
    const { smMax } = useMediaQueries();
    const { isDarkMode } = useStorageDarkMode();

    return (
      <Grid>
        <Row>
          <Col md={6} xs={12} center={smMax ? true : null} flex>
            <NextLink href="/" passHref>
              <LogoLink>
                <Image
                  src={isDarkMode ? '/name-logo-darkMode.svg' : '/name-logo.svg'}
                  height={30}
                />
              </LogoLink>
            </NextLink>
          </Col>
          <Col md={6} xs={12} mdEnd center flex>
            <Nav
              handleOpenProfileDrawer={handleOpenProfileDrawer}
              ref={ref}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
);
