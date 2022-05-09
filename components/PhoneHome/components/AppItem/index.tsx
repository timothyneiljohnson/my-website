import { ReactNode } from 'react';
import { Image } from '../../../../common-components';
import { AppItemStyled, AppOrFolderInner } from '../../styles';

interface AppProps {
  appData: {
    name: string;
    image?: string;
    widget?: ReactNode;
  };
}
export const AppItem = ({ appData }: AppProps) => (
  <AppItemStyled>
    <AppOrFolderInner>
      {appData.widget}
      <Image
        src={`/image-assets/phone-home/apps/${appData.image}`}
        fullWidth
        draggable={false}
      />
    </AppOrFolderInner>
  </AppItemStyled>
);

AppItem.displayName = 'AppItem';
