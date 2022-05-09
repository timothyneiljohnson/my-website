import { useEffect } from 'react';
import Prism from 'prismjs';
import { StyledPre } from './styles';

interface CodeProps {
  children?: string;
  language?: string;
  showLines?: boolean;
}

export const Code = ({ children, language, showLines }: CodeProps) => {
  // PrismJS requires the DOM
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <StyledPre className={`language-${language} ${showLines && 'line-numbers'}`}>
      <code>
        {children}
      </code>
    </StyledPre>
  );
};

Code.displayName = 'Code';
