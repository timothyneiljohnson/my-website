import React from 'react';
import { AppFaceWidgetWrapper } from '../styles';
import { ClockPin, HourHand, MinuteHand, SecondHand } from './styles';

export const Clock = () => {
  const date = new Date();
  const secs = date.getSeconds();
  const mins = date.getMinutes() * 60;
  const hours = (date.getHours() * 3600) + mins;

  return (
    <AppFaceWidgetWrapper>
      <div style={{ transform: 'rotate(180deg)', height: '100%', width: '100%' }}>
        <HourHand style={{ animationDelay: `${-hours}s` }} />
        <MinuteHand style={{ animationDelay: `${-mins}s` }} />
        <ClockPin />
        <SecondHand style={{ animationDelay: `${-secs}s` }} />
      </div>
    </AppFaceWidgetWrapper>
  );
};

Clock.displayName = 'Clock';
