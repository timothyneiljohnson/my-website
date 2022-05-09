import { createElement, ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  color?: string;
  level?: number;
  size?: number;
}

export const HeadingElement = ({
  children,
  className,
  color,
  level = 3,
  size,
}: HeadingProps) =>
  createElement(
    `h${level}`,
    { className, color, level, size },
    children
  );

HeadingElement.displayName = 'HeadingElement';
