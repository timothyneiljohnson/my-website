import DOMPurify from 'isomorphic-dompurify';
import { colors, gradients } from '../design-tokens';
// import { useMediaQueries } from '../media-queries-context';
import { BannerTitleWrapper, StyledHeading } from './styles';

interface BannerTitleProps {
  isCurrentSlide: boolean;
  post: any;
}

export const BannerTitle = ({ isCurrentSlide, post }: BannerTitleProps) => {
  const {
    banner_title = '',
    banner_title_background,
    banner_title_position,
    banner_title_size,
  } = post.acf;
  let bgColor;
  let gradientName;
  let gradientStart;
  let gradientEnd;
  const hasGradient = banner_title_background.includes('gradient');

  if (hasGradient) {
    [gradientName] = banner_title_background.split('-gradient');
    gradientStart = gradients[gradientName].start;
    gradientEnd = gradients[gradientName].end;
  } else {
    bgColor = banner_title_background;
  }

  // const bannerTitle = parse(banner_title) ?? '';

  return (
    <BannerTitleWrapper
      background={bgColor}
      gradientEnd={gradientEnd}
      gradientStart={gradientStart}
      isCurrentSlide={isCurrentSlide}
      position={banner_title_position}
      size={banner_title_size}
    >
      <StyledHeading
        color={colors.white}
        level={2}
        overrideSize={banner_title_size}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(banner_title),
          }}
        />
      </StyledHeading>
    </BannerTitleWrapper>
  );
};

BannerTitle.displayName = 'BannerControls';
