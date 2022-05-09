import React from 'react';
import styled from 'styled-components';
import { Ribbon } from '..';
import { colors, gradients } from '../design-tokens';

export default {
  title: 'Common/Ribbon',
  component: Ribbon,
};

const DemoRibbonParent = styled.div`
  width: 500px;
  height: 288px;
  position: relative;
  background-color: ${colors.grayLighter};
`;

export const Default = ({
  endStyle,
  gradientStart,
  gradientEnd,
  thickness,
  textColor,
  color,
  left,
  right,
  top,
  bottom,
  side,
  reverse,
}) => (
  <DemoRibbonParent>
    <Ribbon
      bottom={bottom}
      color={color}
      endStyle={endStyle}
      gradientEnd={gradientEnd}
      gradientStart={gradientStart}
      left={left}
      reverse={reverse}
      right={right}
      side={side}
      textColor={textColor}
      thickness={thickness}
      top={top}
    >
      Simple
      <br />
      Ribbon
    </Ribbon>
  </DemoRibbonParent>
);
Default.args = {
  thickness: 62,
  color: colors.tertiary,
  textColor: colors.white,
  right: 25,
};

export const EndStyles = ({
  endStyle,
  gradientStart,
  gradientEnd,
  thickness,
  textColor,
  color,
  left,
  right,
  top,
  bottom,
  side,
  reverse,
}) => (
  <DemoRibbonParent>
    <Ribbon
      bottom={bottom}
      color={color}
      endStyle={endStyle}
      gradientEnd={gradientEnd}
      gradientStart={gradientStart}
      left={left}
      reverse={reverse}
      right={right}
      side={side}
      textColor={textColor}
      thickness={thickness}
      top={top}
    >
      endStyle: 'point'
    </Ribbon>
  </DemoRibbonParent>
);
EndStyles.args = {
  thickness: 40,
  endStyle: 'point',
  color: colors.secondary,
  textColor: colors.white,
  side: 'left',
  reverse: true,
  top: 20,
};

export const WithGradient = ({
  endStyle,
  gradientStart,
  gradientEnd,
  thickness,
  textColor,
  color,
  left,
  right,
  top,
  bottom,
  side,
  reverse,
}) => (
  <DemoRibbonParent>
    <Ribbon
      bottom={bottom}
      color={color}
      endStyle={endStyle}
      gradientEnd={gradientEnd}
      gradientStart={gradientStart}
      left={left}
      reverse={reverse}
      right={right}
      side={side}
      textColor={textColor}
      thickness={thickness}
      top={top}
    >
      Ribbon with Gradient
    </Ribbon>
  </DemoRibbonParent>
);
WithGradient.args = {
  thickness: 40,
  gradientStart: gradients.quaternary.start,
  gradientEnd: gradients.quaternary.end,
  textColor: colors.white,
  top: 25,
  side: 'right',
  endStyle: 'slant',
};
