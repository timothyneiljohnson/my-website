import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from '../Link';
import { StyledTruncatedText } from './styles';

interface TruncatedTextProps {
  characters?: number;
  children: string;
  closeText?: string;
  expandable?: boolean;
  lines?: number;
  openText?: string;
}
export const TruncatedText = ({
  characters,
  children,
  expandable = false,
  lines,
  openText = 'Show more',
  closeText = 'Show less',
}: TruncatedTextProps) => {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasMoreToShow, setHasMoreToShow] = useState(false);

  const handleToggle = useCallback(
    (event) => {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    },
    [isExpanded]
  );

  const toggleText = isExpanded ? closeText : openText;
  const cleanedContent = children.replace(/(<([^>]+)>)/gi, '');
  const trimmedContent = characters
    ? cleanedContent.substring(0, characters)
    : cleanedContent;

  useEffect(() => {
    setHasMoreToShow(
      trimmedContent.length < cleanedContent.length ||
        ref.current?.scrollHeight > ref.current?.clientHeight
    );
  }, [cleanedContent.length, hasMoreToShow, ref, trimmedContent.length]);

  return (
    <>
      <StyledTruncatedText lines={!isExpanded ? lines : null} ref={ref}>
        {isExpanded
          ? cleanedContent
          : `${trimmedContent}${hasMoreToShow ? '...' : ''}`}
      </StyledTruncatedText>
      {expandable && hasMoreToShow && (
        <>
          {' '}
          <Link
            aria-atomic={true}
            aria-label={`${toggleText}, shows more content`}
            aria-live="assertive"
            href="#"
            onClick={handleToggle}
            reverseUnderline
            role="button"
          >
            {toggleText}
          </Link>
        </>
      )}
    </>
  );
};

TruncatedText.displayName = 'TruncatedText';
