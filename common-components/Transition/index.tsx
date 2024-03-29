import { forwardRef, HTMLAttributes, useCallback, useEffect, useState } from 'react';
import { animation } from '../design-tokens';
import { SideNames } from '../types';
import { StyledTransition } from './styles';
import { TransitionTypes } from './types';

export interface TransitionProps extends HTMLAttributes<HTMLDivElement> {
  children?: any;
  className?: string;
  direction?: SideNames;
  distance?: number;
  duration?: number;
  in?: boolean;
  initialScale?: number;
  isDisplayedCallback?: (isDisplayed: boolean) => void;
  style?: any;
  type?: TransitionTypes;
}

export const Transition = forwardRef<HTMLDivElement, TransitionProps>(
  ({
    children,
    className,
    direction = 'bottom',
    distance = 20,
    duration = animation.durations.fast,
    in: inValue,
    initialScale = 0.9,
    isDisplayedCallback,
    style,
    type = 'fade',
    ...restProps
  }: TransitionProps, ref) => {
  const [isShown, setIsShown] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const onAnimationEnd = useCallback(() => {
    if (!inValue) {
      setIsShown(false); // Hide after animation ends
      if (isDisplayedCallback) {
        isDisplayedCallback(false); // Tell component when it's no longer displayed
      }
    }
    setShouldAnimate(false); // animation end
  }, [inValue, isDisplayedCallback]);

  useEffect(() => {
    if (inValue !== isShown) {
      // Immediately show element when "in" changes to true
      if (inValue) {
        setIsShown(true);
        if (isDisplayedCallback) {
          isDisplayedCallback(true); // Tell component when it's no longer displayed
        }
      }
      setShouldAnimate(true); // animation start
    }
  }, [isDisplayedCallback, isShown, inValue]);

  let keyframe = animation.keyframes.fadeIn;
  let timingFunction = 'ease-in-out';
  switch (type) {
    case 'slide':
      keyframe = animation.keyframes.slideIn(direction, distance);
      break;
    case 'slideFade':
      keyframe = animation.keyframes.slideFadeIn(direction, distance);
      break;
    case 'scaleFade':
      keyframe = animation.keyframes.scaleFadeIn(initialScale);
      break;
    case 'slideBounce':
      keyframe = animation.keyframes.slideIn(direction, distance);
      timingFunction = animation.curve.bounce;
      break;
    case 'slideFadeBounce':
      keyframe = animation.keyframes.slideFadeIn(direction, distance);
      timingFunction = animation.curve.bounce;
      break;
    case 'scaleFadeBounce':
      keyframe = animation.keyframes.scaleFadeIn(initialScale);
      timingFunction = animation.curve.bounce;
      break;
    default:
      break;
  }

  return (
    <StyledTransition
      className={className}
      duration={duration}
      inValue={inValue}
      isShown={isShown}
      keyframe={keyframe}
      onAnimationEnd={onAnimationEnd}
      ref={ref}
      shouldAnimate={shouldAnimate}
      style={style}
      timingFunction={timingFunction}
      {...restProps}
    >
      {children}
    </StyledTransition>
  );
});

Transition.displayName = 'Transition';
