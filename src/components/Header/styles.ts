import styled from 'styled-components';
import { mediaQueries, spacing } from '../../../common-components/design-tokens';

interface StyledHeaderProps {
  isFullWidth: boolean;
}
export const StyledHeader = styled.header<StyledHeaderProps>`
  width: 100%;
  ${({ isFullWidth }) => !isFullWidth && 'max-width: 1032px;'}
  padding: ${spacing.x10} ${spacing.x4} ${spacing.x6};
  margin: 0 auto;

  @media ${mediaQueries.smMax} {
    padding: ${spacing.x6} ${spacing.x4} ${spacing.x5};
  }

  @media ${mediaQueries.xsMax} {
    padding: ${spacing.x4} ${spacing.x4} ${spacing.x4};
  }
`;
