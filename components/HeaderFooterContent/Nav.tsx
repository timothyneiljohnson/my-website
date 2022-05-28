import { forwardRef, useCallback } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../common-components/Button';
import { Icon } from '../../common-components/Icon';
import { MainNavList, MainNavListItem } from './styles';
import { colors, gradients } from '../../common-components/design-tokens';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { useMediaQueries } from '../media-queries-context';

interface NavProps {
  handleOpenProfileDrawer: () => void;
}

export const Nav = forwardRef<HTMLButtonElement, NavProps>(
  ({ handleOpenProfileDrawer }: NavProps, ref) => {
    const { pathname } = useRouter() || {};
    const isHome = pathname === '/';
    const isBlog = pathname === '/blog' || pathname?.startsWith('/post');
    const { isDarkMode, toggleDarkMode } = useStorageDarkMode();
    const { xsMax, md } = useMediaQueries();
    const navButtonSize = xsMax ? 'sm' : 'md';

    const handleDarkModeToggle = useCallback(() => {
      toggleDarkMode();
    }, [toggleDarkMode]);

    return (
      <MainNavList>
        <MainNavListItem>
          <NextLink href="/" passHref>
            <Button
              gradientEnd={isHome ? gradients.primary.end : null}
              gradientStart={isHome ? gradients.primary.start : null}
              pill
              pointerGradient={isHome && md}
              size={navButtonSize}
              textColor={isHome || isDarkMode ? colors.white : null}
            >
              Work
            </Button>
          </NextLink>
        </MainNavListItem>
        <MainNavListItem>
          <NextLink href="/blog" passHref>
            <Button
              gradientEnd={isBlog ? gradients.primary.end : null}
              gradientStart={isBlog ? gradients.primary.start : null}
              pill
              pointerGradient={isBlog && md}
              size={navButtonSize}
              textColor={isBlog || isDarkMode ? colors.white : null}
            >
              Blog
            </Button>
          </NextLink>
        </MainNavListItem>
        <MainNavListItem>
          <Button
            aria-label="Profile - shows more content"
            onClick={handleOpenProfileDrawer}
            pill
            ref={ref}
            size={navButtonSize}
          >
            Profile
          </Button>
        </MainNavListItem>
        <MainNavListItem>
          <Button onClick={handleDarkModeToggle} pill size={navButtonSize}>
            <span className="h-sr-only">
              {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
            </span>
            {isDarkMode ? (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.grayDarkest}`}
                name="sunny"
                size={20}
              />
            ) : (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.primary}`}
                name="moon"
                size={20}
              />
            )}
          </Button>
        </MainNavListItem>
      </MainNavList>
    );
  }
);

Nav.displayName = 'Nav';
