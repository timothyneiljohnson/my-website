import styled from 'styled-components';
import {
  animation,
  spacing,
} from '../../design-tokens';
import { Icon } from '../../Icon';

export const StyledNavMenuItem = styled.div`
  display: flex;
  align-items: center;
`;

interface StyledArrowProps {
  isOpen: boolean;
}
export const StyledArrow = styled(Icon)<StyledArrowProps>`
  transition: transform ${animation.durations.faster}ms ease-in-out;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
  margin-left: ${spacing.x1};
`;
