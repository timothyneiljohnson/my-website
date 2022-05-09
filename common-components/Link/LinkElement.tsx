import { createElement, FC, forwardRef, ReactNode } from 'react';

interface LinkProps {
  children?: ReactNode;
  role?: string;
}

export const LinkElement: FC = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) =>
    createElement(
      props.role === 'button' ? 'button' : 'a',
      { ...props, ref },
      props.children
    )
);

LinkElement.displayName = 'LinkElement';
