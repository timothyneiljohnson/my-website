import React from 'react';
import { Banner } from '.';
import { MediaQueriesProvider } from '../media-queries-context';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import BannerPostsFixture from './__tests__/__fixtures__';

export default {
  title: 'Common/Banner',
  component: Banner,
};

export const Default = () => (
  <MediaQueriesProvider>
    <Banner slides={BannerPostsFixture} />
  </MediaQueriesProvider>
);
Default.decorators = globalDecorators;
