import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Toast } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { Button } from '../Button';

export default {
  title: 'Common/Toast',
  component: Toast,
};

const StyledStoryStageContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const StyledToastButtonContainer = styled.div`
  margin: 140px 16px;
`;

const StyledButton = styled(Button)`
  margin-right: 12px;
`;

export const Default = ({ accent, background, color, customClose, direction, title }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [typeState, setTypeState] = useState(null);
  const handleClick = (typeValue: string) => {
    setIsOpen(true);
    setTypeState(typeValue);
  };
  const onCloseCallback = () => {
    setIsOpen(false);
  };

  return (
    <StyledStoryStageContainer>
      <StyledToastButtonContainer>
        <StyledButton onClick={() => handleClick('info')} ref={ref} size="xs">
          Show Info Toast
        </StyledButton>
        <StyledButton onClick={() => handleClick('warning')} ref={ref} size="xs">
          Show Warning Toast
        </StyledButton>
        <StyledButton onClick={() => handleClick('success')} ref={ref} size="xs">
          Show Success Toast
        </StyledButton>
        <StyledButton onClick={() => handleClick('error')} ref={ref} size="xs">
          Show Error Toast
        </StyledButton>
        <StyledButton onClick={() => handleClick('default')} ref={ref} size="xs">
          Show Default Toast
        </StyledButton>
      </StyledToastButtonContainer>
      <Toast
        accent={accent}
        background={background}
        color={color}
        customClose={customClose}
        direction={direction}
        isOpen={isOpen}
        onCloseCallback={onCloseCallback}
        title={title}
        type={typeState}
      >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Toast>
    </StyledStoryStageContainer>
  );
};
Default.decorators = globalDecorators;
Default.args = {
  title: 'Lorem ipsum dolor sit amet',
  type: 'info',
};
