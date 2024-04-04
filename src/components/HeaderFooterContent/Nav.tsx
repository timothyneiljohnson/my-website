import { forwardRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../../../common-components/Button';
import { Icon } from '../../../common-components/Icon';
import { MainNavList, MainNavListItem } from './styles';
import { colors, gradients } from '../../../common-components/design-tokens';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { useMediaQueries } from '../../../common-components/media-queries-context';
import { StandardSizes } from '../../../common-components/types';

interface NavProps {
  handleOpenProfileDrawer: () => void;
  size: StandardSizes;
}

export const Nav = forwardRef<HTMLButtonElement, NavProps>(
  ({ handleOpenProfileDrawer, size }: NavProps, ref) => {
    const pathname = usePathname() || '';
    const isHome = pathname === '/';
    const isJournal =
      pathname === '/journal' || pathname?.startsWith('/article');
    const { isDarkMode, toggleDarkMode } = useStorageDarkMode();
    const { md } = useMediaQueries();

    const handleDarkModeToggle = useCallback(() => {
      toggleDarkMode();
    }, [toggleDarkMode]);

    const buttonBGColor = isDarkMode ? colors.grayLight : colors.white;
    const buttonBorderColor = isDarkMode
      ? colors.grayLight
      : colors.grayLighter;
    const buttonGradientStart = isDarkMode
      ? gradients.primary.start
      : gradients.secondary.end;
    const buttonGradientEnd = isDarkMode
      ? gradients.primary.end
      : gradients.secondary.start;

    return (
      <MainNavList size={size}>
        <MainNavListItem>
          <Button
            aria-current={isHome ? 'page' : null}
            bgColor={`${isHome ? null : buttonBGColor}`}
            borderColor={`${isHome ? null : buttonBorderColor}`}
            gradientEnd={isHome ? buttonGradientEnd : null}
            gradientStart={isHome ? buttonGradientStart : null}
            href="/"
            pill
            pointerGradient={isHome && md}
            size={size}
            textColor={isHome || isDarkMode ? colors.white : null}
          >
            Highlights
          </Button>
        </MainNavListItem>
        <MainNavListItem>
          <Button
            aria-current={isJournal ? 'page' : null}
            bgColor={`${isJournal ? null : buttonBGColor}`}
            borderColor={`${isJournal ? null : buttonBorderColor}`}
            gradientEnd={isJournal ? buttonGradientEnd : null}
            gradientStart={isJournal ? buttonGradientStart : null}
            href="/journal"
            pill
            pointerGradient={isJournal && md}
            size={size}
            textColor={isJournal || isDarkMode ? colors.white : null}
          >
            Journal
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
            size={size}
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
            size={size}
          >
            <span className="h-sr-only">
              {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
            </span>
            {isDarkMode ? (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.grayDarkest}`}
                name="sunny"
                size={size === 'sm' ? 12.5 : 19}
              />
            ) : (
              <Icon
                fill={`${isDarkMode ? colors.white : colors.primary}`}
                name="moon"
                size={size === 'sm' ? 12.5 : 19}
              />
            )}
          </Button>
        </MainNavListItem>
      </MainNavList>
    );
  }
);

Nav.displayName = 'Nav';
