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
          <Col center={smMax ? true : null} flex md={6} xs={12}>
            <NextLink href="/" passHref>
              <LogoLink>
                <Image
                  height={30}
                  src={
                    isDarkMode ? '/name-logo-darkMode.svg' : '/name-logo.svg'
                  }
                />
              </LogoLink>
            </NextLink>
          </Col>
          <Col center flex md={6} mdEnd xs={12}>
            <Nav handleOpenProfileDrawer={handleOpenProfileDrawer} ref={ref} />
          </Col>
        </Row>
      </Grid>
    );
  }
);
