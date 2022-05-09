import { forwardRef } from 'react';
import { StyledRow } from './styles';
import { RowProps } from './types';

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (props: RowProps, ref) => {
    const { end, ...restProps } = props;
    // Attribute "end" throws a warning unless removed
    return (
      <StyledRow endProp={end} ref={ref} {...restProps} />
    );
  }
);

Row.displayName = 'Row';
