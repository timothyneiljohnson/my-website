import { Carousel } from '.';
import { FeaturedPost } from '../../src/components/FeaturedPost';
import { ItemsWithCategoriesFixture } from '../FilterableList/__tests__/__fixtures__';
import { globalDecorators } from '../../src/storybook/decoratorHelpers';

export default {
  title: 'Common/Carousel',
  component: Carousel,
};

export const Default = ({ height }) => (
  <Carousel height={height}>
    {ItemsWithCategoriesFixture.map((post, i) => (
      <FeaturedPost
        key={i}
        post={post}
        style={{ minWidth: '200px', minHeight: `calc(${height}px - 10px)` }}
      />
    ))}
  </Carousel>
);
Default.args = {
  height: 400,
};
Default.decorators = globalDecorators;
