import React from 'react';
import styled from 'styled-components';
import { Skeleton, SkeletonCircle, SkeletonText, SkeletonSVG } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { Col } from '../Col';
import { colors, decorations, spacing } from '../design-tokens';
import { Grid } from '../Grid';
import { Row } from '../Row';

export default {
  title: 'Common/Skeleton',
  component: Skeleton,
};

export const Default = ({ color, height, rounded, width, topMargin }) => (
  <Skeleton
    color={color}
    height={height}
    rounded={rounded}
    topMargin={topMargin}
    width={width}
  />
);
Default.args = {
  color: colors.grayLighter,
  height: 250,
  topMargin: 30,
  type: 'rectangle',
  width: 400,
};
Default.decorators = globalDecorators;

export const Rounded = ({ color, height, rounded, size, topMargin, width }) => (
  <Skeleton
    color={color}
    height={height}
    rounded={rounded}
    size={size}
    topMargin={topMargin}
    width={width}
  />
);
Rounded.args = {
  color: colors.grayLighter,
  height: 250,
  rounded: true,
  topMargin: 30,
  width: 400,
};
Rounded.decorators = globalDecorators;

export const Circle = ({ color, height, topMargin, width }) => (
  <SkeletonCircle
    color={color}
    height={height}
    topMargin={topMargin}
    width={width}
  />
);
Circle.args = {
  color: colors.grayLighter,
  height: 250,
  topMargin: 30,
  width: 400,
};
Circle.decorators = globalDecorators;

export const Text = ({ color, height, lines, size, topMargin, width }) => (
  <SkeletonText
    color={color}
    height={height}
    lines={lines}
    size={size}
    topMargin={topMargin}
    width={width}
  />
);
Text.args = {
  color: colors.grayLighter,
  height: 18,
  lines: 3,
  topMargin: 12,
  width: 400,
};
Text.decorators = globalDecorators;

export const CustomSVG = ({ color, height, size, topMargin, width }) => (
  <SkeletonSVG
    color={color}
    height={height}
    size={size}
    src="/ionicons/cog-sharp.svg"
    topMargin={topMargin}
    width={width}
  />
);
CustomSVG.args = {
  color: colors.grayLighter,
  size: 250,
  topMargin: 30,
};
CustomSVG.decorators = globalDecorators;

export const CombinedExample = ({ color }) => {
  const StoryStage = styled.div`
    position: fixed;
    background-color: ${colors.grayLighter};
    width: 100%;
    height: 100%;
  `;

  const StyledContainer = styled.div`
    background-color: ${colors.white};
    padding: ${spacing.x4};
    margin: ${spacing.x8};
    height: 274px;
    width: 300px;
    ${decorations.borderRadiusStyle}
  `;
  return (
    <StoryStage>
      <StyledContainer>
        <Grid>
          <Row>
            <Col flex shrink>
              <SkeletonCircle color={color} size={60} />
            </Col>
            <Col flex grow />
          </Row>
        </Grid>
        <SkeletonText color={color} rounded width={80} />
        <SkeletonText color={color} rounded width={160} />
        <div style={{ marginTop: '24px' }}>
          <SkeletonText color={color} lines={2} rounded />
          <SkeletonText color={color} rounded width={230} />
        </div>
        <div style={{ marginTop: '24px' }}>
          <SkeletonText color={color} rounded width={180} />
        </div>
      </StyledContainer>
    </StoryStage>
  );
};
CombinedExample.args = {
  color: colors.grayLighter,
};
CombinedExample.decorators = globalDecorators;
