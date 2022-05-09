import styled, { css } from 'styled-components';
import { ColProps, RowColBaseProps } from './types';
import config, { SCREEN_SIZES } from './config';

const endProps = SCREEN_SIZES.map((size) => `${size}End`);
const growProps = SCREEN_SIZES.map((size) => `${size}Grow`);
const hiddenDownProps = SCREEN_SIZES.map((size) => `${size}HiddenDown`);
const hiddenUpProps = SCREEN_SIZES.map((size) => `${size}HiddenUp`);
const offsetProps = SCREEN_SIZES.map((size) => `${size}Offset`);
const shrinkProps = SCREEN_SIZES.map((size) => `${size}Shrink`);

export const applyStyleToScreenSizesAndDefault = (
  props: any,
  propName: string,
  styles: string
) => {
  const propNamePascalCase =
    propName.charAt(0).toUpperCase() + propName.slice(1);
  const propNameRegex = new RegExp(`${propNamePascalCase}$`);
  const propValue = props[propName];

  const stylesPerSize = Object.keys(props)
    .filter((key) =>
      SCREEN_SIZES.map((size) => size + propNamePascalCase).includes(key)
    )
    .map(
      (key) =>
        config(props).minMedia[key.replace(propNameRegex, '')]`
        ${styles}
      `
    );

  const defaultStyle =
    propValue === true
      ? `
        ${styles}
      `
      : '';

  return css`
    ${stylesPerSize}
    ${defaultStyle}
  `;
};

export const RowColBase = styled.div<RowColBaseProps>`
  ${(props) => css`
    /* Around */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'around',
      'justify-content: space-around;'
    )}

    /* Between */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'between',
      'justify-content: space-between;'
    )}

    /* Bottom */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'bottom',
      'align-items: flex-end;'
    )}

    /* Center */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'center',
      'justify-content: center;'
    )}

    /* First */
    ${applyStyleToScreenSizesAndDefault(props, 'first', 'order: -1;')}

    /* Last */
    ${applyStyleToScreenSizesAndDefault(props, 'last', 'order: 1;')}
    
    /* Middle */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'middle',
      'align-items: center;'
    )}

    /* Reverse */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'reverse',
      'flex-direction: column-reverse;'
    )}
    
    /* Start */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'start',
      'justify-content: flex-start;'
    )}
    
    /* Top */
    ${applyStyleToScreenSizesAndDefault(
      props,
      'top',
      'align-items: flex-start;'
    )}
  `}

  /* End */
  ${(props) =>
    Object.keys(props)
      .filter((key) => endProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/End$/, '')]`
          justify-content: flex-end;
        `
      )}

  ${(props) =>
    props.endProp === true
      ? `
        justify-content: flex-end;
      `
      : ''}
`;

export const StyledCol = styled(RowColBase)<ColProps>`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${(props) => config(props).gutterWidth / 2}px;
  padding-left: ${(props) => config(props).gutterWidth / 2}px;

  /* Grow */
  ${(props) =>
    Object.keys(props)
      .filter((key) => growProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/Grow$/, '')]`
          flex-grow: ${props[key] === true ? 1 : props[key]};
        `
      )}

  ${(props) =>
    props.grow &&
    `
      flex-grow: ${props.grow === true ? 1 : props.grow};
      `}

  /* Shrink */
  ${(props) =>
    Object.keys(props)
      .filter((key) => shrinkProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/Shrink$/, '')]`
          flex-shrink: ${props[key] === true ? 1 : props[key]};
        `
      )}

  ${(props) =>
    props.shrink && `flex-shrink: ${props.shrink === true ? 1 : props.shrink}`};

  /* Offset */
  ${(props) =>
    Object.keys(props)
      .filter((key) => offsetProps.includes(key))
      .map(
        (key) =>
          config(props).minMedia[key.replace(/Offset$/, '')]`
            margin-left: ${(100 / config(props).gridSize) * props[key]}%;
          `
      )}

  ${(props) =>
    props.offset &&
    `
      margin-left: ${(100 / config(props).gridSize) * props.offset}%;
    `}

  /* Col sizing */
  ${(props) =>
    Object.keys(props)
      .filter((key) => SCREEN_SIZES.includes(key))
      .sort(
        (key1, key2) => SCREEN_SIZES.indexOf(key1) - SCREEN_SIZES.indexOf(key2)
      )
      .map(
        (key) =>
          config(props).minMedia[key]`${
            Number.isInteger(props[key])
              ? // Integer value
                `
                  --column-flex-basis: calc((100 - (var(--column-gap, 0) * ((${
                    config(props).gridSize / props[key]
                  }) - 1))) / (${config(props).gridSize / props[key]}) * 1%);
                  flex-basis: var(--column-flex-basis);
                  max-width: var(--column-flex-basis);
                  display: ${props.flex ? 'flex' : 'block'};
                `
              : // Auto-width
                `
                  flex-grow: 1;
                  flex-basis: 0;
                  max-width: 100%;
                  display: block;
                `
          }`
      )}

  /* Hidden - Down */
  ${(props) =>
    Object.keys(props)
      .filter((key) => hiddenDownProps.includes(key))
      .map(
        (key) => config(props).maxMedia[`${key.replace(/HiddenDown$/, '')}Max`]`
          display: none;
        `
      )}

  /* Hidden - Up */
  ${(props) =>
    Object.keys(props)
      .filter((key) => hiddenUpProps.includes(key))
      .map(
        (key) => config(props).minMedia[key.replace(/HiddenUp$/, '')]`
          display: none;
        `
      )}
`;
