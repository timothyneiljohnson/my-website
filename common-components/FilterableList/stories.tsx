import React from 'react';
import { FilterableList } from '.';
import { globalDecorators } from '../../storybook/decoratorHelpers';
import { FeaturedPost } from '../FeaturedPost';
import {
  CategoriesFixture,
  ItemsWithCategoriesFixture,
} from './__tests__/__fixtures__';
import {
  CardsWithSuitsFixture,
  SuitsFixture,
} from './__tests__/__fixtures__/playingCards.fixture';

export default {
  title: 'Common/FilterableList',
  component: FilterableList,
};

export const Default = () => (
  <FilterableList
    allCategoryId={3}
    categories={CategoriesFixture}
    gap="8px"
    itemsWithCategories={ItemsWithCategoriesFixture}
    minWidth="180px"
  >
    {ItemsWithCategoriesFixture.map((post, index) => (
      <FeaturedPost key={index} post={post} />
    ))}
  </FilterableList>
);
Default.decorators = globalDecorators;

export const PlayingCardsDemo = () => (
  <FilterableList
    allCategoryId="all"
    categories={SuitsFixture}
    gap="20px"
    itemsWithCategories={CardsWithSuitsFixture}
    minWidth="140px"
  >
    {CardsWithSuitsFixture.map((card, index) => (
      <img alt="card" key={index} src={card.icon} />
    ))}
  </FilterableList>
);
PlayingCardsDemo.decorators = globalDecorators;
