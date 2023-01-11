import React, { Fragment } from 'react';
import { Icon } from '../Icon';
import {
  HiddenInput,
  StarFieldset,
  StarLabel,
  StyledStarRatingInput,
} from './styles';
import { StandardSizes } from '../types';

export const starSizes = {
  xxs: 15,
  xs: 18,
  sm: 21,
  md: 24,
  lg: 27,
  xl: 30,
  xxl: 33,
};

interface StarRatingInputProps {
  color?: string;
  onChange: (value: string) => void;
  rating?: number;
  size?: StandardSizes;
}

export const StarRatingInput = ({
  color = '#e8bc4e',
  onChange,
  rating,
  size = 'md',
}: StarRatingInputProps) => (
  <StyledStarRatingInput>
    {[...Array(5)].map((_, i) => (
      <Icon fill={color} key={i} name="star-outline" size={starSizes[size]} />
    ))}
    <StarFieldset>
      {[...Array(10)].map((_, i) => (
        <Fragment key={i}>
          <HiddenInput
            id={`rating-${i / 2 + 0.5}`}
            name="rating"
            onChange={(e) => onChange(e.currentTarget.value)}
            type="radio"
            value={i / 2 + 0.5}
          />
          <StarLabel
            data-active={i / 2 + 0.5 <= rating}
            htmlFor={`rating-${i / 2 + 0.5}`}
            size={starSizes[size]}
          >
            <Icon fill={color} key={i} name="star" size={starSizes[size]} />
          </StarLabel>
        </Fragment>
      ))}
    </StarFieldset>
  </StyledStarRatingInput>
);

StarRatingInput.displayName = 'StarRatingInput';
