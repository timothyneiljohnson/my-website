import { useCallback, useState } from 'react';
import { StandardSizes } from '../types';
import { HiddenCheckbox, StyledToggleLabel, ToggleSwitch } from './styles';

interface ToggleProps {
  inactiveColor?: string;
  activeColor?: string;
  size?: StandardSizes;
}
export const Toggle = ({
  inactiveColor = '#d6d8dc',
  activeColor = '#1f74fb',
  size,
}: ToggleProps) => {
  const [toggleValue, setToggleValue] = useState(false);
  const toggleToggle = useCallback(() => {
    setToggleValue(!toggleValue);
  }, [toggleValue]);

  return (
    <StyledToggleLabel
      isActive={toggleValue}
      inactiveColor={inactiveColor}
      activeColor={activeColor}
      size={size}
    >
      <HiddenCheckbox onChange={toggleToggle} />
      <ToggleSwitch isActive={toggleValue} />
    </StyledToggleLabel>
  );
};

Toggle.displayName = 'Toggle';
