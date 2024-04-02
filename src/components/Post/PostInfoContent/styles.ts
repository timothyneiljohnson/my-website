import styled from 'styled-components';
import {
  colors,
  decorations,
  spacing,
} from '../../../../common-components/design-tokens';

export const PostInfoWrapper = styled.div`
  color: ${colors.white};
  height: auto;
  width: calc(100% - ${spacing.x5});
  padding: ${spacing.x2} ${spacing.x4};
  margin-left: ${spacing.x5};
  line-height: 16px;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  border: ridge 1.2px ${colors.grayDark};
  background: linear-gradient(${colors.grayDark}, ${colors.grayDarkest});
  ${decorations.borderRadiusStyle}

  &:before {
    content: '';
    position: absolute;
    right: 100%;
    top: ${spacing.x3};
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 8px solid #4d4d4d;
    border-bottom: 8px solid transparent;
  }
`;

export const PostInfoDate = styled.span`
  color: ${colors.grayLighter};
`;
