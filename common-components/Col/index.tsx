import { forwardRef } from 'react';
import { StyledCol } from './styles';
import { ColProps } from './types';

export const Col = forwardRef<HTMLDivElement, ColProps>(
  (props: ColProps, ref) => {
    const { end, ...restProps } = props;
    // Attribute "end" throws a warning unless removed
    return (
      <StyledCol endProp={end} ref={ref} {...restProps} />
    );
  }
);

Col.displayName = 'Col';
