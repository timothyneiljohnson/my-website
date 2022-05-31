import styled, { css } from 'styled-components';
import { Col } from '../../../common-components/Col';
import { Grid } from '../../../common-components/Grid';
import { Heading } from '../../../common-components/Heading';
import { Icon } from '../../../common-components/Icon';
import { Row } from '../../../common-components/Row';
import {
  animation,
  colors,
  decorations,
  mediaQueries,
} from '../../../common-components/design-tokens';

export const DEFAULT_PRIMARY_COLOR = '#2ab859';

interface HoverIconProps {
  isActive?: boolean;
}
export const HoverIcon = styled(Icon)<HoverIconProps>`
  margin: 0 15px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

export const SuperHeading = styled(Heading)`
  @media ${mediaQueries.sm} {
    font-size: 26px;
    line-height: 32px;
  }

  @media ${mediaQueries.md} {
    font-size: 46px;
    line-height: 52px;
  }

  @media ${mediaQueries.lg} {
    font-size: 62px;
    line-height: 68px;
  }

  @media ${mediaQueries.xl} {
    font-size: 80px;
    line-height: 86px;
  }
`;

export const MainPlayIcon = styled(Icon)`
  transition: transform ${animation.durations.faster}ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledMusicPlayer = styled.div`
  height: 1000px;
  width: 100%;
  background: ${colors.grayDarker};
  position: relative;
  display: block;
  color: ${colors.grayLighter};
  font-size: 13.5px;
  letter-spacing: 0.2px;
`;

export const TracklistGrid = styled(Grid)`
  padding: 20px 30px 30px;
  background: rgb(0, 0, 0, 0.2);
  min-height: min-content;
  overflow: auto;
  width: 100%;
`;

export const TracklistInfoRow = styled(Row)`
  padding-top: 150px;

  @media ${mediaQueries.xsMax} {
    padding-top: 30px;
  }
`;

interface TrackNumberProps {
  isCurrentTrack?: boolean;
  primaryColor?: string;
}
export const TrackNumber = styled.div<TrackNumberProps>`
  color: ${({ isCurrentTrack, primaryColor }) =>
    isCurrentTrack ? primaryColor : 'inherit'};
  display: block;
`;

export const TrackPlayIcon = styled(Icon)`
  display: none;
  top: 0;
  right: -5px;
  position: absolute;
`;

export const SoundBarGif = styled(Icon)`
  top: 0;
  right: -2px;
  position: absolute;
`;

export const TrackRow = styled(Row)`
  padding: 12px 0;
  font-size: 15.5px;
  ${decorations.borderRadiusStyle};

  &:hover {
    background: rgb(255, 255, 255, 0.1);

    ${HoverIcon} {
      opacity: 1;
    }

    ${TrackNumber} {
      display: none;
    }

    ${TrackPlayIcon} {
      display: block;
    }

    ${SoundBarGif} {
      display: none;
    }
  }
`;

interface CurrentTrackTitleProps {
  animationDistance?: number;
  animate?: boolean;
}
export const CurrentTrackTitle = styled.span<CurrentTrackTitleProps>`
  white-space: nowrap;
  display: inline-block;

  ${({ animate, animationDistance }) =>
    animate &&
    css`
      animation: ${animation.keyframes.overflowMarqueeBounce(animationDistance)}
        ${animationDistance * 320}ms linear;
    `}
`;

export const CurrentTrackSummaryCol = styled(Col)`
  mask-image: linear-gradient(90deg, rgb(24, 24, 24) 80%, transparent);
`;

interface RepeatTrackDecorationProps {
  color: string;
}
export const RepeatTrackDecoration = styled.div<RepeatTrackDecorationProps>`
  &:before {
    content: '1';
    position: absolute;
    font-size: 10.5px;
    top: -8px;
    left: 8.5px;
    color: ${({ color }) => color};
  }
`;
