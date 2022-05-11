import styled from 'styled-components';
import { animation, colors } from '../design-tokens';
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
  isOpen?: boolean;
  detailsHeight?: number;
}
export const DetailsSection = styled.div<DetailsSectionProps>`
  transition: height ${animation.durations.fast}ms ease-in-out;
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  height: ${({ isOpen, detailsHeight }) => isOpen ? `${detailsHeight + 24}px` : '0'};
  margin: ${({ isOpen }) => isOpen ? '16px' : '0'};
`;

interface StyledIconProps {
  isOpen?: boolean;
}
export const StyledIcon = styled(Icon)<StyledIconProps>`
  transition: transform ${animation.durations.fast}ms ease-in-out;
  transform: rotate(${({ isOpen }) => isOpen ? 180 : 0}deg);
`;

export const ToggleButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px 10px 8px 16px;
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
  height: 30px;
`;
