import React from 'react';
import { FeaturedPost } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import FeaturedPostFixture from './__tests__/__fixtures__';

export default {
  title: 'Site/FeaturedPost',
  component: FeaturedPost,
};

export const Default = () => <FeaturedPost post={FeaturedPostFixture} />;
Default.decorators = globalDecorators;
