import axios from 'axios';
import parse from 'html-react-parser';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { getAuthor, getFeaturedImage } from '../../lib/utils';
import { POSTS_API_URL } from '../../lib/constants';
import { PageShell } from '../../components/PageShell';
import {
  FeaturedPageImage,
  PostHeading,
  StyledDate,
  StyledPageContainer,
} from '../../components/PageShell/styles';
import { colors } from '../../common-components/design-tokens';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';

const Post = ({ title, featuredImg, content, date }) => {
  // PrismJS requires the DOM
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(new Date(date));

  const { isDarkMode } = useStorageDarkMode();
  return (
    <PageShell>
      <StyledPageContainer isDarkMode={isDarkMode}>
        <PostHeading
            level={1}
            size={1}
            color={isDarkMode ? colors.grayLightest : null}
            animateTyping
          >
          {title}
        </PostHeading>
        <div>
          <FeaturedPageImage src={featuredImg} />
        </div>
        <StyledDate>Published on {formattedDate}</StyledDate>
        <div>{parse(content)}</div>
      </StyledPageContainer>
    </PageShell>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const res = await axios.get(POSTS_API_URL);
  const posts = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
  const post = await res.data;

  const featuredImg = await getFeaturedImage(post.featured_media);
  const author = await getAuthor(post.author);

  return {
    props: {
      title: post.title.rendered,
      content: post.content.rendered,
      featuredImg,
      author,
      date: post.date,
    },
  };
};

export default Post;
