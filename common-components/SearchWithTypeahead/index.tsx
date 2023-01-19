import React, { useCallback, useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  TypeaheadDropdown,
  TypeaheadResult,
} from './styles';
import { colors } from '../design-tokens';
import { Grid } from '../Grid';
import { Row } from '../Row';
import { Col } from '../Col';
import { StandardSizes } from '../types';

interface SearchWithTypeaheadProps {
  onChange: (query: string) => void;
  onSubmit: (query: string) => void;
  results: {
    title: string;
    url: string;
  }[];
  bgColor?: string;
  borderColor?: string;
  placeholderColor?: string;
  textColor?: string;
  size?: StandardSizes;
}

const iconSizeMap = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 26,
};

export const SearchWithTypeahead = ({
  onChange,
  onSubmit,
  results = [],
  size = 'md',
  bgColor = colors.white,
  borderColor = colors.grayLighter,
  placeholderColor = colors.grayLighter,
  textColor = colors.grayDarker,
}: SearchWithTypeaheadProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const wrapperRef = useRef(null);

  const onKeyDownCallback = useCallback(
    (event) => {
      const hasFocusedResult = resultsRef?.current?.contains(
        document.activeElement
      );

      if (showDropdown) {
        if (event.key === 'Escape') {
          setShowDropdown(false);
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();

          if (hasFocusedResult && event.target.nextSibling) {
            event.target.nextSibling.focus();
          } else {
            resultsRef.current.children[0].focus();
          }
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();

          if (hasFocusedResult && event.target.previousSibling) {
            event.target.previousSibling.focus();
          } else {
            resultsRef.current.children[results.length - 1].focus();
          }
        }
      }
    },
    [results, resultsRef, showDropdown]
  );

  const handleOutsideClick = useCallback((event) => {
    if (wrapperRef?.current && !wrapperRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownCallback, false);
    return () => {
      document.removeEventListener('keydown', onKeyDownCallback, false);
    };
  }, [onKeyDownCallback]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleOutsideClick, onKeyDownCallback]);

  const handleSearchInputChange = useCallback(
    (e) => {
      const query = e.target.value;
      onChange(query);
      setSearchValue(query);
    },
    [onChange]
  );

  useEffect(() => {
    setShowDropdown(results?.length > 0);
  }, [results]);

  // TODO: ARROW KEYS, ENTER KEY, IMPLEMENT USING WP SEARCH, COLOR OPTIONS

  return (
    <SearchContainer
      ref={wrapperRef}
      size={size}
      style={{
        '--bg-color': bgColor,
        '--border-color': borderColor,
        '--placeholder-color': placeholderColor,
        '--texdt-color': textColor,
      }}
    >
      <Grid style={{ height: '100%' }}>
        <Row style={{ height: '100%' }}>
          <Col flex middle shrink>
            <SearchIcon
              fill={placeholderColor}
              name="search-outline"
              size={iconSizeMap[size]}
            />
          </Col>
          <Col flex grow middle>
            <SearchInput
              onChange={handleSearchInputChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  onSubmit(searchValue);
                }
              }}
              placeholder="Search"
              ref={inputRef}
              value={searchValue}
            />
          </Col>
        </Row>
      </Grid>

      {showDropdown && (
        <TypeaheadDropdown ref={resultsRef}>
          {results.map((result, i) => (
            <TypeaheadResult href={result.url} key={i} role="list" size={size}>
              {parse(result.title)}
            </TypeaheadResult>
          ))}
        </TypeaheadDropdown>
      )}
    </SearchContainer>
  );
};
