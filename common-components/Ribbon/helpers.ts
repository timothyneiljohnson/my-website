export const getRibbonClipPath = ({
  endStyle,
  side,
  lift
}) => {
  const pathStyleMap = {
    split: {
      top: `clip-path: polygon(0 0, 0 100%, 50% calc(100% - ${lift}px), 100% 100%, 100% 0);`,
      left: `clip-path: polygon(0 0, 0 100%, 100% 100%, calc(100% - ${lift}px) 50%, 100% 0);`,
      right: `clip-path: polygon(0 0, ${lift}px 50%, 0 100%, 100% 100%, 100% 0);`,
    },
    point: {
      top: `clip-path: polygon(0 0, 0 calc(100% - ${lift}px), 50% 100%, 100% calc(100% - ${lift}px), 100% 0);`,
      left: `clip-path: polygon(0 0, 0 100%, calc(100% - ${lift}px) 100%, 100% 50%, calc(100% - ${lift}px) 0);`,
      right: `clip-path: polygon(${lift}px 0, 0 50%, ${lift}px 100%, 100% 100%, 100% 0);`,
    },
    slant: {
      top: `clip-path: polygon(0 0, 0 calc(100% - ${lift}px), 50% calc(100% - ${lift / 2}px), 100% 100%, 100% 0);`,
      left: `clip-path: polygon(0 0, 0 100%, 100% 100%, calc(100% - ${lift / 2}px) 50%, calc(100% - ${lift}px) 0);`,
      right: `clip-path: polygon(${lift}px 0, ${lift / 2}px 50%, 0 100%, 100% 100%, 100% 0);`,
    },
    reverseSlant: {
      top: `clip-path: polygon(0 0, 0 100%, 50% calc(100% - ${lift / 2}px), 100% calc(100% - ${lift}px), 100% 0);`,
      left: `clip-path: polygon(0 0, 0 100%, calc(100% - ${lift}px) 100%, calc(100% - ${lift / 2}px) 50%, 100% 0);`,
      right: `clip-path: polygon(0 0, ${lift / 2}px 50%, ${lift}px 100%, 100% 100%, 100% 0);`,
    },
  };
  return pathStyleMap[endStyle][side];
};
