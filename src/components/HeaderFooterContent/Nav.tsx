import { forwardRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
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
    const pathname = usePathname() || '';
    const isHome = pathname === '/';
    const isBlog = pathname === '/blog' || pathname?.startsWith('/post');
    const { isDarkMode, toggleDarkMode } = useStorageDarkMode();
    const { xsMax, md } = useMediaQueries();
    const navButtonSize = xsMax ? 'sm' : 'md';

    const handleDarkModeToggle = useCallback(() => {
      toggleDarkMode();
    }, [toggleDarkMode]);

    const buttonBGColor = isDarkMode ? colors.grayLight : colors.white;
    const buttonBorderColor = isDarkMode
      ? colors.grayLight
      : colors.grayLighter;

    return (
      <MainNavList>
        <MainNavListItem>
          <Button
            aria-current={isHome ? 'page' : null}
            bgColor={`${isHome ? null : buttonBGColor}`}
            borderColor={`${isHome ? null : buttonBorderColor}`}
            gradientEnd={isHome ? gradients.primary.end : null}
            gradientStart={isHome ? gradients.primary.start : null}
            href="/"
            pill
            pointerGradient={isHome && md}
            size={navButtonSize}
            textColor={isHome || isDarkMode ? colors.white : null}
          >
            Highlights
          </Button>
        </MainNavListItem>
        <MainNavListItem>
          <Button
            aria-current={isBlog ? 'page' : null}
            bgColor={`${isBlog ? null : buttonBGColor}`}
            borderColor={`${isBlog ? null : buttonBorderColor}`}
            gradientEnd={isBlog ? gradients.primary.end : null}
            gradientStart={isBlog ? gradients.primary.start : null}
            href="/blog"
            pill
            pointerGradient={isBlog && md}
            size={navButtonSize}
            textColor={isBlog || isDarkMode ? colors.white : null}
          >
            Blog
          </Button>
        </MainNavListItem>
        <MainNavListItem>
          <Button
            aria-label="Profile - shows more content"
            bgColor={buttonBGColor}
            borderColor={buttonBorderColor}
            onClick={handleOpenProfileDrawer}
            pill
            ref={ref}
            size={navButtonSize}
            textColor={isDarkMode ? colors.white : colors.grayDarker}
          >
            Profile
          </Button>
        </MainNavListItem>
        <MainNavListItem>
          <Button
            bgColor={buttonBGColor}
            borderColor={buttonBorderColor}
            isRound
            onClick={handleDarkModeToggle}
            pill
            size={navButtonSize}
          >
            <span className="h-sr-only">
              {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
            </span>
            {isDarkMode ? (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.grayDarkest}`}
                name="sunny"
                size={xsMax ? 12.5 : 19}
              />
            ) : (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.primary}`}
                name="moon"
                size={xsMax ? 12.5 : 19}
              />
            )}
          </Button>
        </MainNavListItem>
      </MainNavList>
    );
  }
);

Nav.displayName = 'Nav';
