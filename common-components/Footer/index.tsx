import NextLink from 'next/link';
import { HeaderFooterContent } from '../../components/HeaderFooterContent';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';
import { FooterInner, StyledFooter } from './styles';

interface FooterProps {
  handleOpenProfileDrawer: () => void;
}

export const Footer = ({ handleOpenProfileDrawer }: FooterProps) => {
  const { isDarkMode } = useStorageDarkMode();

  return (
    <StyledFooter isDarkMode={isDarkMode}>
      <FooterInner>
        <HeaderFooterContent
          handleOpenProfileDrawer={handleOpenProfileDrawer}
        />
        <p>
          Copyright © 2022
          {' '}
          <NextLink href="/" passHref>
            <a>Timothy Neil Johnson</a>
          </NextLink>
        </p>
      </FooterInner>
    </StyledFooter>
  );
};

Footer.displayName = 'Footer';
