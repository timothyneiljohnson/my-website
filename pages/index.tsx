import { useCallback, useEffect, useState } from 'react';
import {
  getBannerPostsFromServer,
  getFeaturedCategoriesFromServer,
  getFeaturedPostsFromServer,
} from '../lib/utils';
import { Banner } from '../common-components/Banner';
import { FeaturedPost } from '../common-components/FeaturedPost';
import { FilterableList } from '../common-components/FilterableList';
import { Outdent } from '../common-components/Outdent';
import { Placeholder } from '../common-components/Placeholder';
import { PageShell } from '../components/PageShell';
import { FEATURED_CATEGORY_ID } from '../lib/constants';
import { useMediaQueries } from '../components/media-queries-context';

const Featured = () => {
  const [categories, setCategories] = useState([]);
  const [bannerPosts, setBannerPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const { reduceMotion } = useMediaQueries();

  const onBannerPostsCallback = useCallback((postsFromServer) => {
    setBannerPosts(postsFromServer);
  }, []);

  const onCategoriesCallback = useCallback((postsFromServer) => {
    setCategories(postsFromServer);
  }, []);

  const onFeaturedPostsCallback = useCallback((postsFromServer) => {
    setFeaturedPosts(postsFromServer);
  }, []);

  useEffect(() => {
    getBannerPostsFromServer(onBannerPostsCallback);
    getFeaturedCategoriesFromServer(onCategoriesCallback);
    getFeaturedPostsFromServer(onFeaturedPostsCallback);
  }, [onBannerPostsCallback, onCategoriesCallback, onFeaturedPostsCallback]);

  return (
    <PageShell>
      {bannerPosts.length > 0 ? (
        <Banner slides={bannerPosts} />
      ) : (
        <Placeholder height={450} />
      )}
      <Outdent horizontal={5}>
        {featuredPosts.length > 0 ? (
          <FilterableList
            allCategoryId={FEATURED_CATEGORY_ID}
            categories={categories}
            gap="8px"
            itemsWithCategories={featuredPosts}
            minWidth="180px"
            noAnimation={reduceMotion}
          >
            {featuredPosts.map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </FilterableList>
        ) : (
          <Placeholder height={300} topMargin={125} />
        )}
      </Outdent>
    </PageShell>
  );
};

export default Featured;
