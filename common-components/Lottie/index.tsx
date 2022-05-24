import { useEffect, useRef, useState } from 'react';
import { StyledLottie } from './styles';

interface LottieProps {
  background?: string;
  className?: string;
  height?: number;
  src?: string;
  width?: number;
}
export const Lottie = ({
  background,
  className,
  height,
  src,
  width,
}: LottieProps) => {
  const containerRef = useRef(null);
  const [lottieWeb, setLottieWeb] = useState(null);

  useEffect(() => {
    import('lottie-web').then((LottieWeb) => setLottieWeb(LottieWeb?.default));
  }, [lottieWeb]);

  useEffect(() => {
    let animation = null;
    if (lottieWeb && containerRef.current) {
      animation = lottieWeb.loadAnimation({
        container: containerRef.current,
        path: src,
      });
    }
    return () => animation?.destroy();
  }, [lottieWeb, src]);

  return (
    <StyledLottie
      background={background}
      className={className}
      height={height}
      ref={containerRef}
      width={width}
    />
  );
};

Lottie.displayName = 'Lottie';
