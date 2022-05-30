import { forwardRef } from 'react';
import { StyledHeader } from './styles';
import { HeaderFooterContent } from '../../components/HeaderFooterContent';

interface HeaderProps {
  handleOpenProfileDrawer: () => void;
  isFullWidth?: boolean;
}

export const Header = forwardRef<HTMLButtonElement, HeaderProps>(
  ({ handleOpenProfileDrawer, isFullWidth }: HeaderProps, ref) => (
    <StyledHeader isFullWidth={isFullWidth}>
      <HeaderFooterContent
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        ref={ref}
      />
    </StyledHeader>
  )
);

Header.displayName = 'Header';
