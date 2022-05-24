import { useCallback, useEffect, useState } from 'react';
import { getAllPostsWithImagesFromServer } from '../../lib/utils';
import { Placeholder } from '../../common-components/Placeholder';
import { PageShell } from '../../components/PageShell';
import { Post } from '../../components/Post';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const onCallback = useCallback((postsFromServer) => {
    setPosts(postsFromServer);
  }, []);

  useEffect(() => {
    getAllPostsWithImagesFromServer(onCallback);
  }, [onCallback]);

  return (
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
};

export default Blog;
