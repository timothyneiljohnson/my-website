import Head from 'next/head';
import {
  getBannerPostsFromServer,
  getFeaturedCategoriesFromServer,
  getFeaturedPostsFromServer,
} from '../lib/utils';
import { Banner } from '../../common-components/Banner';
import { Heading } from '../../common-components/Heading';
import { FeaturedPost } from '../components/FeaturedPost';
import { FilterableList } from '../../common-components/FilterableList';
import { Outdent } from '../../common-components/Outdent';
import { Skeleton } from '../../common-components/Skeleton';
import { PageShell } from '../components/PageShell';
import { FEATURED_CATEGORY_ID } from '../lib/constants';
import {
  breakpoints,
  colors,
  spacing,
} from '../../common-components/design-tokens';
import { useStorageDarkMode } from '../../common-components/storage-dark-mode-context';
import { useMediaQueries } from '../../common-components/media-queries-context';
import {
  HomeSkeletonBannerAspectRatio,
  HomeSkeletonPlainGrid,
} from '../components/PageShell/styles';

const Featured = ({ bannerPosts, categories, featuredPosts }) => {
  const { isDarkMode } = useStorageDarkMode();
  const { xsMax, smMax } = useMediaQueries();

  return (
    <>
      <Head>
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://www.timothyneil.com/fb-og.jpg"
          itemProp="image primaryImageOfPage"
          name="twitter:image"
          property="og:image"
        />
        <meta
          content="My Portfolio"
          itemProp="name"
          name="twitter:title"
          property="og:title"
        />
      </Head>
      <PageShell>
        {bannerPosts.length > 0 ? (
          <Banner slides={bannerPosts} />
        ) : (
          <HomeSkeletonBannerAspectRatio ratio={smMax ? 16 / 9 : 2.35 / 1}>
            <Skeleton
              color={isDarkMode ? colors.grayDark : colors.grayLighter}
              height={425}
              rounded
            />
          </HomeSkeletonBannerAspectRatio>
        )}

        <>
          <div>
            <Heading
              color={isDarkMode ? colors.white : colors.grayDarker}
              size={2}
            >
              Highlighted articles
            </Heading>
          </div>

          {featuredPosts.length > 0 ? (
            <Outdent horizontal={5}>
              <FilterableList
                allCategoryId={FEATURED_CATEGORY_ID}
                categories={categories}
                gap={spacing.x2}
                itemsWithCategories={featuredPosts}
                minWidth={xsMax ? breakpoints.xsMax : '195px'}
              >
                {featuredPosts.map((post, index) => (
                  <FeaturedPost key={index} post={post} />
                ))}
              </FilterableList>
            </Outdent>
          ) : (
            <HomeSkeletonPlainGrid
              gap={spacing.x4}
              min={xsMax ? breakpoints.xsMax : '186px'}
            >
              {[...Array(10)].map((_, i) => (
                <Skeleton
                  color={isDarkMode ? colors.grayDark : colors.grayLighter}
                  height={385}
                  key={i}
                  rounded
                />
              ))}
            </HomeSkeletonPlainGrid>
          )}
        </>
      </PageShell>
    </>
  );
};

// This also gets called at build time
export const getStaticProps = async () => {
  const bannerPosts = (await getBannerPostsFromServer()) || [];
  const featuredPosts = (await getFeaturedPostsFromServer()) || [];
  const categories = (await getFeaturedCategoriesFromServer()) || [];

  return {
    props: {
      bannerPosts,
      categories,
      featuredPosts,
    },
  };
};

export default Featured;
