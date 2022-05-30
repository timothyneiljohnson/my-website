import { BannerImageStyled, BannerSlideStyled } from './styles';

interface BannerSlideProps {
  isCurrentSlide: boolean;
  post: any;
}

export const BannerSlide = ({ isCurrentSlide, post }: BannerSlideProps) => (
  <BannerSlideStyled>
    <BannerImageStyled
      alt={post.title.rendered}
      isCurrentSlide={isCurrentSlide}
      layout="fill"
      objectFit="cover"
      objectPosition="top"
      priority
      sizes="60vw"
      src={post.acf.banner_image}
    />
  </BannerSlideStyled>
);

BannerSlide.displayName = 'BannerControls';
