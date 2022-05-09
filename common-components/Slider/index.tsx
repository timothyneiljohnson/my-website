import { useCallback, useEffect, useRef, useState } from 'react';
import { colors } from '../design-tokens';
import { StandardSizes } from '../types';
import {
  StyledSliderTrack,
  SliderMarker,
  SliderActive,
  SliderWrapper,
} from './styles';

export const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  hoverProgressColor?: string;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  onChangeStart?: (value: number) => void;
  progressColor?: string;
  trackColor?: string;
  markerColor?: string;
  size?: StandardSizes;
}
export const Slider = ({
  value = 0,
  min = 0,
  max = 10,
  hoverProgressColor,
  onChange,
  onChangeEnd,
  onChangeStart,
  progressColor = '#1f74fb',
  trackColor = '#d6d8dc',
  markerColor = colors.white,
  size = 'md',
}: SliderProps) => {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPercentage, setSliderPercentage] = useState(0);
  const [sliderValue, setSliderValue] = useState(min);
  const [screenXBeforeDrag, setScreenXBeforeDrag] = useState(0);
  const [sliderPercentageBeforeDrag, setSliderPercentageBeforeDrag] =
    useState(0);

  const handleDrag = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      const trackWidth = ref.current?.clientWidth;
      const { screenX } = event.touches ? event.touches[0] : event;
      const screenXChange = screenX - screenXBeforeDrag;
      const percentChange = screenXChange / (trackWidth - sizeMap[size]);
      const newPercent = Math.min(
        Math.max(sliderPercentageBeforeDrag + percentChange, 0),
        1
      );
      const newSliderValue = newPercent * (max - min);

      setSliderPercentage(newPercent);
      setSliderValue(newSliderValue);
      if (onChange) onChange(newSliderValue);
    },
    [
      max,
      min,
      onChange,
      screenXBeforeDrag,
      size,
      sliderPercentageBeforeDrag,
      ref,
    ]
  );

  const handleDragStart = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();

      const { screenX, pageX } = event.touches ? event.touches[0] : event;
      const positionXOnElement = pageX - ref.current.offsetLeft;
      const trackWidth = ref.current.clientWidth;
      const newPercent = Math.min(
        Math.max(
          (positionXOnElement - sizeMap[size] / 2 - sizeMap[size]) /
            (trackWidth - sizeMap[size]),
          0
        ),
        1
      );
      const newSliderValue = newPercent * (max - min);

      setIsDragging(true);
      setScreenXBeforeDrag(screenX);
      setSliderPercentageBeforeDrag(newPercent);
      setSliderPercentage(newPercent);
      setSliderValue(newSliderValue);
      if (onChangeStart) onChangeStart(newSliderValue);
      if (onChange) onChange(newSliderValue);
    },
    [max, min, onChange, onChangeStart, size]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (onChangeEnd) onChangeEnd(sliderValue);
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [handleDrag, onChangeEnd, sliderValue]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [handleDrag, handleDragEnd, isDragging]);

  // Allow control of component
  useEffect(() => {
    setSliderPercentage(value / max);
    setSliderValue(value);
  }, [max, value]);

  // Clean up on unmount
  useEffect(
    () => () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    },
    [handleDrag, handleDragEnd]
  );

  return (
    <SliderWrapper
      hoverProgressColor={hoverProgressColor}
      onMouseDown={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDrag}
      onTouchStart={handleDragStart}
      ref={ref}
      size={size}
      style={{
        '--slider-percentage': sliderPercentage,
      }}
    >
      <StyledSliderTrack ref={ref} trackColor={trackColor}>
        <SliderActive
          hoverProgressColor={hoverProgressColor}
          isDragging={isDragging}
          progressColor={progressColor}
          size={size}
        />
      </StyledSliderTrack>
      <SliderMarker
        markerColor={markerColor}
        onContextMenu={(e) => e.preventDefault()}
        size={size}
      />
      <input type="hidden" value={sliderValue} />
    </SliderWrapper>
  );
};

Slider.displayName = 'Slider';
