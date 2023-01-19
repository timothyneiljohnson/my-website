import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '.';

storiesOf('Common/Pagination', module)
  .add('Default', () => <Pagination currentPage={1} totalPages={5} />)
  .add('With 10 pages', () => <Pagination currentPage={5} totalPages={10} />);
