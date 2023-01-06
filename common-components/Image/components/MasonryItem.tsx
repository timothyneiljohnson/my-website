import React, { FC, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface MasonryItemProps {
  alt: string;
  className: string;
  src: string;
  unoptimized: boolean;
}
export const MasonryItem: FC<MasonryItemProps> = ({
  alt,
  className,
  src,
  unoptimized,
  ...restProps
}) => {
  const [paddingTop, setPaddingTop] = useState('0');

  return (
    <Container className={className} style={{ paddingTop }}>
      <Image
        alt={alt}
        fill
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement;
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
        }}
        src={src}
        unoptimized={unoptimized}
        {...restProps}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
