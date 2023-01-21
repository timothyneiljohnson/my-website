import React, { useCallback, useMemo, useState } from 'react';
import { Row } from '../Row';
import { Grid } from '../Grid';
import { Col } from '../Col';
import { StyledCaret, TableWrapper } from './styles';
import { TableProps } from './types';

const Table = ({ data, defaultSort, minRowHeight, visualData }: TableProps) => {
  // SORTING: RETRIEVE SAVED SORT FROM LOCAL STORAGE
  const currentUrl = window.location.href.split('?')[0];
  const savedSortInfo = JSON.parse(localStorage.getItem('table-sort'));
  const savedSort =
    savedSortInfo?.url === currentUrl ? savedSortInfo.sort : null;

  // SORTING: SET DEFAULT SORT VALUES. FIRST PRIORITY IS SAVED SORT, SECOND IS THE DEFAULT PROP
  let sortByStart = null;
  let sortOrderStart = '';
  if (savedSort) {
    sortByStart = savedSort.by;
    sortOrderStart = savedSort.order;
  } else if (defaultSort) {
    sortByStart = defaultSort.by;
    sortOrderStart = defaultSort.order;
  }
  const [sort, setSort] = useState({
    by: sortByStart,
    order: sortOrderStart,
  });

  const sortedData = useMemo(
    () =>
      data.rows.sort((a, b) => {
        let value = 0;
        if (sort.by !== null) {
          if (sort.order === 'asc') {
            value = a.columns[sort.by] > b.columns[sort.by] ? 1 : -1;
          } else {
            value = a.columns[sort.by] < b.columns[sort.by] ? 1 : -1;
          }
        }
        return value;
      }),
    [data, sort]
  );

  const handleSort = useCallback(
    (by: number) => {
      let value;
      if (sort.by === by) {
        value = { by, order: sort.order === 'asc' ? 'desc' : 'asc' };
      } else {
        value = { by, order: 'asc' };
      }
      setSort(value);
      localStorage.setItem(
        'table-sort',
        JSON.stringify({
          url: window.location.href.split('?')[0],
          sort: value,
        })
      );
    },
    [sort]
  );

  // DATA IS NEEDED FOR SORTING, VISUAL DATA WILL RENDER IF PROVIDED
  const visualDataValue = visualData ?? data;

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {data.headers.map(
              (header: { content: string; sortable?: boolean }, i: number) =>
                header.sortable === false ? (
                  <th key={i}>{header.content}</th>
                ) : (
                  <th key={i} onClick={() => handleSort(i)}>
                    <button aria-label={`sort by ${header.content}`}>
                      <Grid>
                        <Row noWrap>
                          <Col flex grow middle>
                            {header.content}
                          </Col>
                          {sort.by === i && (
                            <Col flex middle shrink>
                              <StyledCaret
                                name="caret-up"
                                rotate={sort.order === 'desc' ? 180 : null}
                                size={13}
                              />
                            </Col>
                          )}
                        </Row>
                      </Grid>
                    </button>
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i: number) => (
            <tr
              key={i}
              style={{ height: minRowHeight ? `${minRowHeight}px` : null }}
            >
              {row.columns.map((_, index: number) => (
                <td data-no-padding={data.headers[index].noPadding} key={index}>
                  {
                    visualDataValue.rows.find(
                      (visualRow) => row.id === visualRow.id
                    ).columns[index]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export { Table };
