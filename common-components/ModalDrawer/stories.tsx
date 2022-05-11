import React, { useRef, useState } from 'react';
import { ModalDrawer } from '..';
import { ProfilePulldownContent } from '../../components/ProfilePulldownContent';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import { Button } from '../Button';
import { colors } from '../design-tokens';

export default {
  title: 'Common/ModalDrawer',
  component: ModalDrawer,
};

export const Default = ({ closeType, customClose, direction, title }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const onCloseCallback = () => {
    setIsOpen(false);
    ref.current.focus();
  };

  return (
    <div style={{ position: 'fixed', left: '0' }}>
      <div style={{ margin: '16px' }}>
        <Button onClick={handleClick} ref={ref}>
          Open ModalDrawer
        </Button>
      </div>
      <ModalDrawer
        background={colors.grayLightest}
        closeType={closeType}
        customClose={customClose}
        direction={direction}
        isOpen={isOpen}
        onCloseCallback={onCloseCallback}
        title={title}
      >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </ModalDrawer>
    </div>
  );
};
Default.decorators = globalDecorators;
Default.args = {
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
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const onCloseCallback = () => {
    setIsOpen(false);
    ref.current.focus();
  };

  return (
    <div style={{ position: 'fixed', left: '0' }}>
      <div style={{ margin: '16px' }}>
        <Button onClick={handleClick} ref={ref}>
          Open ModalDrawer
        </Button>
      </div>
      <ModalDrawer
        background={background}
        closeType={closeType}
        customClose={customClose}
        direction={direction}
        isOpen={isOpen}
        onCloseCallback={onCloseCallback}
        title={title}
      >
        <ProfilePulldownContent />
      </ModalDrawer>
    </div>
  );
};
CustomClose.decorators = globalDecorators;
CustomClose.args = {
  background: colors.grayLightest,
  direction: 'top',
  closeType: 'floating',
  customClose: <Button size="sm">Close profile</Button>,
  size: 330,
};
