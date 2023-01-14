import { useCallback, useEffect, useRef, useState } from 'react';
import { animation, colors } from '../design-tokens';
import { Heading } from '../Heading';
import { PlainGrid } from '../PlainGrid';
import { NavMenuItem } from './NavMenuItem';
import {
  CurrentNavArrow,
  CurrentNavArrowInner,
  NavMenuDropdownContainer,
  NavMenuDropdownTransition,
  NavMenuAndTriggerWrapper,
  NavMenuTriggerButton,
  StyledNavMenu,
  StyledSubMenuItem,
} from './styles';

interface NavMenuProps {
  align?: 'left' | 'right' | 'center';
  bgColor?: string;
  gradientEnd?: string;
  gradientStart?: string;
  className?: string;
  content: any;
  navColor?: string;
}
export const NavMenu = ({
  align = 'center',
  bgColor = colors.white,
  className,
  content,
  gradientEnd,
  gradientStart,
  navColor = colors.grayDarker,
}: NavMenuProps) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isNavMenuDisplayed, setIsNavMenuDisplayed] = useState(false);
  const [currentNavIndex, setCurrentNavIndex] = useState(null);
  const [navMenuDestinationY, setNavMenuDestinationY] = useState(0);
  const [arrowDestinationX, setArrowDestinationX] = useState(null);
  const [isNavMenuOpenRequest, setIsNavMenuOpenRequest] =
    useState(null);
  const wasNavMenuOpenRequest = useRef(false);
  const closeTimeout = useRef(null);
  const noLongerDisplayedTimeout = useRef(null);
  const currentNavRef = useRef(null);

  const handleOpenNavMenu = useCallback((index: number) => {
    setCurrentNavIndex(index);
    setIsNavMenuOpenRequest(true);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setIsNavMenuOpenRequest(false);
  }, []);

  // When request to close or open is made
  useEffect(() => {
    const currentCloseTimeout = closeTimeout.current;
    const currentNoLongerDisplayedTimeout = noLongerDisplayedTimeout.current;

    if (isNavMenuOpenRequest) {
      // If open requested, clear timeouts
      if (closeTimeout.current !== null) {
        clearTimeout(closeTimeout.current);
      }
      if (noLongerDisplayedTimeout.current !== null) {
        clearTimeout(noLongerDisplayedTimeout.current);
      }
      setIsNavMenuOpen(true);
      wasNavMenuOpenRequest.current = true;
    } else if (isNavMenuOpenRequest === false) {
      // If close is requested, create closeTimeout
      closeTimeout.current = setTimeout(() => {
        setIsNavMenuOpen(false);
        wasNavMenuOpenRequest.current = false;

        noLongerDisplayedTimeout.current = setTimeout(() => {
          setIsNavMenuDisplayed(false);
        }, 300);
      }, 300);
    }

    // Clean up timeout
    return () => {
      if (currentCloseTimeout !== null) {
        clearTimeout(currentCloseTimeout);
      }
      if (currentNoLongerDisplayedTimeout !== null) {
        clearTimeout(currentNoLongerDisplayedTimeout);
      }
    };
  }, [isNavMenuOpenRequest]);

  // Whenever open, set to displayed
  useEffect(() => {
    if (isNavMenuOpen) {
      setIsNavMenuDisplayed(true);
    }
  }, [isNavMenuOpen]);

  // Position nav dropdown and arrow with nav ref
  useEffect(() => {
    if (currentNavRef?.current && isNavMenuDisplayed) {
      const { height, left, top, width } =
        currentNavRef.current.getBoundingClientRect();
      setNavMenuDestinationY(top + height + 16);
      setArrowDestinationX(left + width / 2 - 7.5);
    }
  }, [currentNavIndex, isNavMenuDisplayed, currentNavRef]);

  const columnCount = Math.ceil(
    content[currentNavIndex]?.subItems
      ? content[currentNavIndex].subItems.length / 3
      : 1
  );

  return (
    <StyledNavMenu
      bgColor={bgColor}
      className={className}
      gradientEnd={gradientEnd}
      gradientStart={gradientStart}
    >
      {content.map((navItem, i: number) => (
        <NavMenuAndTriggerWrapper key={i}>
          <NavMenuTriggerButton
            navColor={navColor}
            onClick={() =>
              navItem?.subItems?.length > 0 ? handleOpenNavMenu(i) : null
            }
            onMouseEnter={
              navItem?.subItems?.length > 0 ? () => handleOpenNavMenu(i) : null
            }
            onMouseLeave={
              navItem?.subItems?.length > 0 ? handleCloseNavMenu : null
            }
            ref={currentNavIndex === i ? currentNavRef : null}
          >
            <NavMenuItem
              hasSubItems={navItem?.subItems?.length > 0}
              isOpen={isNavMenuOpen && currentNavIndex === i}
              navColor={navColor}
              title={navItem?.title}
            />
          </NavMenuTriggerButton>
        </NavMenuAndTriggerWrapper>
      ))}
      <NavMenuDropdownContainer
        style={{
          '--destination-y': navMenuDestinationY,
          display: isNavMenuDisplayed ? undefined : 'none',
        }}
      >
        {currentNavRef.current && arrowDestinationX && (
          <CurrentNavArrow
            distance={10}
            duration={animation.durations.faster}
            in={isNavMenuOpen}
            style={{
              '--arrow-destination-x': arrowDestinationX,
            }}
            type="fade"
          >
            <CurrentNavArrowInner bgColor={bgColor} />
          </CurrentNavArrow>
        )}
        <NavMenuDropdownTransition
          bgColor={bgColor}
          className={className}
          distance={10000}
          duration={animation.durations.faster}
          in={isNavMenuOpen}
          onMouseEnter={() =>
            content[currentNavIndex]?.subItems?.length > 0
              ? handleOpenNavMenu(currentNavIndex)
              : null
          }
          onMouseLeave={
            content[currentNavIndex]?.subItems?.length > 0
              ? handleCloseNavMenu
              : null
          }
          type="scaleFade"
        >
          <PlainGrid columns={columnCount}>
            {content[currentNavIndex]?.subItems?.map((subItem, i: number) => (
              <StyledSubMenuItem
                bgColor={bgColor}
                href={subItem.url ?? null}
                key={i}
                noUnderline
              >
                <Heading level={2} size={4}>
                  {subItem.title}
                </Heading>
                <p>{subItem.description}</p>
              </StyledSubMenuItem>
            ))}
          </PlainGrid>
        </NavMenuDropdownTransition>
      </NavMenuDropdownContainer>
    </StyledNavMenu>
  );
};

NavMenu.displayName = 'NavMenu';
