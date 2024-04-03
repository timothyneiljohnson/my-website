import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { colors, spacing } from '../design-tokens';
import {
  GalleryNavButton,
  ImageCountStatus,
  PhotoGalleryCol,
  StyledPhotoGallery,
  StyledFullscreenImage,
  StyledImage,
  StyledRow,
  StyledButton,
  StyledGrid,
  StyledCol,
  StyledLoadingDots,
} from './styles';
import { ModalDrawerProps } from '../ModalDrawer/types';
import { Icon } from '../Icon';
import { Col } from '../Col';
import { Row } from '../Row';
import { AspectRatio } from '../AspectRatio';

const DynamicModalDrawer = dynamic<ModalDrawerProps>(() =>
  import('../ModalDrawer').then(({ ModalDrawer }) => ModalDrawer)
);

interface PhotoGalleryProps {
  className?: string;
  height?: number;
  images?: {
    url?: string;
    ratio?: number;
  }[];
  width?: number;
  topMargin?: number;
}
export const PhotoGallery = ({
  className,
  height,
  images,
  width,
  topMargin,
}: PhotoGalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [fullscreenImageLoaded, setFullscreenImageLoaded] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsModalDisplayed(true);
    }
  }, [isModalOpen]);

  const onCloseCallback = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalDisplayed(false);
    }, 400);
  }, []);

  const handleOpenModal = useCallback(
    (imageUrl: string) => {
      setIsModalOpen(true);
      const imageIndex = images.findIndex(({ url }) => url === imageUrl);

      setSelectedImageIndex(imageIndex);
    },
    [images]
  );

  const handleNextImage = useCallback(() => {
    setFullscreenImageLoaded(false);
    const nextImageIndex =
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextImageIndex);
  }, [images, selectedImageIndex]);

  const handlePreviousImage = useCallback(() => {
    setFullscreenImageLoaded(false);
    const previousImageIndex =
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(previousImageIndex);
  }, [images, selectedImageIndex]);

  const onKeyDownCallback = useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        handlePreviousImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    },
    [handleNextImage, handlePreviousImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownCallback, false);
    return () => {
      document.removeEventListener('keydown', onKeyDownCallback, false);
    };
  }, [onKeyDownCallback]);

  const { isDarkMode } = useStorageDarkMode();
  const imagesChunk1 = images.slice(0, Math.ceil(images.length / 3));
  const imagesChunk2 = images.slice(
    Math.ceil(images.length / 3),
    Math.ceil(images.length / 1.5)
  );
  const imagesChunk3 = images.slice(
    Math.ceil(images.length / 1.5),
    images.length
  );

  return (
    <StyledPhotoGallery
      className={className}
      height={height}
      isDarkMode={isDarkMode}
      topMargin={topMargin}
      width={width}
    >
      <PhotoGalleryCol>
        {imagesChunk1.map((image, i) => (
          <AspectRatio
            key={`${image.url}${i}`}
            ratio={image.ratio}
            style={{ overflow: 'hidden', borderRadius: 0, marginBottom: spacing.x2 }}
          >
            <StyledButton
              onClick={() => handleOpenModal(image.url)}
              style={{ position: 'relative' }}
            >
              <StyledImage
                alt={`image ${i}`}
                fill
                sizes="33vw"
                src={image.url}
              />
            </StyledButton>
          </AspectRatio>
        ))}
      </PhotoGalleryCol>
      <PhotoGalleryCol>
        {imagesChunk2.map((image, i) => (
          <AspectRatio
            key={`${image.url}${i}`}
            ratio={image.ratio}
            style={{ overflow: 'hidden', borderRadius: 0, marginBottom: spacing.x2 }}
          >
            <StyledButton onClick={() => handleOpenModal(image.url)}>
              <StyledImage
                alt={`image ${i}`}
                fill
                sizes="33vw"
                src={image.url}
              />
            </StyledButton>
          </AspectRatio>
        ))}
      </PhotoGalleryCol>
      <PhotoGalleryCol>
        {imagesChunk3.map((image, i) => (
          <AspectRatio
            key={`${image.url}${i}`}
            ratio={image.ratio}
            style={{ overflow: 'hidden', borderRadius: 0, marginBottom: spacing.x2 }}
          >
            <StyledButton
              onClick={() => handleOpenModal(image.url)}
              style={{ position: 'relative' }}
            >
              <StyledImage
                alt={`image ${i}`}
                fill
                sizes="33vw"
                src={image.url}
              />
            </StyledButton>
          </AspectRatio>
        ))}
      </PhotoGalleryCol>
      {isModalDisplayed && selectedImageIndex !== null && (
        <DynamicModalDrawer
          background="rgba(0, 0, 0, 0.885)"
          isOpen={isModalOpen}
          modalType="fullscreen"
          onCloseCallback={onCloseCallback}
        >
          <StyledGrid>
            <StyledRow gap={0.05}>
              <StyledCol flex middle>
                <GalleryNavButton onClick={handlePreviousImage}>
                  <Icon
                    fill={colors.grayLightest}
                    name="chevron-back-sharp"
                    size={60}
                  />
                </GalleryNavButton>
              </StyledCol>
              <Col grow>
                <StyledFullscreenImage
                  alt={`image ${selectedImageIndex}`}
                  fill
                  isLoaded={fullscreenImageLoaded}
                  loading="eager"
                  noFadeIn
                  onLoadingComplete={() => setFullscreenImageLoaded(true)}
                  quality="100"
                  sizes="100vw"
                  src={images[selectedImageIndex].url}
                />
                <StyledLoadingDots />
              </Col>
              <StyledCol flex middle>
                <GalleryNavButton onClick={handleNextImage}>
                  <Icon
                    fill={colors.grayLightest}
                    name="chevron-forward-sharp"
                    size={60}
                  />
                </GalleryNavButton>
              </StyledCol>
            </StyledRow>
            <Row center flex>
              <ImageCountStatus>
                {`${selectedImageIndex + 1} of ${images.length}`}
              </ImageCountStatus>
            </Row>
          </StyledGrid>
        </DynamicModalDrawer>
      )}
    </StyledPhotoGallery>
  );
};

PhotoGallery.displayName = 'PhotoGallery';
