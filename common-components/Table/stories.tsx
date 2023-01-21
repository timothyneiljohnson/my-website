import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { Table } from '.';
import { Image } from '../Image';
import { Link } from '../Link';
import { colors } from '../design-tokens';
import { StarRatingInput } from '../StarRatingInput';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { Icon } from '../Icon';

const ImageWrapper = styled.div`
  max-width: 45px;
  width: 100%;
  height: 100%;
`;
const bookResponseFixture = [
  {
    id: 1,
    url: '#',
    imgUrl: '/image-assets/books/the-minority-report.jpg',
    title: 'The Minority Report',
    author: 'Dick, Philip K.',
    pages: 133,
    avgRating: 3.96,
    userRating: 5,
    shelves: [
      {
        title: 'read',
        url: '#',
      },
      {
        title: 'lending-shelf',
        url: '#',
      },
    ],
    dateRead: 'May 27, 2019',
    dateAdded: 'Aug 09, 2015',
  },
  {
    id: 2,
    url: '#',
    imgUrl: '/image-assets/books/the-jungle.jpg',
    title: 'The Jungle',
    author: 'Sinclair, Upton',
    pages: 335,
    avgRating: 3.96,
    userRating: 5,
    shelves: [
      {
        title: 'read',
        url: '#',
      },
    ],
    dateRead: 'Aug 31, 2018',
    dateAdded: 'Jul 01, 2018',
  },
  {
    id: 3,
    url: '#',
    imgUrl: '/image-assets/books/slaughterhouse-five.jpg',
    title: 'Slaughterhouse-Five',
    author: 'Vonnegut Jr., Kurt',
    pages: 275,
    avgRating: 4.09,
    userRating: 5,
    shelves: [
      {
        title: 'read',
        url: '#',
      },
    ],
    dateRead: null,
    dateAdded: 'Dec 30, 2011',
  },
  {
    id: 4,
    url: '#',
    imgUrl: '/image-assets/books/the-picture-of-dorian-gray.jpg',
    title: 'The Picture of Dorian Gray',
    author: 'Wilde, Oscar',
    pages: null,
    avgRating: 4.11,
    userRating: 5,
    shelves: [
      {
        title: 'read',
        url: '#',
      },
    ],
    dateRead: 'Feb 21, 2017',
    dateAdded: 'Aug 09, 2015',
  },
  {
    id: 5,
    url: '#',
    imgUrl: '/image-assets/books/the-ministry-for-the-future.jpg',
    title: 'The Ministry for the Future',
    author: 'Robinson, Kim Stanley',
    pages: 563,
    avgRating: 3.89,
    userRating: 5,
    shelves: [
      {
        title: 'read',
        url: '#',
      },
    ],
    dateRead: 'May 16, 2021',
    dateAdded: 'May 08, 2021',
  },
  {
    id: 6,
    url: '#',
    imgUrl: '/image-assets/books/high-rise.jpg',
    title: 'High-Rise',
    author: 'Ballard, J.G.',
    pages: 208,
    avgRating: 3.61,
    userRating: 4,
    shelves: [
      {
        title: 'read',
        url: '#',
      },
      {
        title: 'lending-shelf',
        url: '#',
      },
    ],
    dateRead: null,
    dateAdded: 'Nov 22, 2017',
  },
];

const headerData = [
  { content: 'Cover', sortable: false },
  { content: 'Title' },
  { content: 'Author' },
  { content: '# pages' },
  { content: 'Avg rating' },
  { content: 'My rating' },
  { content: 'Shelves', sortable: false },
  { content: 'Date read' },
  { content: 'Date added' },
  { content: null, sortable: false, noPadding: true },
];

const transformResponseToTableData = (responseData) =>
  responseData.map((book) => ({
    id: book.id,
    columns: [
      null,
      book.title,
      book.author,
      book.pages,
      book.avgRating,
      book.userRating,
      null,
      new Date(book.dateRead),
      new Date(book.dateAdded),
      null,
    ],
  }));

const transformResponseToTableVisualData = (responseData) =>
  responseData.map((book, i: number) => ({
    id: book.id,
    columns: [
      <NextLink href={book.url} key={i}>
        <ImageWrapper>
          <Image
            alt={book.title}
            masonry
            noFadeIn
            sizes="33vw"
            src={book.imgUrl}
          />
        </ImageWrapper>
      </NextLink>,
      <Link href={book.url} key={i} reverseUnderline>
        {book.title}
      </Link>,
      <Link href={book.url} key={i} reverseUnderline>
        {book.author}
      </Link>,
      <div key={i}>
        {book.pages}
        {book.pages > 0 && (
          <span style={{ color: colors.grayLighter }}> pp</span>
        )}
      </div>,
      book.avgRating,
      <StarRatingInput
        key={i}
        onChange={() => null}
        rating={book.userRating}
        size="xs"
      />,
      <>
        {book.shelves.map(
          (shelf: { title: string; url: string }, index: number) => (
            <>
              <Link href={shelf.url} key={index} reverseUnderline>
                {shelf.title}
              </Link>
              {index + 1 !== book.shelves.length && ', '}
            </>
          )
        )}
      </>,
      book.dateRead,
      book.dateAdded,
      <button key={i} onClick={() => null}>
        <Icon fill={colors.grayLighter} name="close-outline" size={18} />
      </button>,
    ],
  }));

const tableData = {
  headers: headerData,
  rows: transformResponseToTableData(bookResponseFixture),
};

const tableVisualData = {
  headers: headerData,
  rows: transformResponseToTableVisualData(bookResponseFixture),
};

export default {
  title: 'Common/Table',
  component: Table,
};

export const Default = () => (
  <Table
    data={tableData}
    defaultSort={{ by: 1, order: 'asc' }}
    minRowHeight={86}
    visualData={tableVisualData}
  />
);
Default.args = {};
Default.decorators = globalDecorators;
