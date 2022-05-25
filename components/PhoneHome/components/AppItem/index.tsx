import { ReactNode } from 'react';
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
      <img
        alt={appData.name}
        draggable={false}
        src={`/image-assets/phone-home/apps/${appData.image}`}
      />
    </AppOrFolderInner>
  </AppItemStyled>
);

AppItem.displayName = 'AppItem';
