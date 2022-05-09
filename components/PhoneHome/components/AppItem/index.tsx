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
        draggable={false}
        fullWidth
        src={`/image-assets/phone-home/apps/${appData.image}`}
      />
    </AppOrFolderInner>
  </AppItemStyled>
);

AppItem.displayName = 'AppItem';
