import { ReactElement } from 'react';

export interface TableProps {
  data: {
    headers: {
      content: string;
      sortable?: boolean;
      noPadding?: boolean;
    }[];
    rows: {
      id: number;
      columns: (string | number)[];
    }[];
  };
  defaultSort?: {
    by: number;
    order: 'asc' | 'desc';
  };
  minRowHeight?: number;
  visualData: {
    headers: {
      content: ReactElement | string | number;
      sortable?: boolean;
      noPadding?: boolean;
    }[];
    rows: {
      id: number;
      columns: (ReactElement | string | number)[];
    }[];
  };
}
