import { getAllPostsWithImagesFromServer } from '../../lib/utils';
import { Placeholder } from '../../../common-components/Placeholder';
import { PageShell } from '../../components/PageShell';
import { Post } from '../../components/Post';

const Blog = ({ posts }) => (
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
);

// This also gets called at build time
export const getStaticProps = async () => {
  const posts = await getAllPostsWithImagesFromServer() || [];

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
