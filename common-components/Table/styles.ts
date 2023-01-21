import styled from 'styled-components';
import { Icon } from '../Icon';
import { colors, spacing } from '../design-tokens';

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 1rem;
  width: 100%;

  table {
    font-size: 14px;
    width: 100%;
  }

  tr {
    width: 100%;

    th,
    td {
      padding: ${spacing.x2} ${spacing.x3};
      text-align: left;

      &[data-no-padding='true'] {
        padding: 0;
      }
    }

    th {
      font-size: 13px;
      border-bottom: 3px solid ${colors.grayLightest};
      font-weight: 500;

      button {
        text-align: left;
        font-weight: 500;
      }
    }

    td {
      border-bottom: 1px solid ${colors.grayLightest};
    }

    &:last-of-type {
      td {
        border-bottom: none;
      }
    }
  }
`;

export const StyledCaret = styled(Icon)`
  margin-left: 2px;
`;
