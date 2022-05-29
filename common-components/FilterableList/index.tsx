import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { FilterableItem } from './FilterableItem';
import {
  FilterList,
  FilterListWrapper,
  FilterListItemStyled,
  HiddenForeshadow,
  FilterableItemsContainer,
} from './styles';
import { FilterListItemButton } from './FilterListItemButton';
import { PlainGrid } from '../PlainGrid';

interface FilterableListProps {
  allCategoryId?: number | string;
  categories: any[];
  children: ReactElement[];
  gap: string;
  itemsWithCategories: any[];
  minWidth?: string;
}

export const FilterableList = ({
  allCategoryId,
  categories,
  children,
  gap,
  itemsWithCategories,
  minWidth,
}: FilterableListProps) => {
  const [filterId, setFilterId] = useState(allCategoryId);
  const [prevFilterId, setPrevFilterId] = useState(allCategoryId);
  const [foreshadowMap, setForeshadowMap] = useState({});
  const [startingPositionsMap, setStartingPositionsMap] = useState({});
  const [startingContainerHeight, setStartingContainerHeight] = useState(null);
  const [foreshadowContainerHeight, setForeshadowContainerHeight] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const listBaseRef = useRef(null);
  const foreshadowRef = useRef(null);

  const onForeshadowingCallback = useCallback(
    ({ itemId, foreshadowWidth, foreshadowPositionX, foreshadowPositionY }) => {
      setForeshadowMap((currentValue) => ({
        ...currentValue,
        [itemId]: {
          foreshadowWidth,
          foreshadowPositionX,
          foreshadowPositionY,
        },
      }));
    },
    []
  );

  const allCategories = [
    {
      id: allCategoryId,
      name: 'Everything',
    },
    ...categories,
  ];

  const onFilterCallback = useCallback(
    (id) => {
      if (!isAnimating) {
        // Create starting positions map
        const startingPositionsValue = {};
        const nodes = listBaseRef.current?.children[0]?.childNodes || [];
        for (let i = 0, n = nodes.length; i < n; i += 1) {
          const { clientWidth, offsetLeft, offsetTop } = nodes[i];
          startingPositionsValue[i] = {
            clientWidth,
            offsetLeft,
            offsetTop,
          };
        }
        setStartingPositionsMap(startingPositionsValue);

        // Set starting container height
        setStartingContainerHeight(listBaseRef.current?.clientHeight);

        setPrevFilterId(filterId);
        setFilterId(id);
        setIsAnimating(true);
      }
    },
    [filterId, isAnimating]
  );

  const onAnimationEnd = useCallback(() => {
    setTimeout(() => {
      setIsAnimating(false);
      setForeshadowMap({});
      setStartingPositionsMap({});
      setForeshadowContainerHeight(null);
      setStartingContainerHeight(null);
    }, 200);
  }, []);

  useEffect(() => {
    // Wait until Foreshadow items have updated
    if (isAnimating) {
      setForeshadowContainerHeight(foreshadowRef.current?.clientHeight);
    }
  }, [isAnimating]);

  const renderListItems = (isForeshadowItem: boolean) => (
    <PlainGrid gap={gap} min={minWidth}>
      {children?.length > 0 &&
        children.map((child, i) => (
          <FilterableItem
            foreshadowMap={foreshadowMap}
            isAnimating={isAnimating}
            isFilteredOut={
              !itemsWithCategories[i].categories.includes(filterId)
            }
            isForeshadowItem={isForeshadowItem}
            itemId={i}
            key={i}
            listBaseRef={listBaseRef}
            onForeshadowingCallback={onForeshadowingCallback}
            startingPositionsMap={startingPositionsMap}
            wasFilteredOut={
              !itemsWithCategories[i].categories.includes(prevFilterId)
            }
          >
            {child}
          </FilterableItem>
        ))}
    </PlainGrid>
  );

  const listItems = renderListItems(false);
  const foreshadowListItems = renderListItems(true);

  return (
    <>
      {allCategories && (
        <FilterListWrapper>
          <FilterList>
            {allCategories.map((category, id) => (
              <FilterListItemStyled key={id}>
                <FilterListItemButton
                  categoryId={category.id}
                  isSelected={filterId === category.id}
                  onFilterCallback={onFilterCallback}
                >
                  {category.name}
                </FilterListItemButton>
              </FilterListItemStyled>
            ))}
          </FilterList>
        </FilterListWrapper>
      )}
      <FilterableItemsContainer
        endingHeight={foreshadowContainerHeight}
        isAnimating={isAnimating}
        onAnimationEnd={onAnimationEnd}
        ref={listBaseRef}
        startingHeight={startingContainerHeight} 
      >
        {listItems}
      </FilterableItemsContainer>
      <HiddenForeshadow>
        <div ref={foreshadowRef}>{foreshadowListItems}</div>
      </HiddenForeshadow>
    </>
  );
};

FilterableList.displayName = 'FilterableList';
