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
  padding: ${spacing.x3} ${spacing.x4};
  margin-left: ${spacing.x5};
  line-height: 16px;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  background: ${colors.grayDarker};
  ${decorations.borderRadiusStyle}
  ${decorations.boxShadow.smStyle}

  &:before {
    content: '';
    position: absolute;
    right: 100%;
    top: ${spacing.x3};
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 8px solid ${colors.grayDarker};
    border-bottom: 8px solid transparent;
  }
`;

export const PostInfoDate = styled.span`
  color: ${colors.grayLighter};
`;
