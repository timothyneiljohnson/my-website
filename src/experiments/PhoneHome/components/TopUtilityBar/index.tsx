import { useEffect, useState } from 'react';
import { Grid } from '../../../../../common-components/Grid';
import { Col } from '../../../../../common-components/Col';
import { Icon } from '../../../../../common-components/Icon';
import { Row } from '../../../../../common-components/Row';
import { colors } from '../../../../../common-components/design-tokens';
import {
  CellNetwork,
  TopUtilityBarStyled,
  UtilityTimeStyled,
  NavigateIcon,
  MoonIcon,
  AlarmIcon,
  BatteryIcon,
} from './styles';

interface TopUtilityBarProps {
  isSearchOpen?: boolean;
}

export const TopUtilityBar = ({ isSearchOpen }: TopUtilityBarProps) => {
  const getTime = () => {
    const now = new Date();
    const time = now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return time;
  };
  const [timeState, setTimeState] = useState(getTime());

  useEffect(() => {
    // Set interval then clear to avoid memory leak
    const secondInterval = setInterval(() => {
      setTimeState(getTime());
    }, 1000);
    return () => clearInterval(secondInterval);
  }, [timeState]);

  return (
    <TopUtilityBarStyled isSearchOpen={isSearchOpen}>
      <Grid>
        <Row>
          <Col flex middle xs={4}>
            <Icon fill={colors.white} name="cellular" size={30} />
            <CellNetwork>ET Network</CellNetwork>
            <Icon fill={colors.white} name="wifi-sharp" size={34} />
          </Col>
          <Col bottom center flex xs={4}>
            <UtilityTimeStyled>{timeState}</UtilityTimeStyled>
          </Col>
          <Col end flex middle xs={4}>
            <NavigateIcon
              fill={colors.white}
              name="navigate-outline"
              size={22}
            />
            <MoonIcon fill={colors.white} name="moon" size={20} />
            <AlarmIcon fill={colors.white} name="alarm" size={25} />
            <BatteryIcon fill={colors.white} name="battery-full" size={38} />
          </Col>
        </Row>
      </Grid>
    </TopUtilityBarStyled>
  );
};

TopUtilityBar.displayName = 'TopUtilityBar';
