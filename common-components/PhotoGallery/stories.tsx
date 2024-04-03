import React from 'react';
import { PhotoGallery } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';

export default {
  title: 'Common/PhotoGallery',
  component: PhotoGallery,
};

export const Default = () => (
  <PhotoGallery
    images={[
      { url: '/image-assets/photo-gallery/1.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/2.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/3.jpg', ratio: 2 / 3 },
      { url: '/image-assets/photo-gallery/4.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/5.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/6.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/7.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/8.jpg', ratio: 2 / 3 },
      { url: '/image-assets/photo-gallery/9.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/10.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/11.jpg', ratio: 2 / 3 },
      { url: '/image-assets/photo-gallery/12.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/13.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/14.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/15.jpg', ratio: 2 / 3 },
      { url: '/image-assets/photo-gallery/16.jpg', ratio: 45 / 29 },
      { url: '/image-assets/photo-gallery/17.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/18.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/19.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/20.jpg', ratio: 120 / 77 },
      { url: '/image-assets/photo-gallery/21.jpg', ratio: 5 / 2 },
      { url: '/image-assets/photo-gallery/22.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/23.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/24.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/25.jpg', ratio: 3 / 2 },
      {
        url: '/image-assets/photo-gallery/26.jpg',
        ratio: 895 / 1501,
      },
      { url: '/image-assets/photo-gallery/27.jpg', ratio: 3 / 2 },
      { url: '/image-assets/photo-gallery/28.jpg', ratio: 2 / 3 },
      { url: '/image-assets/photo-gallery/29.jpg', ratio: 2 / 3 },
    ]}
  />
);
Default.args = {
  height: 250,
  width: 400,
  topMargin: 30,
};
Default.decorators = globalDecorators;
