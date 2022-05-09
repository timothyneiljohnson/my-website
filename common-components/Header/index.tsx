import { forwardRef } from 'react';
import { StyledHeader } from './styles';
import { HeaderFooterContent } from '../../components/HeaderFooterContent';

interface HeaderProps {
  handleOpenProfileDrawer: () => void;
}

export const Header = forwardRef<HTMLButtonElement, HeaderProps>(
  ({ handleOpenProfileDrawer }: HeaderProps, ref) => (
    <StyledHeader>
      <HeaderFooterContent
        handleOpenProfileDrawer={handleOpenProfileDrawer}
        ref={ref}
      />
    </StyledHeader>
  )
);

Header.displayName = 'Header';
