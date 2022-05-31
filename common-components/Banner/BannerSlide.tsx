import { useMediaQueries } from '../media-queries-context';
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
        isCurrentSlide={isCurrentSlide}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        priority
        sizes="60vw"
        src={smMax ? banner_image_16_9 : banner_image_wide}
      />
    </BannerSlideStyled>
  );
};

BannerSlide.displayName = 'BannerControls';
