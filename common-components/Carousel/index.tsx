import {
  ReactElement,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { colors } from '../design-tokens';
import {
  StyledCarousel,
  CarouselRow,
  CarouselNavButtonLeft,
  CarouselNavButtonRight,
  ArrowIconWrapper,
  StyledIcon,
} from './styles';
import { useMediaQueries } from '../media-queries-context';
import {
  findClosestNumberLessThan,
  findClosestNumberMoreThan,
} from '../helpers';

interface CarouselProps {
  children: ReactElement[];
  className?: string;
  height?: number;
}
export const Carousel = ({ children, className, height }: CarouselProps) => {
  const carouselRowRef = useRef(null);
  const [translationX, setTranslationX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [screenXBeforeDrag, setScreenXBeforeDrag] = useState(0);
  const [translationXBeforeDrag, setTranslationXBeforeDrag] = useState(null);
  const [carouselFullWidth, setCarouselFullWidth] = useState(null);
  const [carouselVisibleWidth, setCarouselVisibleWidth] = useState(null);
  const [mapOfChildPositions, setMapOfChildPositions] = useState([]);
  const { smMax } = useMediaQueries();

  // CAROUSEL PREVIOUS
  const handleCarouselPrevious = useCallback(() => {
    const currentRef = carouselRowRef?.current;
    if (currentRef) {
      setTranslationX(Math.min(translationX + carouselVisibleWidth, 0));

      const intendedDestinationX = Math.min(
        translationX + carouselVisibleWidth,
        0
      );
      const closestNumber = findClosestNumberMoreThan(
        mapOfChildPositions.map((child) => child.offsetLeft),
        Math.abs(intendedDestinationX)
      );
      const closestIndex = mapOfChildPositions.findIndex(
        (child) => child.offsetLeft === closestNumber
      );

      setTranslationX(Math.min(-1 * closestNumber, 0));
      currentRef.children[Math.max(closestIndex, 0)].focus();
    }
  }, [carouselRowRef, carouselVisibleWidth, mapOfChildPositions, translationX]);

  // CAROUSEL NEXT
  const handleCarouselNext = useCallback(() => {
    const currentRef = carouselRowRef?.current;
    if (currentRef) {
      const intendedDestinationX = translationX - carouselVisibleWidth;

      const closestNumber = findClosestNumberLessThan(
        mapOfChildPositions.map((child) => child.offsetLeft),
        Math.abs(intendedDestinationX)
      );
      const closestIndex = mapOfChildPositions.findIndex(
        (child) => child.offsetLeft === closestNumber
      );

      setTranslationX(
        Math.max(
          -1 * closestNumber,
          -1 * carouselFullWidth + carouselVisibleWidth
        )
      );
      currentRef.children[closestIndex].focus();
    }
  }, [
    carouselFullWidth,
    carouselRowRef,
    carouselVisibleWidth,
    mapOfChildPositions,
    translationX,
  ]);

  // MONITOR CAROUSEL WIDTH
  const handleMonitorCarouselWidth = useCallback(() => {
    const currentRef = carouselRowRef?.current;

    const timeOutFunctionId = setTimeout(() => {
      setCarouselFullWidth(currentRef.scrollWidth);
      setCarouselVisibleWidth(currentRef?.clientWidth);
    }, 500);

    return () => {
      clearTimeout(timeOutFunctionId);
    };
  }, [carouselRowRef]);

  useEffect(() => {
    const currentRef = carouselRowRef?.current;
    if (currentRef) {
      handleMonitorCarouselWidth();
      const childrenLength = currentRef.children?.length || 0;
      setMapOfChildPositions(
        [...Array(childrenLength)].map((_, i) => ({
          offsetLeft: currentRef.children[i].offsetLeft,
          offsetRight:
            currentRef.children[i].offsetLeft +
            currentRef.children[i].clientWidth,
        }))
      );
    }
  }, [carouselRowRef, handleMonitorCarouselWidth]);

  useEffect(() => {
    handleMonitorCarouselWidth();
    window.addEventListener('resize', handleMonitorCarouselWidth);

    return () => {
      window.removeEventListener('resize', handleMonitorCarouselWidth);
    };
  }, [handleMonitorCarouselWidth]);

  // DRAGGING LOGIC
  const handleDrag = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      const { screenX } = event.touches ? event.touches[0] : event;
      const screenXChange = screenX - screenXBeforeDrag;

      setIsDragging(true);
      setTranslationX(
        Math.max(
          Math.min(translationXBeforeDrag + screenXChange, 0),
          -1 * carouselFullWidth + carouselVisibleWidth
        )
      );
    },
    [
      carouselFullWidth,
      carouselVisibleWidth,
      screenXBeforeDrag,
      translationXBeforeDrag,
    ]
  );

  const handleDragStart = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      const { screenX } = event.touches ? event.touches[0] : event;

      setIsMouseDown(true);
      setScreenXBeforeDrag(screenX);
      setTranslationXBeforeDrag(translationX);
    },
    [translationX]
  );

  const handleDragEnd = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsMouseDown(false);
      setIsDragging(false);

      return () => {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', handleDragEnd);
      };
    },
    [handleDrag]
  );

  useEffect(() => {
    if (isMouseDown) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [handleDrag, handleDragEnd, isMouseDown]);

  return (
    <StyledCarousel className={className} height={height}>
      {!smMax && translationX < 0 && (
        <CarouselNavButtonLeft onClick={handleCarouselPrevious}>
          <ArrowIconWrapper>
            <StyledIcon
              fill={colors.grayDarker}
              name="chevron-back"
              size={24}
            />
          </ArrowIconWrapper>
        </CarouselNavButtonLeft>
      )}
      <CarouselRow
        data-dragging={isDragging}
        isDragging={isDragging}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDrag}
        onTouchStart={handleDragStart}
        ref={carouselRowRef}
        style={{ '--translate-carousel-row-x': translationX }}
      >
        {children.map((child, i) =>
          cloneElement(child, {
            tabIndex:
              mapOfChildPositions[i]?.offsetRight >
                Math.abs(translationX) + carouselVisibleWidth ||
              mapOfChildPositions[i]?.offsetLeft < Math.abs(translationX)
                ? -1
                : 0,
          })
        )}
      </CarouselRow>
      {!smMax && translationX > -1 * carouselFullWidth + carouselVisibleWidth && (
        <CarouselNavButtonRight onClick={handleCarouselNext}>
          <ArrowIconWrapper>
            <StyledIcon
              fill={colors.grayDarker}
              name="chevron-forward"
              size={24}
            />
          </ArrowIconWrapper>
        </CarouselNavButtonRight>
      )}
    </StyledCarousel>
  );
};

Carousel.displayName = 'Carousel';
