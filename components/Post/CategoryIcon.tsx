import { colors } from '../../common-components/design-tokens';
import { Icon } from '../../common-components/Icon';

interface CategoryIconProps {
  categories: number[];
  size: number;
}

const categoryIconMap = {
  '4': 'color-palette', // Web Design
  '6': 'trophy', // Awards
  '7': 'camera', // Photography
  '8': 'accessibility', // Accessibility
  '11': 'code-slash', // Tutorials
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
