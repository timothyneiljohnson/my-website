import axios from 'axios';
import parse from 'html-react-parser';
import { getAuthor, getFeaturedImage } from '../../lib/utils';
import { PAGES_API_URL } from '../../lib/constants';
import { PageShell } from '../../components/PageShell';
import {
  FeaturedPageImage,
  StyledDate,
  StyledPageContainer,
} from '../../components/PageShell/styles';
import { Heading } from '../../common-components';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';

const Page = ({ title, featuredImg, content, date }) => {
  const { isDarkMode } = useStorageDarkMode();
  return (
    <PageShell>
      <StyledPageContainer isDarkMode={isDarkMode}>
        <Heading level={1}>{title}</Heading>
        <div>
          <FeaturedPageImage src={featuredImg} />
        </div>
        <StyledDate>{`Published on ${new Date(date).toDateString()}`}</StyledDate>
        <div>{parse(content)}</div>
      </StyledPageContainer>
    </PageShell>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  const res = await axios.get(PAGES_API_URL);
  const pages = res.data;

  // Get the paths we want to pre-render based on pages
  const paths = pages.map((page) => ({
    params: { id: page.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`${PAGES_API_URL}/${params.id}`);
  const page = await res.data;

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
