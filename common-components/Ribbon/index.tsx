import { ReactNode } from 'react';
import { colors } from '../design-tokens';
import { getOppositedirection } from '../helpers';
import { RibbonWrapper, StyledRibbonPolygon } from './styles';

interface RibbonProps {
  children?: ReactNode;
  className?: string;
  endStyle?: 'split' | 'point' | 'slant' | 'reverseSlant';
  gradientStart?: string;
  gradientEnd?: string;
  thickness?: number;
  textColor?: string;
  color?: string;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  reverse?: boolean;
  side?: 'left' | 'top' | 'right';
}

export const Ribbon = ({
  children,
  className,
  endStyle = 'split',
  gradientStart,
  gradientEnd,
  thickness = 60,
  textColor = colors.white,
  color = colors.grayLighter,
  left,
  top,
  reverse = false,
  right,
  side = 'top',
  bottom,
}: RibbonProps) => {
  const lift = thickness * 0.25 ?? 0;
  const defaultFacingValue = side === 'top' ? 'right' : 'bottom';
  const facing = reverse
    ? getOppositedirection(defaultFacingValue)
    : defaultFacingValue;

  return (
    <RibbonWrapper
      bottom={bottom}
      className={className}
      color={gradientStart ?? color}
      facing={facing}
      left={left}
      right={right}
      side={side}
      thickness={thickness}
      top={top}
    >
      <StyledRibbonPolygon
        color={color}
        endStyle={endStyle}
        facing={facing}
        gradientEnd={gradientEnd}
        gradientStart={gradientStart}
        lift={lift}
        side={side}
        textColor={textColor}
        thickness={thickness}
      >
        {children}
      </StyledRibbonPolygon>
    </RibbonWrapper>
  );
};

Ribbon.displayName = 'Ribbon';
