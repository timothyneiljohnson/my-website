import React from 'react';
import { NavMenu } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { colors, gradients } from '../design-tokens';

export default {
  title: 'Common/NavMenu',
  component: NavMenu,
};

const contextFixture = [
  {
    title: 'Latest',
    subItems: [
      {
        title: 'Lorem ipsum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget euismod nisi.',
        url: '#',
      },
      {
        title: 'Integer orci urna',
        description: 'Pulvinar id dolor eu, dignissim lacinia diam.',
        url: '#',
      },
      {
        title: 'Donec vitae nisl ultricies',
        description: 'suscipit enim id, vulputate ipsum.',
        url: '#',
      },
      {
        title: 'Duis purus arcu',
        description: 'Posuere id libero in, feugiat varius dolor.',
        url: '#',
      },
      {
        title: 'Praesent a velit urna',
        description: 'Quisque ac velit sed purus fermentum cursus id at neque.',
        url: '#',
      },
      {
        title: 'Praesent ex erat',
        description: 'Sagittis eget fringilla a, tempus at nisi.',
        url: '#',
      },
    ],
  },
  {
    title: 'About',
    subItems: [
      {
        title: 'Lorem ipsum',
        description: 'Sed eget euismod nisi.',
        url: '#',
      },
      {
        title: 'Integer orci urna',
        description: 'Pulvinar id dolor eu, dignissim lacinia diam.',
        url: '#',
      },
      {
        title: 'Donec vitae nisl ultricies',
        description: 'suscipit enim id, vulputate ipsum.',
        url: '#',
      },
    ],
  },
  {
    title: 'Follow',
    subItems: [
      {
        title: 'Facebook',
        description: '@this-is-a-test',
        url: '#',
      },
      {
        title: 'Twitter',
        description: '@this-is-a-test',
        url: '#',
      },
      {
        title: 'TikTok',
        description: '@this-is-a-test',
        url: '#',
      },
      {
        title: 'Instragram',
        description: '@this-is-a-test',
        url: '#',
      },
      {
        title: 'LinkedIn',
        description: '@this-is-a-test',
        url: '#',
      },
    ],
  },
  {
    title: 'Contact',
    url: '#',
  },
];

export const WithGradient = ({ gradientEnd, gradientStart, navColor }) => (
  <div
    style={{
      marginTop: '60px',
      textAlign: 'center',
      height: '1000px',
      background: colors.grayDarker,
    }}
  >
    <NavMenu
      content={contextFixture}
      gradientEnd={gradientEnd}
      gradientStart={gradientStart}
      navColor={navColor}
    />
  </div>
);
WithGradient.args = {
  bgColor: colors.white,
  gradientEnd: gradients.primary.end,
  gradientStart: gradients.primary.start,
  navColor: colors.white,
};
WithGradient.decorators = globalDecorators;

export const Default = ({ bgColor, navColor }) => (
  <div
    style={{
      marginTop: '60px',
      textAlign: 'center',
      height: '1000px',
      background: colors.grayDarker,
    }}
  >
    <NavMenu bgColor={bgColor} content={contextFixture} navColor={navColor} />
  </div>
);
Default.args = {
  bgColor: colors.white,
  navColor: colors.secondary,
};
Default.decorators = globalDecorators;
