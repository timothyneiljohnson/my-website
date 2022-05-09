import { AnchorHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { colors } from '../design-tokens';
import { StyledLink } from './styles';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  color?: string;
  noUnderline?: boolean;
  ref?: ForwardedRef<HTMLAnchorElement>;
  role?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) => {
    const { color = colors.primary, noUnderline = false, ...restProps } = props;
    return (
      <StyledLink
        color={color}
        noUnderline={noUnderline}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Link.displayName = 'Link';
