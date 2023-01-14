import {
  cloneElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { animation, colors } from '../design-tokens';
import {
  TooltipTransition,
  TooltipAndTriggerWrapper,
  TooltipTriggerWrapper,
} from './styles';

interface TooltipProps {
  bgColor?: string;
  children: ReactNode;
  className?: string;
  content: ReactElement;
}
export const Tooltip = ({
  bgColor = colors.white,
  children,
  className,
  content,
}: TooltipProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipDestinationX, setTooltipDestinationX] = useState(0);
  const [tooltipDestinationY, setTooltipDestinationY] = useState(0);
  const handleOpenTooltip = useCallback(() => {
    const tooltipOpenTimeout = setTimeout(() => {
      setIsTooltipOpen(true);
    }, 200);
    return () => clearTimeout(tooltipOpenTimeout);
  }, []);
  const handleCloseTooltip = useCallback(() => {
    const tooltipCloseTimeout = setTimeout(() => {
      setIsTooltipOpen(false);
    }, 300);
    return () => clearTimeout(tooltipCloseTimeout);
  }, []);

  const targetRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (targetRef?.current && tooltipRef?.current) {
      const {
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
      } = targetRef.current.getBoundingClientRect();
      const { height: tooltipHeight, width: tooltipWidth } =
        tooltipRef.current.getBoundingClientRect();
      setTooltipDestinationY(targetTop - tooltipHeight - 12);
      setTooltipDestinationX(targetLeft + targetWidth / 2 - tooltipWidth / 2);
    }
  }, [targetRef, tooltipRef]);

  return (
    <TooltipAndTriggerWrapper>
      <TooltipTriggerWrapper
        onMouseEnter={handleOpenTooltip}
        onMouseLeave={handleCloseTooltip}
        ref={targetRef}
      >
        {children}
      </TooltipTriggerWrapper>
      <TooltipTransition
        bgColor={bgColor}
        className={className}
        distance={10}
        duration={animation.durations.faster}
        in={isTooltipOpen}
        onMouseEnter={handleOpenTooltip}
        ref={tooltipRef}
        style={{
          '--destination-x': tooltipDestinationX,
          '--destination-y': tooltipDestinationY,
        }}
        type="slideFade"
      >
        {cloneElement(content)}
      </TooltipTransition>
    </TooltipAndTriggerWrapper>
  );
};

Tooltip.displayName = 'Tooltip';
