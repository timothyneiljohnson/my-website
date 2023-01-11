import React from 'react';
import styled from 'styled-components';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { animation, colors, spacing } from '../design-tokens';
import { DrawerMenu } from '.';
import { Grid } from '../Grid';
import { Row } from '../Row';
import { Col } from '../Col';
import { Icon } from '../Icon';
import { colorLuminance } from '../helpers';

export default {
  title: 'Common/DrawerMenu',
  component: DrawerMenu,
};

const StyledStoryStageContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const MenuItem = styled.a`
  display: block;
  padding: ${spacing.x3} ${spacing.x6};
  color: ${colors.grayLightest};
  transition: background-color ${animation.durations.fastest}ms ease-in-out;

  &:hover {
    text-decoration: underline;
    background-color: ${colorLuminance(colors.tertiary, -0.2)};
  }
`;

const MenuColTitle = styled(Col)`
  padding-left: ${spacing.x3};
`;

export const Default = ({ size }) => (
  <StyledStoryStageContainer>
    <DrawerMenu
      background={colors.tertiary}
      iconColor={colors.grayLightest}
      menuItems={[
        <MenuItem href="#" key={1}>
          <Grid>
            <Row>
              <Col flex middle shrink>
                <Icon fill={colors.grayLighter} name="cog" size={24} />
              </Col>
              <MenuColTitle flex grow middle>
                Work
              </MenuColTitle>
            </Row>
          </Grid>
        </MenuItem>,
        <MenuItem href="#" key={2}>
          <Grid>
            <Row>
              <Col flex middle shrink>
                <Icon fill={colors.secondary} name="list" size={24} />
              </Col>
              <MenuColTitle flex grow middle>
                Blog
              </MenuColTitle>
            </Row>
          </Grid>
        </MenuItem>,
        <MenuItem href="#" key={3}>
          <Grid>
            <Row>
              <Col flex middle shrink>
                <Icon fill={colors.quinary} name="person" size={24} />
              </Col>
              <MenuColTitle flex grow middle>
                Profile
              </MenuColTitle>
            </Row>
          </Grid>
        </MenuItem>,
        <MenuItem href="#" key={4}>
          <Grid>
            <Row>
              <Col flex middle shrink>
                <Icon fill={colors.primary} name="moon" size={24} />
              </Col>
              <MenuColTitle flex grow middle>
                Dark Mode
              </MenuColTitle>
            </Row>
          </Grid>
        </MenuItem>,
      ]}
      size={size}
    />
  </StyledStoryStageContainer>
);
Default.decorators = globalDecorators;
Default.args = {
  size: 320,
};
