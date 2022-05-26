import { ReactElement } from 'react';
import { TransitionProps } from '../Transition';
import { SideNames } from '../types';

export interface ModalDrawerProps extends TransitionProps {
  background?: string;
  children: ReactElement | ReactElement[] | string;
  closeType?: 'corner' | 'floating';
  direction?: SideNames;
  customClose?: ReactElement;
  isOpen?: boolean;
  modalType?: 'fullscreen' | 'float';
  onCloseCallback: () => void;
  size?: number;
  title?: string;
}
