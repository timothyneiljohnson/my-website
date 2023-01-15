import { ReactNode } from 'react';
import { AspectRatioInner, StyledAspectRatio } from './styles';

interface AspectRatioProps {
  children: ReactNode;
  ratio?: number;
  style?: any;
}
export const AspectRatio = ({
  children,
  ratio = 1,
  ...restProps
}: AspectRatioProps) => (
  <StyledAspectRatio ratio={ratio} {...restProps}>
    <AspectRatioInner>{children}</AspectRatioInner>
  </StyledAspectRatio>
);

AspectRatio.displayName = 'AspectRatio';
