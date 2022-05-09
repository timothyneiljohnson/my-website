import { colors } from '../design-tokens';
import { Icon } from '../Icon';

interface CategoryIconProps {
  categories: number[];
  size: number;
}

export const categoryIconMap = {
  '4': 'color-palette',
  '6': 'trophy',
  '7': 'camera',
  '10': 'code-slash',
};

export const CategoryIcon = ({ categories, ...restProps }: CategoryIconProps) => {
  const categoryId = categories.filter(
    (category) => ![1, 3, 9].includes(category)
  )[0];

  return (
    <Icon
      fill={colors.white}
      name={categoryIconMap[categoryId] ?? 'pencil'}
      {...restProps}
    />
  );
};

CategoryIcon.displayName = 'CategoryIcon';
