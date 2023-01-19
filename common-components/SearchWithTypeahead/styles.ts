import styled from 'styled-components';
import { decorations, focusStyle, spacing } from '../design-tokens';
import { Icon } from '../Icon';
import { StandardSizes } from '../types';

const containerSizeMap = {
  xs: 28,
  sm: 32,
  md: 38,
  lg: 44,
  xl: 48,
};

const fontSizeMap = {
  xs: 13,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

const resultFontSizeMap = {
  xs: 13,
  sm: 14,
  md: 14,
  lg: 16,
  xl: 18,
};

interface SearchContainerProps {
  size: StandardSizes;
  style: any;
}
export const SearchContainer = styled.div<SearchContainerProps>`
  position: relative;
  height: ${({ size }) => `${containerSizeMap[size]}px`};
  width: 100%;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  ${decorations.borderRadiusStyle}

  input {
    font-size: ${({ size }) => `${fontSizeMap[size]}px`};
  }
`;

export const SearchInput = styled.input`
  color: var(--text-color);
  height: 100%;
  width: 100%;
  background: none;
  padding-left: ${spacing.x2};

  &::placeholder {
    color: var(--placeholder-color);
  }

  &:focus {
    outline: none;
  }
`;

export const TypeaheadDropdown = styled.ul`
  position: absolute;
  width: calc(100% + 2px);
  height: auto;
  top: calc(100% - 3px);
  left: -1px;
  padding-top: 1px;
  max-height: 310px;
  overflow: auto;
  list-style: none;
  margin: 0;
  border: 1px solid var(--border-color);
  border-top: none;
  background-color: var(--bg-color);
  border-radius: 0 0 6px 6px;
`;

interface TypeaheadResultProps {
  size: StandardSizes;
}
export const TypeaheadResult = styled.a<TypeaheadResultProps>`
  display: block;
  padding: ${spacing.x3};
  cursor: pointer;
  font-size: ${({ size }) => resultFontSizeMap[size]}px;

  &:hover, &:focus {
    background: rgba(0, 0, 0, .08);
  }

  &:focus {
    ${focusStyle.tight}
  }
`;

export const SearchIcon = styled(Icon)`
  margin-left: ${spacing.x2};
`;
