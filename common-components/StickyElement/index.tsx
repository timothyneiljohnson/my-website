import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { StickyElementWrapper, StickyElementInner } from './styles';

interface StickyElementProps {
  children: ReactNode;
  targetRef?: MutableRefObject<HTMLDivElement | null>;
  targetTopOffset?: number;
  targetBottomOffset?: number;
}

export const StickyElement = ({
  children,
  targetTopOffset = 0,
  targetBottomOffset,
  targetRef,
}: StickyElementProps) => {
  const [isStickyElementFixed, setIsStickyElementFixed] = useState(false);

  const scrollCallback = useCallback(() => {
    const targetRefTopPosition = targetRef.current?.getBoundingClientRect().top;
    const targetRefBottomPosition =
      targetRef.current?.getBoundingClientRect().bottom;
    setIsStickyElementFixed(
      targetRefTopPosition <= targetTopOffset &&
        (!targetBottomOffset || targetRefBottomPosition >= targetBottomOffset)
    );
  }, [targetBottomOffset, targetRef, targetTopOffset]);

  useEffect(() => {
    window.addEventListener('scroll', scrollCallback);
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  });

  return (
    <StickyElementWrapper>
      <StickyElementInner
        isFixed={isStickyElementFixed}
        targetTopOffset={targetTopOffset}
      >
        {children}
      </StickyElementInner>
    </StickyElementWrapper>
  );
};

StickyElement.displayName = 'StickyElement';
