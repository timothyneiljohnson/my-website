import { cloneElement, forwardRef, useCallback, useState } from 'react';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { animation, buttons, colors } from '../design-tokens';
import {
  ButtonWrapper,
  DropdownArrowCol,
  DropdownWrapper,
  ButtonContentCol,
  StyledDropdownTransition,
  StyledGrid,
  StyledButton,
  StyledLinkAsButton,
} from './styles';
import { Icon } from '../Icon';
import { Row } from '../Row';
import { ButtonProps } from './types';

const dropdownArrowSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { isDarkMode = false } = useStorageDarkMode() ?? {};
    let {
      bgColor = isDarkMode ? colors.grayDark : colors.white,
      borderColor,
      textColor = isDarkMode ? colors.grayLightest : colors.grayDarkest,
      variant,
    } = props;
    const {
      disabled,
      dropdown,
      fullWidth,
      gradientEnd,
      gradientStart,
      isRound,
      pointerGradient,
      size = 'md',
      ...restProps
    } = props;
    const { children } = restProps;

    // SET VARIANT COLORS
    if (variant === 'default' && isDarkMode) {
      variant = 'defaultDarkMode';
    }

    switch (variant) {
      case 'primary':
        textColor = buttons.primary.text;
        bgColor = buttons.primary.bg;
        borderColor = buttons.primary.border;
        break;
      case 'secondary':
        textColor = buttons.secondary.text;
        bgColor = buttons.secondary.bg;
        borderColor = buttons.secondary.border;
        break;
      case 'default':
        bgColor = buttons.default.bg;
        borderColor = buttons.default.border;
        textColor = buttons.default.text;
        break;
      case 'defaultDarkMode':
        bgColor = buttons.defaultDarkMode.bg;
        borderColor = buttons.defaultDarkMode.border;
        textColor = buttons.defaultDarkMode.text;
        break;
      default:
        break;
    }
    if (disabled) {
      textColor = buttons.disabled.text;
      bgColor = buttons.disabled.bg;
      borderColor = buttons.disabled.border;
    }

    // POINTER GRADIENT LOGIC
    const hasGradient = Boolean(gradientStart);
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    const handleMouseMove = useCallback(
      (event) => {
        if (!pointerGradient) return;
        const { offsetX, offsetY } = event.nativeEvent;

        setMousePosition({ x: offsetX, y: offsetY });
      },
      [pointerGradient]
    );

    // DROPDOWN LOGIC
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

    const hasDropdown = Boolean(dropdown);
    const openDropdown = useCallback(() => {
      setIsDropdownOpen(true);
      setIsDropdownDisplayed(true);
    }, []);
    const closeDropdown = useCallback(() => {
      setIsDropdownOpen(false);
    }, []);
    const isDisplayedCallback = useCallback((isDisplayed: boolean) => {
      setIsDropdownDisplayed(isDisplayed);
    }, []);

    return (
      <ButtonWrapper fullWidth={fullWidth}>
        {restProps.href ? (
          <StyledLinkAsButton
            bgColor={bgColor}
            borderColor={borderColor}
            disabled={disabled}
            gradientEnd={gradientEnd}
            gradientStart={gradientStart}
            hasDropdown={hasDropdown}
            isRound={isRound}
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
            variantName={variant}
            {...restProps}
          >
            <StyledGrid>
              <Row>
                <ButtonContentCol
                  buttonSize={size}
                  center
                  flex
                  grow
                  hasGradient={hasGradient}
                  middle
                >
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
            gradientEnd={gradientEnd}
            gradientStart={gradientStart}
            hasDropdown={hasDropdown}
            isRound={isRound}
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
            variantName={variant}
            {...restProps}
          >
            <StyledGrid>
              <Row>
                <ButtonContentCol
                  buttonSize={size}
                  center
                  flex
                  grow
                  hasGradient={hasGradient}
                  isRound={isRound}
                  middle
                >
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
          <StyledDropdownTransition
            distance={10}
            duration={animation.durations.faster}
            in={isDropdownOpen}
            isDisplayedCallback={isDisplayedCallback}
            type="slideFade"
          >
            <DropdownWrapper
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              {cloneElement(dropdown)}
            </DropdownWrapper>
          </StyledDropdownTransition>
        )}
      </ButtonWrapper>
    );
  }
);

Button.displayName = 'Button';
