export const colorLuminance = (hexColor: string, lum: number) => {
  // validate hex string
  const validatedHexColor = String(hexColor).replace(/[^0-9a-f]/gi, '');
  let hexColorValue = validatedHexColor;
  if (validatedHexColor.length < 6) {
    hexColorValue =
      validatedHexColor[0] +
      validatedHexColor[0] +
      validatedHexColor[1] +
      validatedHexColor[1] +
      validatedHexColor[2] +
      validatedHexColor[2];
  }
  const lumValue = lum || 0;

  // Convert and change luminosity
  let newColor = '#';
  let color: number | string;
  let index: number;
  for (index = 0; index < 3; index += 1) {
    color = parseInt(hexColorValue.substring(index * 2, index * 2 + 2), 16);
    color = Math.round(
      Math.min(Math.max(0, color + color * lumValue), 255)
    ).toString(16);
    newColor += `00${color}`.substring(color.length);
  }

  return newColor;
};

const hexToRgbParts = (hexColor: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexColorValue = hexColor.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hexColorValue
  );
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const hexToRgb = (hexColor: string) => {
  const { r, g, b } = hexToRgbParts(hexColor);
  return `rgb(${r}, ${g}, ${b})`;
};

export const hexToRgba = (hexColor: string, alpha: number) => {
  const { r, g, b } = hexToRgbParts(hexColor);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const pluralize = (string: string, array?: any[], custom?: string) =>
  Math.abs(array.length) === 1 ? string : `${string}${custom ?? 's'}`;
