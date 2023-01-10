import styled from 'styled-components';
import { animation, focusStyle, spacing } from '../design-tokens';

export const StyledTabs = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;
export const TabButtonsWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const TabContentsWrapper = styled.div``;

export const TabButton = styled.button`
  display: inline-block;
  margin: ${spacing.x2} ${spacing.x2};
  padding: ${spacing.x1} ${spacing.x2};
  &:focus {
    ${focusStyle.default};
  }
`;

interface TabButtonProps {
  isSelected: boolean;
}
export const TabContent = styled.div<TabButtonProps>`
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
`;

interface ActiveTabLineProps {
  color: string;
  left: number;
  width: number;
}

export const ActiveTabLine = styled.div<ActiveTabLineProps>`
  position: absolute;
  bottom: 0;
  transition: left ${animation.durations.faster}ms,
    width ${animation.durations.faster}ms;
  height: 5px;
  background-color: ${({ color }) => color};
  pointer-events: none;
  ${({ width }) => (width ? `width: ${width}px;` : '')}
  ${({ left }) => (left ? `left: ${left}px;` : '')}
`;
