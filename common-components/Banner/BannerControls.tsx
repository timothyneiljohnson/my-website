import { useCallback } from 'react';
import { useMediaQueries } from '../media-queries-context';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { colors } from '../design-tokens';
import { Icon } from '../Icon';
import {
  BannerControlsStyled,
  NextControl,
  PreviousControl,
  StyledBannerControl,
} from './styles';

interface BannerControlsProps {
  currentIndex: number;
  length: number;
  onSlideChangeCallback: (selectedIndex: number) => void;
}

export const BannerControls = ({
  currentIndex,
  length,
  onSlideChangeCallback,
}: BannerControlsProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const { md } = useMediaQueries();

  const handlePreviousSlideControlClick = useCallback(() => {
    const newIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    onSlideChangeCallback(newIndex);
  }, [currentIndex, length, onSlideChangeCallback]);

  const handleNextSlideControlClick = useCallback(() => {
    const newIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    onSlideChangeCallback(newIndex);
  }, [currentIndex, length, onSlideChangeCallback]);

  return length > 1 ? (
    <BannerControlsStyled>
      <PreviousControl
        aria-label="Go to previous slide"
        isActive
        isDarkMode={isDarkMode}
        onClick={handlePreviousSlideControlClick}
      >
        <Icon
          fill={isDarkMode ? colors.grayDark : colors.white}
          name="chevron-back"
          size={18}
        />
      </PreviousControl>
      {md && [...Array(length)].map((_, index) => (
        <StyledBannerControl
          aria-label={`Go to slide ${index + 1}`}
          isActive={index === currentIndex}
          isDarkMode={isDarkMode}
          key={index}
          onClick={() => onSlideChangeCallback(index)}
        />
      ))}
      <NextControl
        aria-label="Go to next slide"
        isActive
        isDarkMode={isDarkMode}
        onClick={handleNextSlideControlClick}
      >
        <Icon
          fill={isDarkMode ? colors.grayDark : colors.white}
          name="chevron-forward"
          size={18}
        />
      </NextControl>
    </BannerControlsStyled>
  ) : null;
};

BannerControls.displayName = 'BannerControls';
