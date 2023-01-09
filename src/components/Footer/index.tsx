import NextLink from 'next/link';
import { HeaderFooterContent } from '../HeaderFooterContent';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { FooterBottom, FooterInner, StyledFooter } from './styles';

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
        <FooterBottom>
          <p>
            {`Copyright © ${year} `}
            <NextLink href="/">Timothy Neil Johnson</NextLink>
          </p>
          <p>
            🛠
            <span className="h-sr-only">Tech stack</span>
            : Vercel, React/NextJS,
            WP API. See my
            {' '}
            <NextLink href="https://storybook.timothyneil.com" target="_blank">
              live Storybook
            </NextLink>
            .
          </p>
        </FooterBottom>
      </FooterInner>
    </StyledFooter>
  );
};

Footer.displayName = 'Footer';
