import styled from 'styled-components';

export const FilterList = styled.ul`
  padding: 3px 0 0 5px;
  font-size: 12px;
  height: 60px;
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
`;

export const FilterListWrapper = styled.div`
  width: 100%;
  margin-top: 23px;
  overflow: hidden;
`;

export const FilterListItemStyled = styled.li`
  display: inline-block;
  margin: 0 12px 0 0;
`;

export const HiddenForeshadow = styled.div`
  overflow: hidden;
  height: 0;
`;