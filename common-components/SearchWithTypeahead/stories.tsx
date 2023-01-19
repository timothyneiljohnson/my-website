import React, { useCallback, useState } from 'react';
import { SearchWithTypeahead } from '.';
import { StandardSizes } from '../types';
import { spacing } from '../design-tokens';

export default {
  title: 'Common/SearchWithTypeahead',
  component: SearchWithTypeahead,
};

const BaseStory = ({ size, ...restProps }) => {
  const [results, setResults] = useState(null);
  const fetchResultsMock = useCallback((query: string) => {
    setResults(
      query !== ''
        ? [...Array(10)].map((_, i) => ({
            title: `Result ${i + 1} for "${query}"`,
            url: '#',
          }))
        : []
    );
  }, []);

  const handleChange = useCallback(
    async (query: string) => {
      fetchResultsMock(query);
    },
    [fetchResultsMock]
  );

  const handleSubmit = useCallback((query: string) => {
    window.location.href = `/s?${encodeURI(query)}`;
  }, []);

  return (
    <div style={{ marginTop: spacing.x4 }}>
      <SearchWithTypeahead
        onChange={handleChange}
        onSubmit={handleSubmit}
        results={results}
        size={size}
        {...restProps}
      />
    </div>
  );
};

export const Default = ({
  bgColor,
  borderColor,
  placeholderColor,
  textColor,
}) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size: StandardSizes, i) => (
    <div
      key={i}
      style={{ position: 'relative', marginTop: spacing.x4, zIndex: 300 - i }}
    >
      <BaseStory
        bgColor={bgColor}
        borderColor={borderColor}
        placeholderColor={placeholderColor}
        size={size}
        textColor={textColor}
      />
    </div>
  ));
Default.args = {};
