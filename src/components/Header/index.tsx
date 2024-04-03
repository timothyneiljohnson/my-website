import { forwardRef } from 'react';
import { StyledHeader } from './styles';
import { HeaderFooterContent } from '../HeaderFooterContent';

interface HeaderProps {
  handleOpenProfileDrawer: () => void;
  isFullWidth?: boolean;
  className?: any;
}

export const Header = forwardRef<HTMLButtonElement, HeaderProps>(
  ({ handleOpenProfileDrawer, isFullWidth, className }: HeaderProps, ref) => (
    <StyledHeader className={className} isFullWidth={isFullWidth}>
      <HeaderFooterContent
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        ref={ref}
      />
    </StyledHeader>
  )
);

Header.displayName = 'Header';
