import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { BannerWrapper, StyledBanner } from './styles';
import { BannerControls } from './BannerControls';
import { BannerSlide } from './BannerSlide';

interface BannerProps {
  slides?: {
    id: number;
  }[];
}

export const Banner = ({ slides = [] }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlideChangeCallback = useCallback((selectedIndex) => {
    setCurrentIndex(selectedIndex);
  }, []);

  useEffect(() => {
    const bannerTimeout = setTimeout(() => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    }, 4000);

    return () => clearTimeout(bannerTimeout);
  }, [currentIndex, slides.length]);

  return slides ? (
    <BannerWrapper>
      <NextLink href={`/post/${slides[currentIndex].id}`} passHref>
        <StyledBanner>
          {slides.map((post, index) => (
            <BannerSlide isCurrentSlide={currentIndex === index} key={index} post={post} />
          ))}
        </StyledBanner>
      </NextLink>
      <BannerControls
        currentIndex={currentIndex}
        length={slides.length}
        onSlideChangeCallback={onSlideChangeCallback}
      />
    </BannerWrapper>
  ) : null;
};

Banner.displayName = 'Banner';
