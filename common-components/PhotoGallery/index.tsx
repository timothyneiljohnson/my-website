import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useStorageDarkMode } from '../storage-dark-mode-context';
import { colors } from '../design-tokens';
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

const DynamicModalDrawer = dynamic<ModalDrawerProps>(() =>
  import('../ModalDrawer').then(({ ModalDrawer }) => ModalDrawer)
);

interface PhotoGalleryProps {
  className?: string;
  height?: number;
  imageUrls?: string[];
  width?: number;
  topMargin?: number;
}
export const PhotoGallery = ({
  className,
  height,
  imageUrls,
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
      const imageIndex = imageUrls.findIndex((url) => url === imageUrl);

      setSelectedImageIndex(imageIndex);
    },
    [imageUrls]
  );

  const handleNextImage = useCallback(() => {
    setFullscreenImageLoaded(false);
    const nextImageIndex =
      selectedImageIndex === imageUrls.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextImageIndex);
  }, [imageUrls, selectedImageIndex]);

  const handlePreviousImage = useCallback(() => {
    setFullscreenImageLoaded(false);
    const previousImageIndex =
      selectedImageIndex === 0 ? imageUrls.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(previousImageIndex);
  }, [imageUrls, selectedImageIndex]);

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
  const imageUrlsChunk1 = imageUrls.slice(0, Math.ceil(imageUrls.length / 3));
  const imageUrlsChunk2 = imageUrls.slice(
    Math.ceil(imageUrls.length / 3),
    Math.ceil(imageUrls.length / 1.5)
  );
  const imageUrlsChunk3 = imageUrls.slice(
    Math.ceil(imageUrls.length / 1.5),
    imageUrls.length
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
        {imageUrlsChunk1.map((imageUrl, i) => (
          <StyledButton
            key={`${imageUrl}${i}`}
            onClick={() => handleOpenModal(imageUrl)}
          >
            <StyledImage
              alt={`image ${i}`}
              masonry
              sizes="33vw"
              src={imageUrl}
            />
          </StyledButton>
        ))}
      </PhotoGalleryCol>
      <PhotoGalleryCol>
        {imageUrlsChunk2.map((imageUrl, i) => (
          <StyledButton
            key={`${imageUrl}${i}`}
            onClick={() => handleOpenModal(imageUrl)}
          >
            <StyledImage
              alt={`image ${i}`}
              masonry
              sizes="33vw"
              src={imageUrl}
            />
          </StyledButton>
        ))}
      </PhotoGalleryCol>
      <PhotoGalleryCol>
        {imageUrlsChunk3.map((imageUrl, i) => (
          <StyledButton
            key={`${imageUrl}${i}`}
            onClick={() => handleOpenModal(imageUrl)}
          >
            <StyledImage
              alt={`image ${i}`}
              masonry
              sizes="33vw"
              src={imageUrl}
            />
          </StyledButton>
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
                  src={imageUrls[selectedImageIndex]}
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
                {`${selectedImageIndex + 1} of ${imageUrls.length}`}
              </ImageCountStatus>
            </Row>
          </StyledGrid>
        </DynamicModalDrawer>
      )}
    </StyledPhotoGallery>
  );
};

PhotoGallery.displayName = 'PhotoGallery';
