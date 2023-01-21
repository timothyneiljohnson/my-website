import React, { useState } from 'react';
import { PageButton, PaginationContainer } from './styles';

const Pagination = ({ totalPages, currentPage }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(currentPage);

  const handlePageClick = (newPage) => {
    setCurrentPageNumber(newPage);
  };

  return (
    <PaginationContainer>
      <PageButton
        aria-label="First page"
        disabled={currentPageNumber === 1}
        onClick={() => handlePageClick(1)}
      >
        &laquo;
      </PageButton>
      <PageButton
        aria-label="Previous page"
        disabled={currentPageNumber === 1}
        onClick={() => handlePageClick(currentPageNumber - 1)}
      >
        &lsaquo;
      </PageButton>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton
          aria-current={currentPageNumber === i + 1}
          isSelected={currentPageNumber === i + 1}
          key={i + 1}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </PageButton>
      ))}
      <PageButton
        aria-label="Next page"
        disabled={currentPageNumber === totalPages}
        onClick={() => handlePageClick(currentPageNumber + 1)}
      >
        &rsaquo;
      </PageButton>
      <PageButton
        aria-label="Last page"
        disabled={currentPageNumber === totalPages}
        onClick={() => handlePageClick(totalPages)}
      >
        &raquo;
      </PageButton>
    </PaginationContainer>
  );
};

export { Pagination };
