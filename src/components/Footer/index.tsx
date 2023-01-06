import NextLink from 'next/link';
import { HeaderFooterContent } from '../HeaderFooterContent';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { FooterInner, StyledFooter } from './styles';

interface FooterProps {
  handleOpenProfileDrawer: () => void;
}

export const Footer = ({ handleOpenProfileDrawer }: FooterProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const year = new Date().getFullYear();

  return (
    <StyledFooter isDarkMode={isDarkMode}>
      <FooterInner isDarkMode={isDarkMode}>
        <HeaderFooterContent
          handleOpenProfileDrawer={handleOpenProfileDrawer}
        />
        <p>
          {`Copyright © ${year} `}
          <NextLink href="/" passHref>
            Timothy Neil Johnson
          </NextLink>
        </p>
      </FooterInner>
    </StyledFooter>
  );
};

Footer.displayName = 'Footer';
