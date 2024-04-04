import parse from 'html-react-parser';
import { getMedia } from '../../lib/utils';
import { PAGES_API_URL } from '../../lib/constants';
import { PageShell } from '../../components/PageShell';
import {
  FeaturedImageWrapper,
  StyledDate,
  StyledPageContainer,
  StyledImage,
} from '../../components/PageShell/styles';
import { Heading } from '../../../common-components/Heading';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';

const Page = ({ title, featuredImg, content, date }) => {
  const { isDarkMode } = useStorageDarkMode();
  return (
    <PageShell>
      <StyledPageContainer isDarkMode={isDarkMode}>
        <Heading level={1}>{title}</Heading>
        {featuredImg && (
          <FeaturedImageWrapper>
            <StyledImage alt={title} fill priority src={featuredImg} />
          </FeaturedImageWrapper>
        )}
        <StyledDate>
          {`Published on ${new Date(date).toDateString()}`}
        </StyledDate>
        <div>{parse(content)}</div>
      </StyledPageContainer>
    </PageShell>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const pages = await (await fetch(PAGES_API_URL)).json();

  // Get the paths we want to pre-render based on pages
  const paths = pages.map((page) => ({
    params: { id: page.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  const page = await (await fetch(`${PAGES_API_URL}/${params.id}`)).json();

  const featuredImg = page.featured_media
    ? await getMedia(page.featured_media)
    : null;

  return {
    props: {
      title: page.title.rendered,
      content: page.content.rendered,
      featuredImg,
      date: page.date,
    },
  };
};

export default Page;
