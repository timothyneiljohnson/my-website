import { ReactNode } from 'react';
import { colors } from '../design-tokens';
import { StyledHeading } from './styles';

interface HeadingProps {
  children?: string | ReactNode | ReactNode[];
  className?: string;
  color?: string;
  dangerouslySetInnerHTML?: any;
  level?: number;
  size?: number;
  noMargin?: boolean;
  animateTyping?: boolean;
}

export const Heading = ({
  children,
  color = colors.grayDarker,
  className,
  level = 3,
  size,
  animateTyping,
  noMargin,
  ...props
}: HeadingProps) =>
  animateTyping ? (
    <div className={className}>
      <StyledHeading
        animateTyping={animateTyping}
        className={className}
        color={color}
        level={level}
        noMargin={noMargin}
        size={size}
        {...props}
      >
        {children}
      </StyledHeading>
    </div>
  ) : (
    <StyledHeading
      animateTyping={animateTyping}
      className={className}
      color={color}
      level={level}
      noMargin={noMargin}
      size={size}
      {...props}
    >
      {children}
    </StyledHeading>
  );
Heading.displayName = 'Heading';
