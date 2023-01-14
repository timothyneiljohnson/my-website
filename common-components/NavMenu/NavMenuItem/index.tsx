import { forwardRef } from 'react';
import { Col } from '../../Col';
import { Grid } from '../../Grid';
import { Heading } from '../../Heading';
import { Row } from '../../Row';
import { StyledArrow, StyledNavMenuItem } from './styles';

interface NavMenuItemProps {
  hasSubItems: boolean;
  isOpen: boolean;
  navColor: string;
  title: string;
}

export const NavMenuItem = forwardRef<HTMLDivElement, NavMenuItemProps>(
  ({ isOpen, navColor, hasSubItems, title }: NavMenuItemProps, ref) => (
    <StyledNavMenuItem ref={ref}>
      <Grid>
        <Row>
          <Col center flex grow middle>
            <Heading color={navColor} level={1} noMargin size={4}>
              {title}
            </Heading>
          </Col>
          {hasSubItems && (
            <Col center flex middle shrink>
              <StyledArrow
                fill={navColor}
                isOpen={isOpen}
                name="chevron-down"
                size={12}
              />
            </Col>
          )}
        </Row>
      </Grid>
    </StyledNavMenuItem>
  )
);

NavMenuItem.displayName = 'NavMenuItem';
