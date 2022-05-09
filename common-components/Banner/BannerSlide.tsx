import { BannerSlideStyled } from './styles';

interface BannerSlideProps {
  isCurrentSlide: boolean;
  post: any;
}

export const BannerSlide = ({ isCurrentSlide, post }: BannerSlideProps) => (
  <BannerSlideStyled
    imageUrl={post._embedded['wp:featuredmedia']['0'].source_url}
    isCurrentSlide={isCurrentSlide}
  />
);

BannerSlide.displayName = 'BannerControls';
