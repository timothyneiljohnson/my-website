import React, { useRef, useState } from 'react';
import { ModalDrawer } from '..';
import { ProfilePulldownContent } from '../../components/ProfilePulldownContent';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import { Button } from '../Button';

export default {
  title: 'Common/ModalDrawer',
  component: ModalDrawer,
};

export const Direction = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const onCloseCallback = () => {
    setIsOpen(false);
    ref.current.focus();
  };

  return (
    <>
      <Button onClick={handleClick} ref={ref}>Open ModalDrawer</Button>
      <ModalDrawer
        direction="top"
        isOpen={isOpen}
        onCloseCallback={onCloseCallback}
      >
        <ProfilePulldownContent />
      </ModalDrawer>
    </>
  );
};
Direction.decorators = globalDecorators;
