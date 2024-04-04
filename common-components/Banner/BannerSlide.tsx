import { BannerTitle } from './BannerTitle';
import {
  BannerImageStyledSmMax,
  BannerImageStyledMd,
  BannerSlideStyled,
} from './styles';

interface BannerSlideProps {
  isCurrentSlide: boolean;
  post: any;
}

export const BannerSlide = ({ isCurrentSlide, post }: BannerSlideProps) => {
  const { banner_image_16_9, banner_image_wide } = post.acf;

  return (
    <BannerSlideStyled>
      <BannerImageStyledSmMax
        alt={post.title.rendered}
        fill
        isCurrentSlide={isCurrentSlide}
        noFadeIn
        priority
        sizes="60vw"
        src={banner_image_16_9}
      />
      <BannerImageStyledMd
        alt={post.title.rendered}
        fill
        isCurrentSlide={isCurrentSlide}
        noFadeIn
        priority
        sizes="60vw"
        src={banner_image_wide}
      />
      <BannerTitle isCurrentSlide={isCurrentSlide} post={post} />
    </BannerSlideStyled>
  );
};

BannerSlide.displayName = 'BannerControls';
