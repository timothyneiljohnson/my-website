import { ReactNode } from 'react';
import { Button } from '../Button';
import { colors, gradients } from '../design-tokens';
import { useStorageDarkMode } from '../storage-dark-mode-context';

interface FilterListItemLinkProps {
  categoryId: string;
  children: ReactNode | string;
  isSelected: boolean;
  onFilterCallback: (categoryId: string) => void;
}

export const FilterListItemButton = ({
  categoryId,
  children,
  isSelected,
  onFilterCallback,
}: FilterListItemLinkProps) => {
  const { isDarkMode } = useStorageDarkMode();

  let bgColor = isDarkMode ? colors.grayLight : colors.white;
  let borderColor = isDarkMode ? colors.grayLight : colors.grayLighter;
  let textColor = isDarkMode ? colors.white : colors.grayDarker;
  if (isSelected) {
    bgColor = colors.tertiary;
    borderColor = isDarkMode ? colors.grayLighter : bgColor;
    textColor = colors.white;
  }

  return (
    <Button
      bgColor={bgColor}
      borderColor={borderColor}
      gradientEnd={isSelected && isDarkMode ? gradients.quinary.end : null}
      gradientStart={isSelected && isDarkMode ? gradients.quinary.start : null}
      onClick={() => onFilterCallback(categoryId)}
      pill
      size="sm"
      textColor={textColor}
    >
      {children}
      {isSelected && <span className="h-sr-only"> - active</span>}
    </Button>
  );
};

FilterListItemButton.displayName = 'FilterListItemButton';
