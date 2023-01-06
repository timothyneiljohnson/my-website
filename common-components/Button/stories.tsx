import React from 'react';
import { Button, ButtonProps } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { colors, gradients } from '../design-tokens';
import { Icon } from '../Icon';

export default {
  title: 'Common/Button',
  component: Button,
};

const ButtonDemoRow = ({ variant, disabled = false }: ButtonProps) => {
  const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];

  return (
    <>
      {sizes.map((size: ButtonProps['size'], i) => (
        <div key={i}>
          <div style={{ margin: '12px 12px 12px 0' }}>
            <Button disabled={disabled} size={size} variant={variant}>
              {`Button ${size}`}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

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
          <ButtonDemoRow />
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
    <div>
      <Button>Normal Button</Button>
    </div>
    <div>
      <Button fullWidth>Full-Width Button</Button>
    </div>
  </div>
);
FullWidthButton.decorators = globalDecorators;

export const ButtonWithIcon = () => (
  <>
    <div>
      <Button>Normal Button</Button>
    </div>
    <div>
      <Button>
        <Icon name="camera" size={18} />
        Button with Icon
      </Button>
    </div>
  </>
);
ButtonWithIcon.decorators = globalDecorators;

export const ButtonWithGradient = () => (
  <>
    <div>
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
    <div>
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
