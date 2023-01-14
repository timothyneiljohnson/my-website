import { AnchorHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { colors } from '../design-tokens';
import { StyledLink } from './styles';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  color?: string;
  noUnderline?: boolean;
  reverseUnderline?: boolean;
  ref?: ForwardedRef<HTMLAnchorElement>;
  role?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) => {
    const { color = colors.primary, reverseUnderline = false, ...restProps } = props;
    return (
      <StyledLink
        as={restProps.role === 'button' ? 'button' : 'a'}
        color={color}
        ref={ref}
        reverseUnderline={reverseUnderline}
        {...restProps}
      />
    );
  }
);

Link.displayName = 'Link';
