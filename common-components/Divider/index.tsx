import { colors } from '../design-tokens';
import { StyledDivider } from './styles';

interface DividerProps {
  color?: string;
  height?: number;
}
export const Divider = ({
  color = colors.grayDark,
  height = 1,
}: DividerProps) => (
  <StyledDivider color={color} height={height} />
);

Divider.displayName = 'Divider';
