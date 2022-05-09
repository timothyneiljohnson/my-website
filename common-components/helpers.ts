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
    newColor += (`00${color}`).substring(color.length);
  }

  return newColor;
};

export const pluralize = (string: string, array?: any[], custom?: string) =>
  Math.abs(array.length) === 1
    ? string
    : `${string}${custom ?? 's'}`;
