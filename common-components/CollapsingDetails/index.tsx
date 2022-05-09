import { ReactElement, useCallback, useRef, useState } from 'react';
import { colors } from '../design-tokens';
import {
  DetailsSection,
  IconWrapper,
  StyledCollapsingDetails,
  StyledIcon,
  TitleWrapper,
  ToggleButton,
} from './styles';

interface CollapsingDetailsProps {
  children: ReactElement;
  closeText?: string;
  title?: string;
}
export const CollapsingDetails = ({
  children,
  closeText,
  title,
}: CollapsingDetailsProps) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(0);

  const handleToggle = useCallback(() => {
    setDetailsHeight(ref.current?.scrollHeight);
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledCollapsingDetails>
      <ToggleButton onClick={handleToggle}>
        <TitleWrapper>{isOpen && closeText ? closeText : title}</TitleWrapper>
        <IconWrapper>
          <StyledIcon
            fill={colors.grayLight}
            isOpen={isOpen}
            name="chevron-down"
            size={30}
          />
        </IconWrapper>
      </ToggleButton>
      <DetailsSection detailsHeight={detailsHeight} isOpen={isOpen} ref={ref}>
        {children}
      </DetailsSection>
    </StyledCollapsingDetails>
  );
};

CollapsingDetails.displayName = 'CollapsingDetails';
