import React from 'react';
import { ButtonProps } from '.';
import { Button } from '..';
import { globalDecorators } from '../../storybook/decoratorHelpers';
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
      {sizes.map((size: ButtonProps['size']) => (
        <tr>
          <div style={{ margin: '8px 8px 8px 0' }}>
            <Button disabled={disabled} size={size} variant={variant}>
              {`Button ${size}`}
            </Button>
          </div>
        </tr>
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
  </table>
);
ButtonVariantsAndSizes.decorators = globalDecorators;

export const FullWidthButton = () => (
  <table style={{ width: '300px', background: colors.grayLightest }}>
    <tr>
      <Button>Normal Button</Button>
    </tr>
    <tr>
      <Button fullWidth>Full-Width Button</Button>
    </tr>
  </table>
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
