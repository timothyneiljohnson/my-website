import styled from 'styled-components';
import { focusStyle } from '../design-tokens';

export const StyledStarRatingInput = styled.div`
  position: relative;

  &:hover label {
    opacity: 1;
  }
`;

export const HiddenInput = styled.input`
  display: none;

  &:checked ~ label:before,
  & + label:hover ~ label:before,
  & + label:hover:before {
    opacity: 1;
  }
`;

interface StarLabelProps {
  size: number;
}
export const StarLabel = styled.label<StarLabelProps>`
  display: inline-block;
  opacity: 0;
  &:focus {
    ${focusStyle.default}
  }

  &:hover ~ label {
    opacity: 0;
  }

  &:nth-of-type(odd) {
    width: ${({ size }) => size / 2}px;
    overflow: hidden;
  }

  &:nth-of-type(even) {
    width: ${({ size }) => size / 2}px;
    transform: scaleX(-1);
    overflow: hidden;
  }

  &[data-active=true] {
    opacity: 1;
  }
`;

export const StarFieldset = styled.fieldset`
  position: absolute;
  top: 0;
`;
