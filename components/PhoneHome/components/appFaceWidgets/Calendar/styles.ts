import styled from 'styled-components';
import { colors } from '../../../../../common-components/design-tokens';

export const DayOfWeekStyled = styled.div`
  font-size: 24px;
  color: #eb5048;
  margin-top: 11px;
  text-transform: uppercase;
  line-height: 24px;
  letter-spacing: 1.5px;
`;

export const DateOfMonthStyled = styled.div`
  font-size: 75px;
  line-height: 75px;
  font-weight: 300;
  color: ${colors.grayDarker};
  letter-spacing: 1.5px;
`;
