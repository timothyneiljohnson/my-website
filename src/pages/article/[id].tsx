import parse from 'html-react-parser';
import Prism from 'prismjs';
import { useEffect } from 'react';
import Head from 'next/head';
import { getMedia } from '../../lib/utils';
import { ALL_POSTS_API_URL, POSTS_API_URL } from '../../lib/constants';
import { PageShell } from '../../components/PageShell';
import {
  FeaturedImageWrapper,
  PostContent,
  StyledDate,
  StyledPageContainer,
  StyledImage,
} from '../../components/PageShell/styles';
import { colors } from '../../../common-components/design-tokens';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { Heading } from '../../../common-components/Heading';
import { ScrollProgressIndicator } from '../../../common-components/ScrollProgressIndicator';
import { useMediaQueries } from '../../../common-components/media-queries-context';
import { PhotoGallery } from '../../../common-components/PhotoGallery';

const Post = ({ title, featuredImg, content, date }) => {
  // PrismJS requires the DOM
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { isDarkMode } = useStorageDarkMode();
  const { smMax } = useMediaQueries();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(new Date(date));

  // TODO: Figure out better way to handle post shortcodes
  const hasPhotoGallery = content.includes('[photogallery]');
  const parsedContent = parse(content.replace('[photogallery]', ''));

  return (
    <>
      <Head>
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content={featuredImg}
          itemProp="image primaryImageOfPage"
          name="twitter:image"
          property="og:image"
        />
        <meta
          content={title}
          itemProp="name"
          name="twitter:title"
          property="og:title"
        />
      </Head>
      <ScrollProgressIndicator
        color={isDarkMode ? colors.secondary : colors.primary}
      />
      <PageShell isFullWidth={hasPhotoGallery}>
        <StyledPageContainer isDarkMode={isDarkMode}>
          <Heading
            animateTyping
            color={isDarkMode ? colors.white : null}
            level={1}
            size={smMax ? 2 : 1}
          >
            {parse(title)}
          </Heading>
          {featuredImg && !hasPhotoGallery && (
            <FeaturedImageWrapper>
              <StyledImage alt={title} fill priority src={featuredImg} />
            </FeaturedImageWrapper>
          )}
          <StyledDate isDarkMode={isDarkMode}>
            {`Published on ${formattedDate}`}
          </StyledDate>
          <PostContent isDarkMode={isDarkMode}>{parsedContent}</PostContent>
          {hasPhotoGallery && (
            <PhotoGallery
              imageUrls={[...Array(29)].map(
                (_, i) => `/image-assets/photo-gallery/${i + 1}.jpg`
              )}
            />
          )}
        </StyledPageContainer>
      </PageShell>
    </>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const posts = await (await fetch(ALL_POSTS_API_URL)).json();

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
    ? await getMedia(post.featured_media)
    : null;

  return {
    props: {
      title: post.title.rendered,
      content: post.content.rendered,
      featuredImg,
      date: post.date,
    },
  };
};

export default Post;
