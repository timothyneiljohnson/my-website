import { ButtonHTMLAttributes, ForwardedRef, ReactElement } from 'react';
import { StandardSizes } from '../types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  borderColor?: string;
  dropdown?: ReactElement;
  fullWidth?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  pointerGradient?: boolean;
  href?: string;
  isRound?: boolean;
  target?: string;
  textColor?: string;
  topMargin?: number;
  pill?: boolean;
  ref?: ForwardedRef<HTMLButtonElement>;
  size?: StandardSizes;
  style?: any;
  variant?: 'primary' | 'secondary' | 'default' | 'defaultDarkMode';
}
