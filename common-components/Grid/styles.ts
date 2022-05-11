import { ReactNode } from 'react';
import styled from 'styled-components';
import config, { SCREEN_SIZES } from '../Col/config';

export interface StyledGridProps {
  fixed?: boolean;
  children?: ReactNode;
}

export const StyledGrid = styled.div<StyledGridProps>`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(props) => `${config(props).outerMargin}px`};
  padding-left: ${(props) => `${config(props).outerMargin}px`};

  ${(props) =>
    props.fixed &&
    `
    ${SCREEN_SIZES.map(
      (size) =>
        config(props).breakpoints[size] && config(props).minMedia[size]`
          width: ${config(props).breakpoints[size]};
        `
    )}
  `}
`;
