import styled from 'styled-components';
import { decorations } from '../../../common-components/design-tokens';
import { Lottie } from '../../../common-components/Lottie';
import { PageShell } from '../../components/PageShell';

const StyledLottie = styled(Lottie)`
  overflow: hidden;
  ${decorations.borderRadiusStyle}
`;

const PageNotFound = () => {
  return (
    <PageShell>
      <StyledLottie
        src="/image-assets/lotties/404.json"
      />
    </PageShell>
  );
};

export default PageNotFound;
