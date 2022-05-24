import React from 'react';
import { Footer } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';

export default {
  title: 'Site/Footer',
  component: Footer,
};

export const Default = () => <Footer handleOpenProfileDrawer={() => null} />;
Default.decorators = globalDecorators;
