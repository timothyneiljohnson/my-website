import React from 'react';
import styled from 'styled-components';
import { Button } from '.';
import { ButtonProps } from './types';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { colors, gradients, spacing } from '../design-tokens';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Link } from '../Link';

export default {
  title: 'Common/Button',
  component: Button,
};

const ButtonDemoRow = ({
  dropdown,
  variant,
  disabled = false,
}: ButtonProps) => {
  const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];

  return (
    <>
      {sizes.map((size: ButtonProps['size'], i) => (
        <div key={i}>
          <div style={{ margin: '12px 12px 12px 0' }}>
            <Button
              disabled={disabled}
              dropdown={dropdown}
              size={size}
              variant={variant}
            >
              {`Button ${size}`}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  white-space: nowrap;
  padding: ${spacing.x2};
  display: block;

  &:hover {
    background-color: ${colors.grayLightest};
  }
`;

const MyDropdownWrapper = styled.div`
  min-width: 180px;
  border: 1px solid ${colors.grayLighter};
`;

const Dropdown = () => (
  <MyDropdownWrapper>
    <StyledLink href="#">Option 1</StyledLink>
    <StyledLink href="#">Option 2</StyledLink>
    <StyledLink href="#">Option 3</StyledLink>
  </MyDropdownWrapper>
);

export const ButtonVariantsAndSizes = () => (
  <table>
    <thead>
      <tr>
        <td>primary</td>
        <td>secondary</td>
        <td>default</td>
        <td>disabled</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ButtonDemoRow variant="primary" />
        </td>
        <td>
          <ButtonDemoRow variant="secondary" />
        </td>
        <td>
          <ButtonDemoRow variant="default" />
        </td>
        <td>
          <ButtonDemoRow disabled />
        </td>
      </tr>
    </tbody>
  </table>
);
ButtonVariantsAndSizes.decorators = globalDecorators;

export const FullWidthButton = () => (
  <div style={{ width: '300px', background: colors.grayLightest }}>
    <div style={{ marginBottom: '12px' }}>
      <Button variant="default">Normal Button</Button>
    </div>
    <div>
      <Button fullWidth variant="default">
        Full-Width Button
      </Button>
    </div>
  </div>
);
FullWidthButton.decorators = globalDecorators;

export const PillButton = () => (
  <div style={{ width: '300px', background: colors.grayLightest }}>
    <div style={{ marginBottom: '12px' }}>
      <Button variant="default">Normal Button</Button>
    </div>
    <div>
      <Button pill variant="default">
        Pill Button
      </Button>
    </div>
  </div>
);
PillButton.decorators = globalDecorators;

export const ButtonWithIcon = () => (
  <>
    <div style={{ marginBottom: '12px' }}>
      <Button variant="default">Normal Button</Button>
    </div>
    <div>
      <Button variant="default">
        <Icon name="camera" size={18} />
        Button with Icon
      </Button>
    </div>
  </>
);
ButtonWithIcon.decorators = globalDecorators;

export const ButtonWithGradient = () => (
  <>
    <div style={{ marginBottom: '12px' }}>
      <Button bgColor={colors.quaternary} textColor={colors.white}>
        Normal Button
      </Button>
    </div>
    <div>
      <Button
        gradientEnd={gradients.primary.end}
        gradientStart={gradients.primary.start}
        textColor={colors.white}
      >
        Button with Gradient
      </Button>
    </div>
  </>
);
ButtonWithGradient.decorators = globalDecorators;

export const ButtonWithPointerGradient = () => (
  <>
    <div style={{ marginBottom: '12px' }}>
      <Button bgColor={colors.quaternary} textColor={colors.white}>
        Normal Button
      </Button>
    </div>
    <div>
      <Button
        gradientEnd={gradients.primary.end}
        gradientStart={gradients.primary.start}
        pointerGradient
        textColor={colors.white}
      >
        Button with Pointer Gradient
      </Button>
    </div>
  </>
);
ButtonWithPointerGradient.decorators = globalDecorators;

export const ButtonWithDropdown = () => (
  <table>
    <thead>
      <tr>
        <td>primary</td>
        <td>secondary</td>
        <td>default</td>
        <td>disabled</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ButtonDemoRow dropdown={<Dropdown />} variant="primary" />
        </td>
        <td>
          <ButtonDemoRow dropdown={<Dropdown />} variant="secondary" />
        </td>
        <td>
          <ButtonDemoRow dropdown={<Dropdown />} variant="default" />
        </td>
        <td>
          <ButtonDemoRow disabled dropdown={<Dropdown />} />
        </td>
      </tr>
    </tbody>
  </table>
);
ButtonWithDropdown.decorators = globalDecorators;
