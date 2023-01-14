import { ReactElement, useCallback, useRef, useState } from 'react';
import { animation, colors } from '../design-tokens';
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
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(0);

  const handleToggle = useCallback(() => {
    setDetailsHeight(ref.current?.scrollHeight);
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsDisplayed(true);
    } else {
      setTimeout(() => {
        setIsDisplayed(false);
      }, animation.durations.faster);
    }
  }, [isOpen]);

  return (
    <StyledCollapsingDetails>
      <ToggleButton onClick={handleToggle}>
        <TitleWrapper>{isOpen && closeText ? closeText : title}</TitleWrapper>
        <IconWrapper>
          <StyledIcon
            fill={colors.grayDark}
            isOpen={isOpen}
            name="chevron-down"
            size={24}
          />
        </IconWrapper>
      </ToggleButton>
      <DetailsSection
        detailsHeight={detailsHeight}
        isDisplayed={isDisplayed}
        isOpen={isOpen}
        ref={ref}
      >
        {children}
      </DetailsSection>
    </StyledCollapsingDetails>
  );
};

CollapsingDetails.displayName = 'CollapsingDetails';
