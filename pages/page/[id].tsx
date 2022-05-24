import parse from 'html-react-parser';
import { getAuthor, getFeaturedImage } from '../../lib/utils';
import { PAGES_API_URL } from '../../lib/constants';
import { PageShell } from '../../components/PageShell';
import {
  FeaturedImageWrapper,
  StyledDate,
  StyledPageContainer,
} from '../../components/PageShell/styles';
import { Heading } from '../../common-components/Heading';
import { Image } from '../../common-components/Image';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';

const Page = ({ title, featuredImg, content, date }) => {
  const { isDarkMode } = useStorageDarkMode();
  return (
    <PageShell>
      <StyledPageContainer isDarkMode={isDarkMode}>
        <Heading level={1}>{title}</Heading>
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
        <StyledDate>{`Published on ${new Date(date).toDateString()}`}</StyledDate>
        <div>{parse(content)}</div>
      </StyledPageContainer>
    </PageShell>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const pages = await (
    await fetch(PAGES_API_URL)
  ).json();

  // Get the paths we want to pre-render based on pages
  const paths = pages.map((page) => ({
    params: { id: page.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  const page = await (
    await fetch(`${PAGES_API_URL}/${params.id}`)
  ).json();

  const featuredImg = page.featured_media ? await getFeaturedImage(page.featured_media) : null;
  const author = await getAuthor(page.author);

  return {
    props: {
      title: page.title.rendered,
      content: page.content.rendered,
      featuredImg,
      author,
      date: page.date,
    },
  };
};

export default Page;
