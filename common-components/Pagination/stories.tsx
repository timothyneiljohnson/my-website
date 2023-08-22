import React from 'react';
import { Pagination } from '.';

export default {
  title: 'Common/Pagination',
  component: Pagination,
};

export const Default = () => (
  <Pagination currentPage={1} totalPages={5} />
);

export const With10Pages = () => (
  <Pagination currentPage={5} totalPages={10} />
);
