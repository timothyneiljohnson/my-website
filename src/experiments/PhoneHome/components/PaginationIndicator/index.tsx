import { PaginationIndicatorStyled, PageIndicatorDot } from './styles';

interface PaginationIndicatorProps {
  numberOfPages: number;
  currentPageIndex: number;
}
export const PaginationIndicator = ({
  currentPageIndex,
  numberOfPages,
}: PaginationIndicatorProps) => (
  <PaginationIndicatorStyled>
    {[...Array(numberOfPages)].map((_, i) => (
      <PageIndicatorDot isSelected={i === currentPageIndex} key={i} />
    ))}
  </PaginationIndicatorStyled>
);

PaginationIndicator.displayName = 'PaginationIndicator';
