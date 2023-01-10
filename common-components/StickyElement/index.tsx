import {
  ReactNode,
} from 'react';
import { StickyElementWrapper, StickyElementInner } from './styles';

interface StickyElementProps {
  children: ReactNode;
  topOffset?: number;
}

export const StickyElement = ({ children, topOffset = 0 }: StickyElementProps) => (
  <StickyElementWrapper>
    <StickyElementInner topOffset={topOffset}>{children}</StickyElementInner>
  </StickyElementWrapper>
);

StickyElement.displayName = 'StickyElement';
