import NextLink from 'next/link';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { HeaderFooterContent } from '../HeaderFooterContent';
import { FooterBottom, FooterInner, StyledFooter } from './styles';

interface FooterProps {
  className?: any;
  handleOpenProfileDrawer: () => void;
  isFullWidth?: boolean;
}

export const Footer = ({
  className,
  handleOpenProfileDrawer,
  isFullWidth,
}: FooterProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const year = new Date().getFullYear();

  return (
    <StyledFooter className={className} isDarkMode={isDarkMode}>
      <FooterInner isDarkMode={isDarkMode} isFullWidth={isFullWidth}>
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
            : Vercel, React/NextJS, WP API. See my
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
