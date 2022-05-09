import { useCallback, useEffect, useRef, useState } from 'react';
import { PlainGrid } from '../../../../common-components';
import {
  AppGridItem,
  AppOrFolderHeadingSmall,
  FolderInner,
  FolderItemStyled,
} from '../../styles';
import { AppItem } from '../AppItem';

interface FolderProps {
  folderData: {
    name: string;
    image?: string;
    apps?: {
      name: string;
      image: string;
    }[];
  };
  forceClose?: boolean;
  showFullScreenFilterCallback: (name: string) => void;
}
export const FolderItem = ({
  folderData,
  forceClose,
  showFullScreenFilterCallback,
}: FolderProps) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [translationX, setTranslationX] = useState(null);
  const [translationY, setTranslationY] = useState(null);

  const handleOpenFolder = useCallback(() => {
    // set translation coords
    const folderTop = ref.current?.getBoundingClientRect().top;
    const folderLeft = ref.current?.getBoundingClientRect().left;
    setTranslationX(67.9 - folderLeft / 4.85);
    setTranslationY(73 - folderTop / 4.85);

    // open folder
    setIsOpen(true);

    // show fullscreen filter
    showFullScreenFilterCallback(folderData.name);
  }, [folderData.name, showFullScreenFilterCallback]);

  // const handleFolderAnimationEnd = useCallback(() => {
  //   if (isOpen) {
  //     console.log('if');
  //     setIsOpen(false);
  //   }
  // }, []);

  useEffect(() => {
    if (isOpen && forceClose) {
      setTimeout(() => {
        setIsOpen(false);
      }, 360);
    }
  }, [isOpen, forceClose]);

  return (
    <FolderItemStyled>
      <FolderInner
        animateClose={forceClose}
        isOpen={isOpen}
        onClick={handleOpenFolder}
        ref={ref}
        style={{
          '--translation-x': translationX,
          '--translation-y': translationY,
        }}
        // onAnimationEnd={handleFolderAnimationEnd}
      >
        <PlainGrid
          colGap={isOpen && !forceClose ? '5%' : '2%'}
          columns={3}
          rowGap="1.5px"
          style={{ alignItems: 'center', transition: 'grid-column-gap 50ms, grid-row-gap 50ms;' }}
        >
          {folderData.apps.map((app) => (
            <AppGridItem key={app.name}>
              <AppItem appData={app} />
              {isOpen && !forceClose && (
                <AppOrFolderHeadingSmall>{app.name}</AppOrFolderHeadingSmall>
              )}
            </AppGridItem>
          ))}
        </PlainGrid>
      </FolderInner>
    </FolderItemStyled>
  );
};

FolderItem.displayName = 'FolderItem';
