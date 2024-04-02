import NextLink from 'next/link';
import parse from 'html-react-parser';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import {
  FeaturedPostHeading,
  FeaturedPostImage,
  ViewThisFeature,
  FeaturedPostWrapper,
  ViewThisFeatureWrapper,
  ViewThisFeatureText,
  FeaturedPostDescription,
} from './styles';
import { useMediaQueries } from '../../../common-components/media-queries-context';

interface FeaturedPostProps {
  post: any;
  style?: any;
}

export const FeaturedPost = ({ post, ...restProps }: FeaturedPostProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const title = post.title.rendered;
  const highlightImageUrl = post.acf.highlight_image;
  const { xsMax, sm, smMax } = useMediaQueries();

  return (
    <NextLink href={`/article/${post.id}`} legacyBehavior passHref>
      <FeaturedPostWrapper isDarkMode={isDarkMode} {...restProps}>
        <ViewThisFeatureWrapper>
          <FeaturedPostImage
            alt={title}
            fill
            isDarkMode={isDarkMode}
            priority
            sizes={smMax ? '100vw' : '33vw'}
            src={highlightImageUrl}
          />
          {sm && (
            <ViewThisFeature isDarkMode={isDarkMode}>
              <ViewThisFeatureText isDarkMode={isDarkMode}>
                View this article
              </ViewThisFeatureText>
            </ViewThisFeature>
          )}
        </ViewThisFeatureWrapper>
        <FeaturedPostDescription>
          <FeaturedPostHeading
            isDarkMode={isDarkMode}
            level={3}
            size={xsMax ? 5 : 4}
          >
            {parse(title)}
          </FeaturedPostHeading>
        </FeaturedPostDescription>
      </FeaturedPostWrapper>
    </NextLink>
  );
};

FeaturedPost.displayName = 'FeaturedPost';
