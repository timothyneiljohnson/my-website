import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModalDrawerProps } from './types';
import { ProfilePulldownContent } from '../../src/components/ProfilePulldownContent';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { Button } from '../Button';
import { colors } from '../design-tokens';
import { useMediaQueries } from '../media-queries-context';

const DynamicModalDrawer = dynamic<ModalDrawerProps>(() =>
  import('.').then(
    ({ ModalDrawer }) => ModalDrawer
  )
);

export default {
  title: 'Common/ModalDrawer',
  component: DynamicModalDrawer,
};

const StyledStoryStageContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const StyledModalButtonContainer = styled.div`
  margin: 16px;
`;

export const Default = ({ closeType, customClose, direction, title }) => {
  const ref = useRef(null);
  const [isModalDrawerOpen, setIsModalDrawerOpen] = useState(false);
  const [isModalOverlayDisplayed, setIsModalOverlayDisplayed] = useState(false);
  const focusRef = useRef(null);

  const handleClick = () => setIsModalDrawerOpen(true);

  const onCloseCallback = useCallback(() => {
    setIsModalDrawerOpen(false);
    setTimeout(() => {
      setIsModalOverlayDisplayed(false);
    }, 400);
    if (focusRef && 'current' in focusRef) {
      focusRef.current?.focus();
    }
  }, [focusRef]);

  useEffect(() => {
    if (isModalDrawerOpen) {
      setIsModalOverlayDisplayed(true);
    }
  }, [isModalDrawerOpen]);

  return (
    <StyledStoryStageContainer>
      <StyledModalButtonContainer>
        <Button onClick={handleClick} ref={ref}>
          Open ModalDrawer
        </Button>
      </StyledModalButtonContainer>
      {isModalOverlayDisplayed && (
        <DynamicModalDrawer
          background={colors.grayLightest}
          closeType={closeType}
          customClose={customClose}
          direction={direction}
          isOpen={isModalDrawerOpen}
          onCloseCallback={onCloseCallback}
          title={title}
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </DynamicModalDrawer>
      )}
    </StyledStoryStageContainer>
  );
};
Default.decorators = globalDecorators;
Default.args = {
  direction: 'right',
  title: 'Lorem ipsum dolor sit amet',
  size: 330,
};

export const CustomClose = ({
  background,
  closeType,
  customClose,
  direction,
  title,
}) => {
  const ref = useRef(null);
  const [isModalDrawerOpen, setIsModalDrawerOpen] = useState(false);
  const [isModalOverlayDisplayed, setIsModalOverlayDisplayed] = useState(false);
  const focusRef = useRef(null);
  const { xsMax, smMax, mdMax } = useMediaQueries();

  let modalSize = 350;
  if (xsMax) {
    modalSize = 400;
  } else if (smMax) {
    modalSize = 360;
  } else if (mdMax) {
    modalSize = 380;
  }

  const handleClick = () => setIsModalDrawerOpen(true);

  const onCloseCallback = useCallback(() => {
    setIsModalDrawerOpen(false);
    setTimeout(() => {
      setIsModalOverlayDisplayed(false);
    }, 400);
    if (focusRef && 'current' in focusRef) {
      focusRef.current?.focus();
    }
  }, [focusRef]);

  useEffect(() => {
    if (isModalDrawerOpen) {
      setIsModalOverlayDisplayed(true);
    }
  }, [isModalDrawerOpen]);

  return (
    <StyledStoryStageContainer>
      <StyledModalButtonContainer>
        <Button onClick={handleClick} ref={ref}>
          Open ModalDrawer
        </Button>
      </StyledModalButtonContainer>
      {isModalOverlayDisplayed && (
        <DynamicModalDrawer
          background={background}
          closeType={closeType}
          customClose={customClose}
          direction={direction}
          isOpen={isModalDrawerOpen}
          onCloseCallback={onCloseCallback}
          size={modalSize}
          title={title}
        >
          <ProfilePulldownContent />
        </DynamicModalDrawer>
      )}
    </StyledStoryStageContainer>
  );
};
CustomClose.decorators = globalDecorators;
CustomClose.args = {
  background: colors.grayLightest,
  direction: 'top',
  closeType: 'floating',
  customClose: <Button size="sm">Close Profile</Button>,
};

export const Float = ({
  background,
  closeType,
  customClose,
  direction,
  modalType,
  title,
}) => {
  const ref = useRef(null);
  const [isModalDrawerOpen, setIsModalDrawerOpen] = useState(false);
  const [isModalOverlayDisplayed, setIsModalOverlayDisplayed] = useState(false);
  const focusRef = useRef(null);

  const handleClick = () => setIsModalDrawerOpen(true);

  const onCloseCallback = useCallback(() => {
    setIsModalDrawerOpen(false);
    setTimeout(() => {
      setIsModalOverlayDisplayed(false);
    }, 400);
    if (focusRef && 'current' in focusRef) {
      focusRef.current?.focus();
    }
  }, [focusRef]);

  useEffect(() => {
    if (isModalDrawerOpen) {
      setIsModalOverlayDisplayed(true);
    }
  }, [isModalDrawerOpen]);

  return (
    <StyledStoryStageContainer>
      <StyledModalButtonContainer>
        <Button onClick={handleClick} ref={ref}>
          Open ModalDrawer
        </Button>
      </StyledModalButtonContainer>
      {isModalOverlayDisplayed && (
        <DynamicModalDrawer
          background={background}
          closeType={closeType}
          customClose={customClose}
          direction={direction}
          isOpen={isModalDrawerOpen}
          modalType={modalType}
          onCloseCallback={onCloseCallback}
          title={title}
        >
          <ProfilePulldownContent />
        </DynamicModalDrawer>
      )}
    </StyledStoryStageContainer>
  );
};
Float.decorators = globalDecorators;
Float.args = {
  background: colors.grayLightest,
  modalType: 'float',
  size: 330,
};

export const Fullscreen = ({
  background,
  closeType,
  customClose,
  direction,
  modalType,
  title,
}) => {
  const ref = useRef(null);
  const [isModalDrawerOpen, setIsModalDrawerOpen] = useState(false);
  const [isModalOverlayDisplayed, setIsModalOverlayDisplayed] = useState(false);
  const focusRef = useRef(null);

  const handleClick = () => setIsModalDrawerOpen(true);

  const onCloseCallback = useCallback(() => {
    setIsModalDrawerOpen(false);
    setTimeout(() => {
      setIsModalOverlayDisplayed(false);
    }, 400);
    if (focusRef && 'current' in focusRef) {
      focusRef.current?.focus();
    }
  }, [focusRef]);

  useEffect(() => {
    if (isModalDrawerOpen) {
      setIsModalOverlayDisplayed(true);
    }
  }, [isModalDrawerOpen]);

  return (
    <StyledStoryStageContainer>
      <StyledModalButtonContainer>
        <Button onClick={handleClick} ref={ref}>
          Open ModalDrawer
        </Button>
      </StyledModalButtonContainer>
      {isModalOverlayDisplayed && (
        <DynamicModalDrawer
          background={background}
          closeType={closeType}
          customClose={customClose}
          direction={direction}
          isOpen={isModalDrawerOpen}
          modalType={modalType}
          onCloseCallback={onCloseCallback}
          title={title}
        >
          <ProfilePulldownContent />
        </DynamicModalDrawer>
      )}
    </StyledStoryStageContainer>
  );
};
Fullscreen.decorators = globalDecorators;
Fullscreen.args = {
  background: colors.grayLightest,
  direction: 'top',
  modalType: 'fullscreen',
  size: 330,
};
