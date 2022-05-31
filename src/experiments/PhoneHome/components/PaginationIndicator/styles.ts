import styled from 'styled-components';
import { colors } from '../../../../../common-components/design-tokens';

export const PaginationIndicatorStyled = styled.div`
  width: 100%;
  position: absolute;
  bottom: 183px;
  height: 42px;
  text-align: center;
`;

interface PageIndicatorDotProps {
  isSelected?: boolean;
}
export const PageIndicatorDot = styled.div<PageIndicatorDotProps>`
  height: 16px;
  width: 16px;
  margin: 0 9.5px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 250ms ease;
  background-color: ${({ isSelected }) =>
    isSelected ? colors.white : 'rgb(255, 255, 255, 0.7)'};
  backdrop-filter: ${({ isSelected }) =>
    isSelected ? 'none' : 'blur(8px) brightness(70%)'};
`;
