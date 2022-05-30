import styled from 'styled-components';
import { decorations } from '../../common-components/design-tokens';
import { Lottie } from '../../common-components/Lottie';
import { PageShell } from '../../components/PageShell';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';

const StyledLottie = styled(Lottie)`
  overflow: hidden;
  ${decorations.borderRadiusStyle}
`;

const PageNotFound = () => {
  const { isDarkMode } = useStorageDarkMode();
  return (
    <PageShell>
      <StyledLottie
        src={`/image-assets/lotties/${
          isDarkMode ? '404-darkmode' : '404'
        }.json`}
      />
    </PageShell>
  );
};

export default PageNotFound;
