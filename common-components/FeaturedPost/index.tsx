import NextLink from 'next/link';
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
  const title = post.title.rendered;
  const imageUrl = post._embedded['wp:featuredmedia']['0'].source_url;
  const { isDarkMode } = useStorageDarkMode();
  return (
    <NextLink href={`/post/${post.id}`} passHref>
      <FeaturedPostWrapper isDarkMode={isDarkMode}>
        <ViewThisFeatureWrapper>
          <ViewThisFeature isDarkMode={isDarkMode}>
            <ViewThisFeatureText isDarkMode={isDarkMode}>View this feature</ViewThisFeatureText>
          </ViewThisFeature>
        </ViewThisFeatureWrapper>
        <FeaturedPostImage src={imageUrl} />
        <FeaturedPostHeading isDarkMode={isDarkMode} level={3} size={5}>
          {title}
        </FeaturedPostHeading>
      </FeaturedPostWrapper>
    </NextLink>
  );
};

FeaturedPost.displayName = 'FeaturedPost';
