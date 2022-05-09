import { Button } from '../Button';

interface FilterListItemLinkProps {
  categoryId: string;
  children: Element | string;
  isSelected: boolean;
  onFilterCallback: (categoryId: string) => void;
}

export const FilterListItemButton = ({
  categoryId,
  children,
  isSelected,
  onFilterCallback,
}: FilterListItemLinkProps) => (
  <Button
    onClick={() => onFilterCallback(categoryId)}
    size="sm"
    variant={isSelected ? 'secondary' : null}
  >
    {children}
  </Button>
);

FilterListItemButton.displayName = 'FilterListItemButton';
