import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { colors } from '../design-tokens';
import {
  ActiveTabLine,
  StyledTabs,
  TabButton,
  TabButtonsWrapper,
  TabContent,
  TabContentsWrapper,
} from './styles';

interface TabProps {
  title: string;
  content: ReactNode;
}
interface TabsProps {
  color?: string;
  data: TabProps[];
}
export const Tabs = ({ color = colors.grayDark, data }: TabsProps) => {
  const ref = useRef(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedTabLeftPosition, setSelectedTabLeftPosition] = useState(null);
  const [selectedTabWidth, setSelectedTabWidth] = useState(null);

  const handleTabButtonClick = useCallback((i: number) => {
    setSelectedTabIndex(i);
  }, []);

  useEffect(() => {
    if (ref.current) {
      setSelectedTabLeftPosition(ref.current.offsetLeft);
      setSelectedTabWidth(ref.current.clientWidth);
    }
  }, [ref, selectedTabIndex]);

  return (
    <StyledTabs>
      <TabButtonsWrapper>
        {data.map((tab, i: number) => (
          <TabButton
            key={i}
            onClick={() => handleTabButtonClick(i)}
            ref={selectedTabIndex === i ? ref : null}
          >
            {tab.title}
          </TabButton>
        ))}
        <ActiveTabLine
          color={color}
          left={selectedTabLeftPosition}
          width={selectedTabWidth}
        />
      </TabButtonsWrapper>
      <TabContentsWrapper>
        {data.map((tab, i: number) => (
          <TabContent isSelected={selectedTabIndex === i} key={i}>
            {tab.content}
          </TabContent>
        ))}
      </TabContentsWrapper>
    </StyledTabs>
  );
};

Tabs.displayName = 'Tabs';
