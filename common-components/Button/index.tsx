import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { animation, colors } from '../design-tokens';
import { StandardSizes } from '../types';
import {
  ButtonWrapper,
  StyledButton,
  StyledLinkAsButton,
  DropdownArrowCol,
  DropdownWrapper,
  ButtonContentCol,
  StyledTransition,
  StyledGrid,
} from './styles';
import { Icon } from '../Icon';
import { Row } from '../Row';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  borderColor?: string;
  dropdown?: ReactElement;
  fullWidth?: boolean;
  gradientStart?: string;
  gradientEnd?: string;
  pointerGradient?: boolean;
  href?: string;
  target?: string;
  textColor?: string;
  topMargin?: number;
  pill?: boolean;
  size?: StandardSizes;
  variant?: 'primary' | 'secondary' | 'default' | 'defaultDarkMode';
}

const dropdownArrowSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

const primaryButtonBGColor = colors.primary;
const primaryButtonBorderColor = colors.primary;
const primaryButtonTextColor = colors.white;
const secondaryButtonBGColor = colors.tertiary;
const secondaryButtonBorderColor = colors.tertiary;
const secondaryButtonTextColor = colors.white;
const defaultButtonBGColor = colors.white;
const defaultDarkModeButtonBGColor = colors.grayLight;
const defaultDarkModeButtonBorderColor = colors.grayLight;
const defaultButtonBorderColor = colors.grayLighter;
const disabledButtonBGColor = colors.grayLighter;
const disabledButtonBorderColor = colors.grayLighter;
const disabledButtonTextColor = colors.grayLight;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { isDarkMode = false } = useStorageDarkMode() ?? {};
    let {
      bgColor = isDarkMode ? colors.grayDark : colors.white,
      borderColor,
      textColor = isDarkMode ? colors.grayLightest : colors.grayDarkest,
    } = props;
    const {
      disabled,
      dropdown,
      fullWidth,
      pointerGradient,
      variant,
      size = 'md',
      ...restProps
    } = props;
    const { children } = restProps;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

    const hasDropdown = Boolean(dropdown);
    const openDropdown = useCallback(() => {
      setIsDropdownOpen(true);
    }, []);
    const closeDropdown = useCallback(() => {
      setIsDropdownOpen(false);
    }, []);

    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    const handleMouseMove = useCallback(
      (event) => {
        if (!pointerGradient) return;
        const { pageX, pageY, target } = event;
        const { offsetLeft, offsetTop } = target;

        setMousePosition({ x: pageX - offsetLeft, y: pageY - offsetTop });
      },
      [pointerGradient]
    );

    switch (variant) {
      case 'primary':
        textColor = primaryButtonTextColor;
        bgColor = primaryButtonBGColor;
        borderColor = primaryButtonBorderColor;
        break;
      case 'secondary':
        textColor = secondaryButtonTextColor;
        bgColor = secondaryButtonBGColor;
        borderColor = secondaryButtonBorderColor;
        break;
      case 'default':
        bgColor = defaultButtonBGColor;
        borderColor = defaultButtonBorderColor;
        break;
      case 'defaultDarkMode':
        bgColor = defaultDarkModeButtonBGColor;
        borderColor = defaultDarkModeButtonBorderColor;
        break;
      default:
        break;
    }

    if (disabled) {
      textColor = disabledButtonTextColor;
      bgColor = disabledButtonBGColor;
      borderColor = disabledButtonBorderColor;
    }

    const onCloseCallback = useCallback(() => {
      setIsDropdownOpen(false);
      setTimeout(() => {
        setIsDropdownDisplayed(false);
      }, animation.durations.faster);
    }, []);

    useEffect(() => {
      if (isDropdownOpen) {
        setIsDropdownDisplayed(true);
      } else {
        onCloseCallback();
      }
    }, [isDropdownOpen, onCloseCallback]);

    return (
      <ButtonWrapper fullWidth={fullWidth}>
        {props.href ? (
          <StyledLinkAsButton
            bgColor={bgColor}
            borderColor={borderColor}
            disabled={disabled}
            hasDropdown={hasDropdown}
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
            variant={
              isDarkMode && variant === 'default' ? 'defaultDarkMode' : variant
            }
            {...restProps}
          >
            <StyledGrid>
              <Row>
                <ButtonContentCol buttonSize={size} grow>
                  {children}
                </ButtonContentCol>
                {hasDropdown && (
                  <DropdownArrowCol
                    flex
                    middle
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    shrink
                  >
                    <Icon
                      fill={textColor}
                      name="chevron-down-sharp"
                      size={dropdownArrowSizes[size]}
                    />
                  </DropdownArrowCol>
                )}
              </Row>
            </StyledGrid>
          </StyledLinkAsButton>
        ) : (
          <StyledButton
            bgColor={bgColor}
            borderColor={borderColor}
            disabled={disabled}
            hasDropdown={hasDropdown}
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
            variant={
              isDarkMode && variant === 'default' ? 'defaultDarkMode' : variant
            }
            {...restProps}
          >
            <StyledGrid>
              <Row>
                <ButtonContentCol buttonSize={size} center flex grow middle>
                  {children}
                </ButtonContentCol>
                {hasDropdown && (
                  <DropdownArrowCol
                    flex
                    middle
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    shrink
                  >
                    <Icon
                      fill={textColor}
                      name="chevron-down-sharp"
                      size={dropdownArrowSizes[size]}
                    />
                  </DropdownArrowCol>
                )}
              </Row>
            </StyledGrid>
          </StyledButton>
        )}
        {hasDropdown && isDropdownDisplayed && !disabled && (
          <StyledTransition
            distance={10}
            duration={animation.durations.faster}
            in={isDropdownOpen}
            type="slideFade"
          >
            <DropdownWrapper
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              {cloneElement(dropdown)}
            </DropdownWrapper>
          </StyledTransition>
        )}
      </ButtonWrapper>
    );
  }
);

Button.displayName = 'Button';
