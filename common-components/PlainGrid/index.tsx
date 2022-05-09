import styled from 'styled-components';
import config, { SCREEN_SIZES } from '../Col/config';

const gapProps = SCREEN_SIZES.map((d) => `${d}Gap`);
const columnsProps = SCREEN_SIZES.map((d) => `${d}Columns`);
const rowsProps = SCREEN_SIZES.map((d) => `${d}Rows`);

type GridTemplateCol = number | boolean;

interface PlainGridProps {
  columns?: GridTemplateCol;
  gap?: string;
  colGap?: string;
  rowGap?: string;
  inline?: boolean;
  min?: string | number; // Sets the minimize column size, columns will be 'auto'
  rows?: number;
  xsColumns?: GridTemplateCol;
  smColumns?: GridTemplateCol;
  mdColumns?: GridTemplateCol;
  lgColumns?: GridTemplateCol;
  xlColumns?: GridTemplateCol;
  xsGap?: number;
  smGap?: number;
  mdGap?: number;
  lgGap?: number;
  xlGap?: number;
  xsRows?: number;
  smRows?: number;
  mdRows?: number;
  lgRows?: number;
  xlRows?: number;
}

export const PlainGrid = styled.div<PlainGridProps>`
  display: ${({ inline }) => inline && 'inline-'}grid;
  ${({ gap }) => gap && `grid-gap: ${gap};`}
  ${({ colGap }) => colGap && `grid-column-gap: ${colGap};`}
  ${({ rowGap }) => rowGap && `grid-row-gap: ${rowGap};`}
  ${({ columns }) =>
    columns > 0 && `grid-template-columns: repeat(${columns}, minmax(0, 1fr));`}
  ${({ rows }) =>
    rows > 0 && `grid-template-rows: repeat(${rows}, minmax(0, 1fr));`}
  ${({ min }) =>
    min &&
    `grid-template-columns: repeat(auto-fill, minmax(min(${min}, 100%), 1fr));`}

  ${(props) =>
    Object.keys(props)
      .filter((key) => gapProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/Gap$/, '')]`
          grid-gap: ${props[key]};
        `
      )}

  ${(props) =>
    Object.keys(props)
      .filter((key) => columnsProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/Columns$/, '')]`
          grid-template-columns: repeat(${props[key]}, minmax(0, 1fr));
        `
      )}

  ${(props) =>
    Object.keys(props)
      .filter((key) => rowsProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/Row$/, '')]`
          grid-template-rows: repeat(${props[key]}, minmax(0, 1fr));
        `
      )}
`;

PlainGrid.displayName = 'PlainGrid';
