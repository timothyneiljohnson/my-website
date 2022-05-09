import styled from 'styled-components';

interface StyledIconProps {
  fill?: string;
  fullWidth?: boolean;
  height?: number;
  hoverFill?: string;
  name?: string;
  rotate?: number;
  size?: number;
  src?: string;
  width?: number;
}

export const StyledIcon = styled.div<StyledIconProps>`
  display: inline-block;
  ${({ rotate }) =>
    `${rotate !== undefined ? `transform: rotate(${rotate}deg)` : ''}`};
  ${({ fill, src }) =>
    fill
      ? `
    background-color: ${fill};
    mask: ${src ? `url(${src}) no-repeat center left` : 'none'};
    height: ${({ height }) => `${height > 0 ? `${height}px` : 'auto'}`};
    mask-size: contain;
  `
      : `
    background: ${src ? `url(${src}) no-repeat center left` : 'none'};
    background-size: contain;
  `}

  height: ${({ height }) => `${height > 0 ? `${height}px` : 'auto'}`};
  width: ${({ width }) => `${width > 0 ? `${width}px` : 'auto'}`};
  width: ${({ fullWidth }) => `${fullWidth ? '100%' : undefined}`};

  &:hover {
    background-color: ${({ fill, hoverFill }) =>
      hoverFill ?? fill};
  }
`;
