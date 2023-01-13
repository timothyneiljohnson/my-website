import { ReactNode } from 'react';
import { AspectRatioInner, StyledAspectRatio } from './styles';

interface AspectRatioProps {
  children: ReactNode;
  ratio?: number;
}
export const AspectRatio = ({ children, ratio = 1 }: AspectRatioProps) => (
  <StyledAspectRatio ratio={ratio}>
    <AspectRatioInner>{children}</AspectRatioInner>
  </StyledAspectRatio>
);

AspectRatio.displayName = 'AspectRatio';
