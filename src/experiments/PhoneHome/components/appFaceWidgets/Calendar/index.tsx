import React from 'react';
import { AppFaceWidgetWrapper } from '../styles';
import { DateOfMonthStyled, DayOfWeekStyled } from './styles';

export const Calendar = () => {
  const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date();
  const dateOfMonth = date.getDate();
  const dayOfWeek = daysOfWeekShort[date.getDay()];
  return (
    <AppFaceWidgetWrapper>
      <DayOfWeekStyled>{dayOfWeek}</DayOfWeekStyled>
      <DateOfMonthStyled>{dateOfMonth}</DateOfMonthStyled>
    </AppFaceWidgetWrapper>
  );
};

Calendar.displayName = 'Calendar';
