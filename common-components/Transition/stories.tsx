import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Transition, TransitionProps } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import { Button } from '../Button';
import { animation, colors } from '../design-tokens';
import { Default } from '../Lottie/stories';

export default {
  title: 'Common/Transition',
  component: Transition,
};

const StyledButton = styled(Button)`
  margin-bottom: 16px;
`;

const BaseTransitionStory = ({
  direction,
  distance,
  duration,
  type,
}: TransitionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleShowToast = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <StyledButton onClick={toggleShowToast} size="xs">
        Toggle Show Lottie
      </StyledButton>
      <div>
        <Transition
          direction={direction}
          distance={distance}
          duration={duration}
          in={isOpen}
          type={type}
        >
          <Default background={colors.secondary} height={250} width={250} />
        </Transition>
      </div>
    </>
  );
};

export const Fade = () => <BaseTransitionStory type="fade" />;
Fade.decorators = globalDecorators;

export const Slide = () => (
  <div style={{ overflow: 'hidden' }}>
    <BaseTransitionStory
      distance={300}
      duration={animation.durations.slow}
      type="slide"
    />
  </div>
);
Slide.decorators = globalDecorators;

export const ScaleFade = ({ direction }) => (
  <BaseTransitionStory direction={direction} type="scaleFade" />
);
ScaleFade.decorators = globalDecorators;

export const SlideFade = ({ direction }) => (
  <BaseTransitionStory direction={direction} type="slideFade" />
);
SlideFade.decorators = globalDecorators;

export const SlideBounce = ({ direction }) => (
  <div style={{ overflow: 'hidden' }}>
    <BaseTransitionStory
      direction={direction}
      distance={300}
      duration={animation.durations.slow}
      type="slideBounce"
    />
  </div>
);
SlideBounce.decorators = globalDecorators;

export const SlideFadeBounce = ({ direction }) => (
  <BaseTransitionStory type="slideFadeBounce" />
);
SlideFadeBounce.decorators = globalDecorators;

export const ScaleFadeBounce = ({ direction }) => (
  <BaseTransitionStory direction={direction} type="scaleFadeBounce" />
);
ScaleFadeBounce.decorators = globalDecorators;
