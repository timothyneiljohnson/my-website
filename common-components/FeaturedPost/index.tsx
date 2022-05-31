import NextLink from 'next/link';
import parse from 'html-react-parser';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';
import {
  FeaturedPostHeading,
  FeaturedPostImage,
  ViewThisFeature,
  FeaturedPostWrapper,
  ViewThisFeatureWrapper,
  ViewThisFeatureText,
} from './styles';

interface FeaturedPostProps {
  post: any;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const title = post.title.rendered;
  const highlightImageUrl = post.acf.highlight_image;

  return (
    <NextLink href={`/post/${post.id}`} passHref>
      <FeaturedPostWrapper isDarkMode={isDarkMode}>
        <ViewThisFeatureWrapper>
          <FeaturedPostImage
            alt={title}
            layout="fill"
            objectFit="cover"
            priority
            sizes="33vw"
            src={highlightImageUrl}
          />
          <ViewThisFeature isDarkMode={isDarkMode}>
            <ViewThisFeatureText isDarkMode={isDarkMode}>
              View this feature
            </ViewThisFeatureText>
          </ViewThisFeature>
        </ViewThisFeatureWrapper>
        <div>
          <FeaturedPostHeading isDarkMode={isDarkMode} level={3} size={4}>
            {parse(title)}
          </FeaturedPostHeading>
        </div>
      </FeaturedPostWrapper>
    </NextLink>
  );
};

FeaturedPost.displayName = 'FeaturedPost';
