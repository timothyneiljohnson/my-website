import { ReactNode } from 'react';
import { StyledOutdent } from './styles';

interface OutdentProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  horizontal?: number;
  vertical?: number;
  style?: any;
}
export const Outdent = ({
  children,
  className,
  horizontal,
  vertical,
  style,
}: OutdentProps) => (
  <StyledOutdent
    horizontal={Math.abs(horizontal) * -1}
    vertical={Math.abs(vertical) * -1}
    className={className}
    style={style}
  >
    {children}
  </StyledOutdent>
);

Outdent.displayName = 'Outdent';
