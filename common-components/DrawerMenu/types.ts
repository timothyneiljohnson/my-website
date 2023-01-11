import { ReactNode } from 'react';
import { TransitionProps } from '../Transition';

export interface DrawerMenuProps extends TransitionProps {
  background?: string;
  iconColor?: string;
  isOpen?: boolean;
  menuItems?: ReactNode[];
  size?: number;
  title?: string;
}
