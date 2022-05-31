import { useCallback, useEffect, useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Col } from '../../../common-components/Col';
import { Grid } from '../../../common-components/Grid';
import { Row } from '../../../common-components/Row';
import { colors } from '../../../common-components/design-tokens';
import { AppItem } from './components/AppItem';
import { FolderItem } from './components/FolderItem';
import {
  AppDock,
  AppDockInnerGrid,
  AppGridItem,
  AppOrFolderHeading,
  MicIcon,
  PhoneHomeScreenPage,
  PhoneHomeScreenPageInnerGrid,
  SearchIcon,
  StyledPhoneHome,
  FullscreenFolderFilter,
  FullscreenSearchFilter,
  OpenFolderHeading,
  SearchCancelButton,
  SearchInput,
  SearchView,
  SearchInputWrapper,
  PhoneHomeScreenPagesRow,
} from './styles';
import { pagesMock, dockAppsMockMock } from './__fixtures__';
import { PaginationIndicator } from './components/PaginationIndicator';
import { TopUtilityBar } from './components/TopUtilityBar';

export const PhoneHome = () => {
  const ref = useRef(null);
  const searchRef = useRef(null);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchOpenPercent, setSearchOpenPercent] = useState(0);
  const [pageScrollPosition, setPageScrollPosition] = useState(0);
  const [openFolderName, setOpenFolderName] = useState(null);
  const [forceCloseFolders, setForceCloseFolders] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const numberOfPages = pagesMock.length;

  useEffect(() => {
    setPageWidth(ref.current?.clientWidth);
  }, [ref]);

  const showFullScreenFilterCallback = useCallback(
    (openFolderNameValue: string) => {
      setIsFolderOpen(true);
      setOpenFolderName(openFolderNameValue);
    },
    []
  );

  const handleCloseSearch = useCallback(() => {
    setIsSearchOpen(false);
    setTimeout(() => {
      setSearchOpenPercent(0);
    }, 400);
  }, []);

  const closeFolder = useCallback(() => {
    setIsFolderOpen(false);
    setForceCloseFolders(true);
    // TODO: Replace setTimeout with onanimationend event
    setTimeout(() => {
      setForceCloseFolders(false);
      setOpenFolderName(null);
    }, 550);
  }, []);

  const graduallyShowSearch = useCallback(
    ({ directionY, last, movementY, velocityY }) => {
      setSearchOpenPercent(Math.max(Math.min(movementY / 250, 1), 0));
      setIsSearchOpen(true);
      if (last) {
        if (movementY > 250 / 2 || (velocityY > 0.5 && directionY > 0)) {
          setSearchOpenPercent(1);
          searchRef.current?.focus();
        } else {
          setSearchOpenPercent(0);
        }
      }
      if (searchOpenPercent === 1) searchRef.current?.focus();
    },
    [searchOpenPercent]
  );

  const swipePages = useCallback(
    ({ last, movementX, velocityX }) => {
      setPageScrollPosition(movementX + currentPageIndex * pageWidth * -1);

      if (last) {
        // Drag confirmed to be left or right swipe, update page and scroll position
        if (Math.abs(movementX) > pageWidth / 2 || velocityX > 0.5) {
          const pageChange = movementX > 0 ? -1 : 1;
          // Limit scroll to first and last pages, else handle page change
          if (currentPageIndex === 0 && pageChange === -1) {
            setPageScrollPosition(0);
          } else if (
            currentPageIndex === numberOfPages - 1 &&
            pageChange === 1
          ) {
            setPageScrollPosition(-1 * pageWidth * (numberOfPages - 1));
          } else {
            setCurrentPageIndex(currentPageIndex + pageChange);
            setPageScrollPosition(
              (currentPageIndex + pageChange) * pageWidth * -1
            );
          }
        } else {
          setPageScrollPosition(currentPageIndex * pageWidth * -1);
        }
      }
    },
    [currentPageIndex, numberOfPages, pageWidth]
  );

  const bind: any = useDrag(
    ({
      direction: [, directionY],
      movement: [movementX, movementY],
      velocity: [velocityX, velocityY],
      last,
    }) => {
      if (movementY !== 0) {
        graduallyShowSearch({ directionY, last, movementY, velocityY });
      } else if (movementX !== 0) {
        swipePages({ last, movementX, velocityX });
      }
    },
    {
      threshold: 10,
      axis: 'lock',
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
      enabled: !openFolderName, // Disable search + page swipes while folder is open
    }
  );

  const isFilterShown = Boolean(isFolderOpen || isSearchOpen);

  return (
    <StyledPhoneHome
      {...bind()}
      ref={ref}
      style={{
        '--page-swipe-distance': pageScrollPosition,
        '--number-of-pages': numberOfPages,
        '--search-open-percent': searchOpenPercent,
      }}
    >
      <FullscreenFolderFilter isShown={isFolderOpen} onClick={closeFolder}>
        <OpenFolderHeading isShown={isFilterShown}>
          {openFolderName}
        </OpenFolderHeading>
      </FullscreenFolderFilter>
      <FullscreenSearchFilter
        blurPercent={searchOpenPercent}
        isOpen={isSearchOpen}
      />
      <SearchView isOpen={isSearchOpen} searchOpenPercent={searchOpenPercent}>
        <Grid>
          <Row middle>
            <Col grow>
              <SearchInputWrapper>
                <SearchIcon
                  fill={colors.white}
                  name="search-outline"
                  size={37}
                />
                <SearchInput placeholder="Search" ref={searchRef} type="text" />
                <MicIcon fill={colors.white} name="mic" size={42} />
              </SearchInputWrapper>
            </Col>
            <Col>
              <SearchCancelButton onClick={handleCloseSearch}>
                Cancel
              </SearchCancelButton>
            </Col>
          </Row>
        </Grid>
      </SearchView>
      <TopUtilityBar isSearchOpen={isSearchOpen} />
      <Grid style={{ position: 'relative' }}>
        <PhoneHomeScreenPagesRow
          currentPageIndex={currentPageIndex}
          pageScrollPosition={pageScrollPosition}
          pageWidth={pageWidth}
        >
          {pagesMock.map((page, i) => (
            <PhoneHomeScreenPage key={i}>
              <PhoneHomeScreenPageInnerGrid
                colGap="5%"
                columns={4}
                rowGap="6px"
              >
                {page.map((appOrFolder) => (
                  <AppGridItem key={appOrFolder.name}>
                    {appOrFolder.apps ? (
                      <>
                        <FolderItem
                          folderData={appOrFolder}
                          forceClose={forceCloseFolders}
                          showFullScreenFilterCallback={
                            showFullScreenFilterCallback
                          }
                        />
                        <AppOrFolderHeading>
                          {appOrFolder.name}
                        </AppOrFolderHeading>
                      </>
                    ) : (
                      <>
                        <AppItem appData={appOrFolder} />
                        <AppOrFolderHeading>
                          {appOrFolder.name}
                        </AppOrFolderHeading>
                      </>
                    )}
                  </AppGridItem>
                ))}
              </PhoneHomeScreenPageInnerGrid>
            </PhoneHomeScreenPage>
          ))}
        </PhoneHomeScreenPagesRow>
      </Grid>
      <PaginationIndicator
        currentPageIndex={currentPageIndex}
        numberOfPages={numberOfPages}
      />
      <AppDock>
        <AppDockInnerGrid colGap="5%" columns={4}>
          {dockAppsMockMock.map((app) => (
            <AppGridItem key={app.name}>
              <AppItem appData={app} />
            </AppGridItem>
          ))}
        </AppDockInnerGrid>
      </AppDock>
    </StyledPhoneHome>
  );
};

PhoneHome.displayName = 'PhoneHome';
