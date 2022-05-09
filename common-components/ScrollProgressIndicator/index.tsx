import { useCallback, useEffect, useState } from 'react';
import {
  ScrollProgressIndicatorWrapper,
  StyledScrollProgressIndicator,
} from './styles';

interface ScrollProgressIndicatorProps {
  className?: string;
  color?: string;
  height?: number;
}
export const ScrollProgressIndicator = ({
  className,
  color,
  height,
}: ScrollProgressIndicatorProps) => {
  const [progress, setProgress] = useState(0);

  const scrollCallback = useCallback(
    (event) => {
      const { scrollTop, clientHeight, scrollHeight } =
        event.target?.scrollingElement ?? {};
      const maxScroll = scrollHeight - clientHeight;
      const scrollProgress = scrollTop / maxScroll;

      setProgress(scrollProgress);
    },
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', scrollCallback);
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  });

  return (
    <ScrollProgressIndicatorWrapper
      className={className}
      height={height}
      style={{
        '--indicator-height': height,
        '--scroll-progress': progress,
      }}
    >
      <StyledScrollProgressIndicator color={color} />
    </ScrollProgressIndicatorWrapper>
  );
};

ScrollProgressIndicator.displayName = 'ScrollProgressIndicator';
