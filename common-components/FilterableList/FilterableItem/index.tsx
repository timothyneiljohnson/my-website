import { MutableRefObject, ReactElement, useEffect, useRef } from 'react';
import { FilterableItemWrapper } from './styles';

interface FilterableItemProps {
  children: ReactElement;
  foreshadowMap: any;
  isAnimating: boolean;
  isFilteredOut: boolean;
  wasFilteredOut: boolean;
  isForeshadowItem?: boolean;
  itemId: number;
  listBaseRef: MutableRefObject<HTMLDivElement | null>;
  onForeshadowingCallback: (props: {
    itemId: number | string;
    foreshadowPositionX: number;
    foreshadowPositionY: number;
  }) => void;
}

export const FilterableItem = ({
  children,
  isAnimating,
  isFilteredOut,
  wasFilteredOut,
  isForeshadowItem,
  itemId,
  foreshadowMap,
  listBaseRef,
  onForeshadowingCallback,
}: FilterableItemProps) => {
  const currentItemRef = useRef(null);
  const itemForeshadowData = foreshadowMap[itemId] ?? {};

  const originPositionX = listBaseRef.current?.getBoundingClientRect().left;
  const originPositionY = listBaseRef.current?.getBoundingClientRect().top;
  const itemPositionX = currentItemRef.current?.getBoundingClientRect().left;
  const itemPositionY = currentItemRef.current?.getBoundingClientRect().top;
  const listBaseHeight = listBaseRef.current?.clientHeight;
  const itemWidth = currentItemRef.current?.clientWidth;

  let animationDistanceX = isForeshadowItem
    ? 0
    : itemPositionX - (itemForeshadowData.foreshadowPositionX || itemPositionX);
  let animationDistanceY = isForeshadowItem
    ? 0
    : itemPositionY - (itemForeshadowData.foreshadowPositionY || itemPositionY);

  if (!isForeshadowItem && isFilteredOut) {
    animationDistanceX = itemPositionX - originPositionX;
    animationDistanceY = itemPositionY - originPositionY;
  }
  const foreshadowPositionY = itemPositionY - listBaseHeight;

  useEffect(() => {
    if (isAnimating && isForeshadowItem) {
      onForeshadowingCallback({
        itemId,
        foreshadowPositionX: itemPositionX,
        foreshadowPositionY: !Number.isNaN(foreshadowPositionY)
          ? foreshadowPositionY
          : undefined,
      });
    }
  }, [
    foreshadowPositionY,
    isForeshadowItem,
    itemId,
    itemPositionX,
    itemPositionY,
    isAnimating,
    onForeshadowingCallback,
  ]);

  return (
    <FilterableItemWrapper
      animationDistanceX={animationDistanceX}
      animationDistanceY={animationDistanceY}
      isAnimating={isAnimating}
      isFilteredOut={isFilteredOut}
      isForeshadowItem={isForeshadowItem}
      itemWidth={itemWidth}
      ref={currentItemRef}
      wasFilteredOut={wasFilteredOut}
    >
      {children}
    </FilterableItemWrapper>
  );
};

FilterableItem.displayName = 'FilterableItem';
