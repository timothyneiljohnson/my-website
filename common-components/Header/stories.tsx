import React from 'react';
import { Header } from '..';
import { globalDecorators } from '../../storybook/decoratorHelpers';

export default {
  title: 'Site/Header',
  component: Header,
};

export const Default = () => <Header handleOpenProfileDrawer={() => null} />;
Default.decorators = globalDecorators;
