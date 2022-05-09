import React from 'react';
import { CollapsingDetails } from '..';

export default {
  title: 'Common/CollapsingDetails',
  component: CollapsingDetails,
};

const SAMPLE_TEXT = `When the Pawn Hits the Conflicts He Thinks Like a King What He Knows
Throws the Blows When He Goes to the Fight and He'll Win the Whole
Thing 'Fore He Enters the Ring There's No Body to Batter When Your
Mind Is Your Might So When You Go Solo, You Hold Your Own Hand and
Remember That Depth Is the Greatest of Heights and If You Know Where
You Stand, Then You Know Where to Land and If You Fall It Won't
Matter, Cuz You'll Know That You're Right`;

export const Default = () => (
  <div style={{ width: '400px' }}>
    <CollapsingDetails
      closeText="Click for less info"
      title="Click for more info"
    >
      <h1>{SAMPLE_TEXT}</h1>
    </CollapsingDetails>
  </div>
);
