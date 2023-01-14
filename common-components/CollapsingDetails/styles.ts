import styled from 'styled-components';
import { animation, colors, spacing } from '../design-tokens';
import { Icon } from '../Icon';

interface StyledCollapsingDetailsProps {
  characters?: number;
  lines?: number;
}

export const StyledCollapsingDetails = styled.div<StyledCollapsingDetailsProps>`
  overflow: hidden;
  background-color: ${colors.white};
  border-top: 1px ${colors.grayLighter} solid;
  border-bottom: 1px ${colors.grayLighter} solid;
`;

interface DetailsSectionProps {
  isOpen: boolean;
  isDisplayed: boolean;
  detailsHeight?: number;
}
export const DetailsSection = styled.div<DetailsSectionProps>`
  transition: height ${animation.durations.faster}ms ease-in-out;
  visibility: ${({ isDisplayed }) => (isDisplayed ? 'visible' : 'hidden')};
  height: ${({ isOpen, detailsHeight }) =>
    isOpen ? `${detailsHeight + 24}px` : '0'};
  margin: ${({ isDisplayed }) => (isDisplayed ? spacing.x4 : '0')};
`;

interface StyledIconProps {
  isOpen?: boolean;
}
export const StyledIcon = styled(Icon)<StyledIconProps>`
  transition: transform ${animation.durations.faster}ms ease-in-out;
  transform: rotate(${({ isOpen }) => isOpen ? 180 : 0}deg);
`;

export const ToggleButton = styled.button`
  width: 100%;
  height: 100%;
  padding: ${spacing.x2} 10px ${spacing.x2} ${spacing.x4};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const IconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 30px;
`;
