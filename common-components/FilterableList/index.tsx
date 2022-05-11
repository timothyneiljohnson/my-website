import { ReactElement, useCallback, useRef, useState } from 'react';
import { FilterableItem } from './FilterableItem';
import {
  FilterList,
  FilterListWrapper,
  FilterListItemStyled,
  HiddenForeshadow,
} from './styles';
import { FilterListItemButton } from './FilterListItemButton';
import { animation } from '../design-tokens';
import { PlainGrid } from '../PlainGrid';

interface FilterableListProps {
  allCategoryId?: number | string;
  categories: any[];
  children: ReactElement[];
  gap: string;
  itemsWithCategories: any[];
  minWidth?: string;
  noAnimation?: boolean;
}

export const FilterableList = ({
  allCategoryId,
  categories,
  children,
  gap,
  itemsWithCategories,
  minWidth,
  noAnimation,
}: FilterableListProps) => {
  const [filterId, setFilterId] = useState(allCategoryId);
  const [prevFilterId, setPrevFilterId] = useState(allCategoryId);
  const [foreshadowMap, setForeshadowMap] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const listBaseRef = useRef(null);

  const onForeshadowingCallback = useCallback(
    ({ itemId, foreshadowPositionX, foreshadowPositionY }) => {
      setForeshadowMap((currentValue) => ({
        ...currentValue,
        [itemId]: {
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
      setPrevFilterId(filterId);
      setFilterId(id);
      setIsAnimating(true);
      // TODO: Key off of animation end instead
      setTimeout(
        () => {
          setIsAnimating(false);
          setForeshadowMap({});
        },
        noAnimation ? 0 : animation.durations.slow * 1.3
      );
    },
    [filterId, noAnimation]
  );

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
      <div ref={listBaseRef}>{listItems}</div>
      {isAnimating && (
        <HiddenForeshadow>{foreshadowListItems}</HiddenForeshadow>
      )}
    </>
  );
};

FilterableList.displayName = 'FilterableList';
