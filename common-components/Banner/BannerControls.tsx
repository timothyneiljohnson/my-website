import { useCallback } from 'react';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';
import { colors } from '../design-tokens';
import { Icon } from '../Icon';
import {
  BannerControlsStyled,
  NextPreviousControl,
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
      <NextPreviousControl
        isActive
        isDarkMode={isDarkMode}
        onClick={handlePreviousSlideControlClick}
      >
        <Icon
          fill={isDarkMode ? colors.grayDark : colors.white}
          name="chevron-back"
          size={18}
        />
      </NextPreviousControl>
      {[...Array(length)].map((_, index) => (
        <StyledBannerControl
          isActive={index === currentIndex}
          isDarkMode={isDarkMode}
          key={index}
          onClick={() => onSlideChangeCallback(index)}
        />
      ))}
      <NextPreviousControl
        isActive
        isDarkMode={isDarkMode}
        onClick={handleNextSlideControlClick}
      >
        <Icon
          fill={isDarkMode ? colors.grayDark : colors.white}
          name="chevron-forward"
          size={18}
        />
      </NextPreviousControl>
    </BannerControlsStyled>
  ) : null;
};

BannerControls.displayName = 'BannerControls';
