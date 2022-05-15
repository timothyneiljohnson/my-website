import { ReactElement } from 'react';
import { colors } from '../design-tokens';
import { StandardSizes } from '../types';
import { BadgeInner, StyledBadge } from './styles';

interface BadgeProps {
  children: ReactElement | ReactElement[] | string;
  className?: string;
  color?: string;
  pill?: boolean;
  size?: StandardSizes;
  textColor?: string;
  inline?: boolean;
}
export const Badge = ({
  children,
  className,
  color = '#c00',
  inline,
  pill,
  size = 'sm',
  textColor = colors.white,
}: BadgeProps) => {
  const isSingleChar = typeof children === 'string' && children.length === 1;
  return (
    <StyledBadge className={className} inline={inline}>
      <BadgeInner
        color={color}
        isSingleChar={isSingleChar}
        pill={pill}
        size={size}
        textColor={textColor}
      >
        {children}
      </BadgeInner>
    </StyledBadge>
  );
};

Badge.displayName = 'Badge';
