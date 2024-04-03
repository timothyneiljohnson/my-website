import { useMediaQueries } from '../media-queries-context';
import { BannerTitle } from './BannerTitle';
import { BannerImageStyled, BannerSlideStyled } from './styles';

interface BannerSlideProps {
  isCurrentSlide: boolean;
  post: any;
}

export const BannerSlide = ({ isCurrentSlide, post }: BannerSlideProps) => {
  const { banner_image_16_9, banner_image_wide } = post.acf;
  const { smMax } = useMediaQueries();

  return (
    <BannerSlideStyled>
      <BannerImageStyled
        alt={post.title.rendered}
        fill
        isCurrentSlide={isCurrentSlide}
        priority
        sizes="60vw"
        src={smMax ? banner_image_16_9 : banner_image_wide}
      />
      <BannerTitle isCurrentSlide={isCurrentSlide} post={post} />
    </BannerSlideStyled>
  );
};

BannerSlide.displayName = 'BannerControls';
