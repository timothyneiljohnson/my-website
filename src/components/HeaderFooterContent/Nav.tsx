import { forwardRef, useCallback } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../../common-components/Button';
import { Icon } from '../../../common-components/Icon';
import { MainNavList, MainNavListItem } from './styles';
import { colors, gradients } from '../../../common-components/design-tokens';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { useMediaQueries } from '../../../common-components/media-queries-context';

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
              aria-current={isHome ? 'page' : null}
              gradientEnd={isHome ? gradients.primary.end : null}
              gradientStart={isHome ? gradients.primary.start : null}
              pill
              pointerGradient={isHome && md}
              size={navButtonSize}
              textColor={isHome || isDarkMode ? colors.white : null}
              variant={isHome ? null : 'default'}
            >
              Work
            </Button>
          </NextLink>
        </MainNavListItem>
        <MainNavListItem>
          <NextLink href="/blog" passHref>
            <Button
              aria-current={isBlog ? 'page' : null}
              gradientEnd={isBlog ? gradients.primary.end : null}
              gradientStart={isBlog ? gradients.primary.start : null}
              pill
              pointerGradient={isBlog && md}
              size={navButtonSize}
              textColor={isBlog || isDarkMode ? colors.white : null}
              variant={isBlog ? null : 'default'}
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
            variant="default"
          >
            Profile
          </Button>
        </MainNavListItem>
        <MainNavListItem>
          <Button
            onClick={handleDarkModeToggle}
            pill
            size={navButtonSize}
            variant="default"
          >
            <span className="h-sr-only">
              {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
            </span>
            {isDarkMode ? (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.grayDarkest}`}
                name="sunny"
                size={xsMax ? 17 : 20}
              />
            ) : (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.primary}`}
                name="moon"
                size={xsMax ? 17 : 20}
              />
            )}
          </Button>
        </MainNavListItem>
      </MainNavList>
    );
  }
);

Nav.displayName = 'Nav';
