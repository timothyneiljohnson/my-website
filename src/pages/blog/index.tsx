import Head from 'next/head';
import { getAllPostsWithImagesFromServer } from '../../lib/utils';
import { Skeleton } from '../../../common-components/Skeleton';
import { PageShell } from '../../components/PageShell';
import { Post } from '../../components/Post';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { colors } from '../../../common-components/design-tokens';

const Blog = ({ posts }) => {
  const { isDarkMode } = useStorageDarkMode();
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
          content="Recent Posts"
          itemProp="name"
          name="twitter:title"
          property="og:title"
        />
      </Head>
      <PageShell>
        {posts.length > 0 ? (
          <div>
            {posts.map((post, i) => (
              <div key={i}>
                <Post post={post} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {[...Array(4)].map((_, i) => (
              <Skeleton
                color={isDarkMode ? colors.grayDark : colors.grayLighter}
                height={400}
                key={i}
                rounded
                topMargin={70}
              />
            ))}
          </>
        )}
      </PageShell>
    </>
  );
};

// This also gets called at build time
export const getStaticProps = async () => {
  const posts = (await getAllPostsWithImagesFromServer()) || [];

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
