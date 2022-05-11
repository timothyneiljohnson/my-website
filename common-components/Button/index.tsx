import { ButtonHTMLAttributes, forwardRef, useCallback, useState } from 'react';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';
import { colors } from '../design-tokens';
import { StandardSizes } from '../types';
import { StyledButton, StyledLinkAsButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  fullWidth?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  pointerGradient?: boolean;
  href?: string;
  textColor?: string;
  topMargin?: number;
  pill?: boolean;
  size?: StandardSizes;
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { isDarkMode = false } = useStorageDarkMode() ?? {};
    const {
      bgColor = isDarkMode ? colors.grayDark : colors.white,
      textColor = isDarkMode ? colors.white : colors.grayDarkest,
      fullWidth,
      pointerGradient,
      variant,
      size = 'md',
      ...restProps
    } = props;
    const { children } = restProps;

    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    const handleMouseMove = useCallback(
      (event) => {
        if (!pointerGradient) return;
        setMousePosition({ x: event.clientX, y: event.clientY });
      },
      [pointerGradient]
    );

    return props.href ? (
      <StyledLinkAsButton
        bgColor={bgColor}
        fullWidth={fullWidth}
        onMouseMove={handleMouseMove}
        pointerGradient={pointerGradient}
        ref={ref}
        size={size}
        style={
          pointerGradient
            ? { '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }
            : undefined
        }
        textColor={textColor}
        variant={variant}
        {...restProps}
      >
        {children}
      </StyledLinkAsButton>
    ) : (
      <StyledButton
        bgColor={bgColor}
        fullWidth={fullWidth}
        onMouseMove={handleMouseMove}
        pointerGradient={pointerGradient}
        ref={ref}
        size={size}
        style={
          pointerGradient
            ? { '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }
            : undefined
        }
        textColor={textColor}
        variant={variant}
        {...restProps}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';