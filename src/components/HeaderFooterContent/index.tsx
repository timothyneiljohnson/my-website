import NextLink from 'next/link';
import { forwardRef } from 'react';
import { Grid } from '../../../common-components/Grid';
import { Row } from '../../../common-components/Row';
import { Col } from '../../../common-components/Col';
import { useMediaQueries } from '../../../common-components/media-queries-context';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { Nav } from './Nav';
import { LogoLink } from './styles';

interface HeaderFooterContentProps {
  handleOpenProfileDrawer: () => void;
}

export const HeaderFooterContent = forwardRef<
  HTMLButtonElement,
  HeaderFooterContentProps
>(({ handleOpenProfileDrawer }: HeaderFooterContentProps, ref) => {
  const { smMax } = useMediaQueries();
  const { isDarkMode } = useStorageDarkMode();

  return (
    <Grid>
      <Row>
        <Col
          center={smMax ? true : null}
          flex
          md={6}
          middle
          start={!smMax ? true : null}
          xs={12}
        >
          <NextLink href="/" legacyBehavior passHref>
            <LogoLink isDarkMode={isDarkMode}>
              Timothy
              {' '}
              <span>Neil</span>
              {' '}
              Johnson
            </LogoLink>
          </NextLink>
        </Col>
        <Col center flex md={6} mdEnd middle xs={12}>
          <Nav handleOpenProfileDrawer={handleOpenProfileDrawer} ref={ref} />
        </Col>
      </Row>
    </Grid>
  );
});
