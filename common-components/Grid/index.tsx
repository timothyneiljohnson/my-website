import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

import config, { SCREEN_SIZES } from '../Col/config';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  children?: ReactNode;
}

export const Grid = styled.div<GridProps>`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(props) => `${config(props).outerMargin}px`};
  padding-left: ${(props) => `${config(props).outerMargin}px`};

  ${(props) =>
    props.fixed &&
    `
    ${SCREEN_SIZES.map(
      (size) =>
        config(props).breakpoints[size] &&
        config(props).minMedia[size]`
          width: ${config(props).breakpoints[size]};
        `
    )}
  `}
`;

Grid.displayName = 'Grid';
