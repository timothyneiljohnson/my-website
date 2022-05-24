import parse from 'html-react-parser';
import Prism from 'prismjs';
import { useEffect } from 'react';
import { getAuthor, getFeaturedImage } from '../../lib/utils';
import { POSTS_API_URL } from '../../lib/constants';
import { PageShell } from '../../components/PageShell';
import {
  FeaturedImageWrapper,
  PostHeading,
  StyledDate,
  StyledPageContainer,
} from '../../components/PageShell/styles';
import { colors } from '../../common-components/design-tokens';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';
import { Image } from '../../common-components/Image';

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
          animateTyping
          color={isDarkMode ? colors.white : null}
          level={1}
          size={1}
        >
          {title}
        </PostHeading>
        {featuredImg && (
          <FeaturedImageWrapper>
            <Image
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              priority
              src={featuredImg}
            />
          </FeaturedImageWrapper>
        )}
        <StyledDate isDarkMode={isDarkMode}>
          {`Published on ${formattedDate}`}
        </StyledDate>
        <div>{parse(content)}</div>
      </StyledPageContainer>
    </PageShell>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const posts = await (await fetch(POSTS_API_URL)).json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  const post = await (await fetch(`${POSTS_API_URL}/${params.id}`)).json();

  const featuredImg = post.featured_media
    ? await getFeaturedImage(post.featured_media)
    : null;
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
