import { Icon } from '../Icon';
import { FractionalStarWrapper, StyledStarRating } from './styles';
import { StandardSizes } from '../types';
import { starSizes } from '../StarRatingInput';

interface StarRatingProps {
  color?: string;
  rating?: number;
  size?: StandardSizes;
}

export const StarRating = ({
  color = '#e8bc4e',
  rating = 3.5,
  size = 'md',
}: StarRatingProps) => {
  const wholeStars = Math.floor(rating);
  const emptyStars = 5 - wholeStars;
  const fractionalStar = rating - wholeStars;

  return (
    <StyledStarRating>
      {[...Array(wholeStars)].map((_, i) => (
        <Icon fill={color} key={i} name="star" size={starSizes[size]} />
      ))}
      {fractionalStar > 0 && (
        <FractionalStarWrapper size={starSizes[size]} value={fractionalStar}>
          <Icon fill={color} name="star" size={starSizes[size]} />
        </FractionalStarWrapper>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon fill={color} key={i} name="star-outline" size={starSizes[size]} />
      ))}
    </StyledStarRating>
  );
};

StarRating.displayName = 'StarRating';
