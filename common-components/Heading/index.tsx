import { ReactNode } from 'react';
import { StyledHeading } from './styles';

interface HeadingProps {
  children: string | ReactNode | ReactNode[];
  className?: string;
  color?: string;
  level?: number;
  size?: number;
  noMargin?: boolean;
  animateTyping?: boolean;
}

export const Heading = ({
  children,
  color,
  className,
  level = 3,
  size,
  animateTyping,
  noMargin,
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
    >
      {children}
    </StyledHeading>
  );
Heading.displayName = 'Heading';
