import React from 'react';
import { PhotoGallery } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';

export default {
  title: 'Common/PhotoGallery',
  component: PhotoGallery,
};

export const Default = () => (
  <PhotoGallery
    imageUrls={[...Array(29)].map(
      (_, i) => `/image-assets/photo-gallery/${i + 1}.jpg`
    )}
  />
);
Default.args = {
  height: 250,
  width: 400,
  topMargin: 30,
};
Default.decorators = globalDecorators;
