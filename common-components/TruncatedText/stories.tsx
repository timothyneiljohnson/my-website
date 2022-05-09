import React from 'react';
import { TruncatedText } from '..';

export default {
  title: 'Common/TruncatedText',
  component: TruncatedText,
};

const SAMPLE_TEXT = `When the Pawn Hits the Conflicts He Thinks Like a King What He Knows
Throws the Blows When He Goes to the Fight and He'll Win the Whole
Thing 'Fore He Enters the Ring There's No Body to Batter When Your
Mind Is Your Might So When You Go Solo, You Hold Your Own Hand and
Remember That Depth Is the Greatest of Heights and If You Know Where
You Stand, Then You Know Where to Land and If You Fall It Won't
Matter, Cuz You'll Know That You're Right`;

export const CharacterLimit = () => (
  <div style={{ width: '400px' }}>
    <TruncatedText characters={13} expandable>
      {SAMPLE_TEXT}
    </TruncatedText>
  </div>
);

export const LineLimit = () => (
  <div style={{ width: '400px' }}>
    <TruncatedText lines={3} expandable>
      {SAMPLE_TEXT}
    </TruncatedText>
  </div>
);

export const CustomOpenCloseText = () => (
  <div style={{ width: '300px' }}>
    <TruncatedText lines={5} expandable openText="Say more, please" closeText="That's a little much, I take it back">
      {SAMPLE_TEXT}
    </TruncatedText>
  </div>
);
CustomOpenCloseText.storyName = 'Custom Open + Close Text';
