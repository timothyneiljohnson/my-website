import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-okaidia.css'; // Theme
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Head from 'next/head';
import { useEffect } from 'react';
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

const replacePreNode = (domNode) => {
  if (domNode.name === 'pre' || domNode.name === 'code') {
    const highlightedCode = Prism.highlight(
      domNode.children[0].children[0].data ?? '',
      Prism.languages.jsx,
      'jsx'
    );
    return (
      <pre
        className={domNode.attribs.class}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(highlightedCode),
        }}
      />
    );
  }
  return domNode;
};

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
  const parsedContent = parse(content.replace('[photogallery]', ''), {
    replace: replacePreNode,
  });

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
              images={[
                { url: '/image-assets/photo-gallery/1.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/2.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/3.jpg', ratio: 2 / 3 },
                { url: '/image-assets/photo-gallery/4.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/5.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/6.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/7.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/8.jpg', ratio: 2 / 3 },
                { url: '/image-assets/photo-gallery/9.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/10.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/11.jpg', ratio: 2 / 3 },
                { url: '/image-assets/photo-gallery/12.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/13.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/14.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/15.jpg', ratio: 2 / 3 },
                { url: '/image-assets/photo-gallery/16.jpg', ratio: 45 / 29 },
                { url: '/image-assets/photo-gallery/17.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/18.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/19.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/20.jpg', ratio: 120 / 77 },
                { url: '/image-assets/photo-gallery/21.jpg', ratio: 5 / 2 },
                { url: '/image-assets/photo-gallery/22.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/23.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/24.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/25.jpg', ratio: 3 / 2 },
                {
                  url: '/image-assets/photo-gallery/26.jpg',
                  ratio: 895 / 1501,
                },
                { url: '/image-assets/photo-gallery/27.jpg', ratio: 3 / 2 },
                { url: '/image-assets/photo-gallery/28.jpg', ratio: 2 / 3 },
                { url: '/image-assets/photo-gallery/29.jpg', ratio: 2 / 3 },
              ]}
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
