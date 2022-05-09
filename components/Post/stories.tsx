import React from 'react';
import { Post } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import PostFixture from './__tests__/__fixtures__';

export default {
  title: 'Site/Post',
  component: Post,
};

export const Default = () => <Post post={PostFixture} />;
Default.decorators = globalDecorators;
