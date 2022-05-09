import styled from 'styled-components';
import { colors, decorations } from '../../design-tokens';

export const PostInfoWrapper = styled.div`
  color: ${colors.white};
  height: auto;
  width: calc(100% - 20px);
  padding: 8px 16px;
  margin-left: 20px;
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
    top: 10px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 8px solid #4D4D4D;
    border-bottom: 8px solid transparent;
  }
`;

export const PostInfoDate = styled.span`
  color: ${colors.grayLight};
`;
