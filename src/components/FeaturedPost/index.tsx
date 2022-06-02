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
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const { isDarkMode } = useStorageDarkMode();
  const title = post.title.rendered;
  const highlightImageUrl = post.acf.highlight_image;
  const { xsMax, sm, smMax } = useMediaQueries();

  return (
    <NextLink href={`/post/${post.id}`} passHref>
      <FeaturedPostWrapper isDarkMode={isDarkMode}>
        <ViewThisFeatureWrapper>
          <FeaturedPostImage
            alt={title}
            isDarkMode={isDarkMode}
            layout="fill"
            objectFit="cover"
            priority
            sizes={smMax ? '100vw' : '33vw'}
            src={highlightImageUrl}
          />
          {sm && (
            <ViewThisFeature isDarkMode={isDarkMode}>
              <ViewThisFeatureText isDarkMode={isDarkMode}>
                View this feature
              </ViewThisFeatureText>
            </ViewThisFeature>
          )}
        </ViewThisFeatureWrapper>
        <FeaturedPostDescription>
          <FeaturedPostHeading isDarkMode={isDarkMode} level={3} size={xsMax ? 5 : 4}>
            {parse(title)}
          </FeaturedPostHeading>
        </FeaturedPostDescription>
      </FeaturedPostWrapper>
    </NextLink>
  );
};

FeaturedPost.displayName = 'FeaturedPost';
