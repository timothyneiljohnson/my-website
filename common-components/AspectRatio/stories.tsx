import React from 'react';
import { AspectRatio } from '.';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';
import { Heading } from '../Heading';
import { Image } from '../Image';

export default {
  title: 'Common/AspectRatio',
  component: AspectRatio,
};

export const Default = ({ ratio }) => (
  <div style={{ width: '500px' }}>
    {[
      {
        string: '2.35 / 1',
        ratio: 2.35 / 1,
      },
      {
        string: '16 / 9',
        ratio: 16 / 9,
      },
      {
        string: '3 / 2',
        ratio: 3 / 2,
      },
      { string: '1 / 1', ratio: 1 / 1 },
    ].map((aspectRatio, i) => (
      <>
        <Heading level={3}>{ratio ?? aspectRatio.string}</Heading>
        <AspectRatio key={i} ratio={ratio ?? aspectRatio.ratio}>
          <Image
            alt="Stained Glass"
            height={300}
            sizes="33vw"
            src="/image-assets/photo-gallery/4.jpg"
            width={100}
          />
        </AspectRatio>
      </>
    ))}
  </div>
);
Default.args = {};
Default.decorators = globalDecorators;
