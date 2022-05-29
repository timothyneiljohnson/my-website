import { MutableRefObject, ReactElement, useEffect, useRef } from 'react';
import { FilterableItemWrapper } from './styles';

interface FilterableItemProps {
  children: ReactElement;
  foreshadowMap: any;
  startingPositionsMap: any;
  isAnimating: boolean;
  isFilteredOut: boolean;
  wasFilteredOut: boolean;
  isForeshadowItem?: boolean;
  itemId: number;
  listBaseRef: MutableRefObject<HTMLDivElement | null>;
  onForeshadowingCallback: (props: {
    itemId: number | string;
    foreshadowWidth: number;
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
  startingPositionsMap,
  listBaseRef,
  onForeshadowingCallback,
}: FilterableItemProps) => {
  const currentItemRef = useRef(null);
  const itemForeshadowData = foreshadowMap[itemId] ?? {};
  const itemStartingPositionData = startingPositionsMap[itemId] ?? {};

  const originPositionX = listBaseRef.current?.getBoundingClientRect().left;
  const originPositionY = listBaseRef.current?.getBoundingClientRect().top;
  const itemPositionX = currentItemRef.current?.getBoundingClientRect().left;
  const itemPositionY = currentItemRef.current?.getBoundingClientRect().top;
  const listBaseHeight = listBaseRef.current?.clientHeight;
  const itemWidth = currentItemRef.current?.clientWidth;

  const { offsetLeft, offsetTop, clientWidth } = itemStartingPositionData;
  const animationStartX = offsetLeft || originPositionX;
  const animationStartY = offsetTop || originPositionY;
  const animationStartWidth = clientWidth || itemForeshadowData.foreshadowWidth;

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
        foreshadowWidth: itemWidth,
        foreshadowPositionX: itemPositionX,
        foreshadowPositionY: !Number.isNaN(foreshadowPositionY)
          ? foreshadowPositionY
          : undefined,
      });
    }
  }, [
    foreshadowPositionY,
    isAnimating,
    isForeshadowItem,
    itemId,
    itemPositionX,
    itemPositionY,
    itemWidth,
    onForeshadowingCallback,
  ]);

  return (
    <FilterableItemWrapper
      isAnimating={isAnimating}
      isFilteredOut={isFilteredOut}
      isForeshadowItem={isForeshadowItem}
      itemWidth={itemWidth}
      ref={currentItemRef}
      style={{
        '--animation-distance-x': animationDistanceX,
        '--animation-distance-y': animationDistanceY,
        '--animation-start-width': animationStartWidth,
        '--animation-start-x': animationStartX,
        '--animation-start-y': animationStartY,
      }}
      wasFilteredOut={wasFilteredOut}
    >
      {children}
    </FilterableItemWrapper>
  );
};

FilterableItem.displayName = 'FilterableItem';
