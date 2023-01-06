import Head from 'next/head';
import { getAllPostsWithImagesFromServer } from '../../lib/utils';
import { Placeholder } from '../../../common-components/Placeholder';
import { PageShell } from '../../components/PageShell';
import { Post } from '../../components/Post';

const Blog = ({ posts }) => (
  <>
    <Head>
      <meta
        content="https://www.timothyneil.com/fb-og.jpg"
        itemProp="image primaryImageOfPage"
        property="og:image"
      />
      <meta
        content="Blog"
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
            <Placeholder height={400} key={i} topMargin={70} />
          ))}
        </>
      )}
    </PageShell>
  </>
);

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
