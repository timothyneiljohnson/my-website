import styled from 'styled-components';
import config from '../Col/config';
import { RowColBase } from '../Col/styles';
import { RowProps } from './types';

export const StyledRow = styled(RowColBase)<RowProps>`
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-wrap: ${({ noWrap }) => noWrap ? 'nowrap' : 'wrap'};
  width: 100%;

  /* Col Gap */
  ${(props) =>
    props.colGap &&
    config(props).minMedia.xs`
    --column-gap: ${props.colGap * 100};
    column-gap: ${props.colGap * 100}%;
  `}

  /* Gap */
  ${(props) =>
    props.gap &&
    config(props).minMedia.xs`
    --column-gap: ${props.gap * 100};
    gap: ${props.gap * 100}%;
  `}

  /* Row Gap - TODO: Add support, this doesn't seem to do anything */
  ${(props) =>
    props.rowGap &&
    config(props).minMedia.xs`
    row-gap: ${props.rowGap * 100}%;
  `}
`;
