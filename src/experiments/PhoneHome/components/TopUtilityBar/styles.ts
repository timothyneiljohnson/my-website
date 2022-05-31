import styled from 'styled-components';
import { Icon } from '../../../../../common-components/Icon';

interface TopUtilityBarProps {
  isSearchOpen?: boolean;
}
export const TopUtilityBarStyled = styled.div<TopUtilityBarProps>`
  width: 100%;
  height: 40px;
  background-size: contain;
  position: absolute;
  padding: 0 12px;
  top: 0;
  ${({ isSearchOpen }) => (isSearchOpen ? 'z-index: 999;' : null)}
`;

export const CellNetwork = styled.span`
  font-weight: 300;
  font-size: 22px;
  letter-spacing: 1.8px;
  line-height: 22px;
  margin: 4px 10px 0 14px;
`;

export const UtilityTimeStyled = styled.span`
  font-size: 22.5px;
  letter-spacing: 1.75px;
  line-height: 32px;
`;

export const NavigateIcon = styled(Icon)`
  margin: 0 6px;
`;
export const MoonIcon = styled(Icon)`
  margin: 0 3px;
`;
export const AlarmIcon = styled(Icon)`
  margin: 0 5px;
`;
export const BatteryIcon = styled(Icon)`
  margin: 0 6px;
`;
