import React from 'react';
import { Badge } from '..';
import { colors } from '../design-tokens';
import { PlainGrid } from '../PlainGrid';
import { StandardSizes } from '../types';

export default {
  title: 'Common/Badge',
  component: Badge,
};

export const Default = ({ inline, color, textColor }) => (
  <>
    <div>
      {['green', 'blue', 'orange', 'red', 'gray'].map(
        (badgeColor: StandardSizes, i) => (
          <span
            key={i}
            style={{
              position: 'relative',
              marginRight: '15px',
              fontSize: `${i * 2 + 14}px`,
            }}
          >
            Inline Badge
            <Badge color={badgeColor} inline pill textColor={textColor}>
              999
            </Badge>
          </span>
        )
      )}
    </div>
    <div style={{ fontSize: '16px', margin: '20px  0 40px' }}>
      {['green', 'blue', 'orange', 'red', 'gray'].map(
        (badgeColor: StandardSizes, i) => (
          <span
            key={i}
            style={{
              position: 'relative',
              marginRight: '15px',
              fontSize: `${i * 2 + 14}px`,
            }}
          >
            Inline Badge
            <Badge color={badgeColor} inline textColor={textColor}>
              999
            </Badge>
          </span>
        )
      )}
    </div>
    <PlainGrid columns={5} min="180px" rowGap="20px">
      {['xs', 'sm', 'md', 'lg', 'xl'].map((size: StandardSizes, i) => (
        <div key={i} style={{ maxWidth: '180px' }}>
          {[...Array(3)].map((_, index) => (
            <span
              key={i}
              style={{
                position: 'relative',
                margin: `0 ${(index + 1) * 10 + 30}px 20px 0`,
                fontSize: `${index * 3 + 14}px`,
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              {`Badge (${size})`}
              <Badge
                color={color}
                inline={inline}
                pill
                size={size}
                textColor={textColor}
              >
                1
              </Badge>
            </span>
          ))}
        </div>
      ))}
    </PlainGrid>
  </>
);

export const GithubStyleLabels = () => (
  <div
    style={{
      position: 'relative',
      marginRight: '15px',
      fontSize: '12px',
    }}
  >
    Pill labels/badges next to inline text.
    <Badge color="#b60205" inline pill size="md" textColor={colors.white}>
      don&apos;t merge
    </Badge>
    <Badge color="#a2eeef" inline pill size="md" textColor={colors.grayDarkest}>
      enhancement
    </Badge>
    <Badge color="#66FF66" inline pill size="md" textColor={colors.grayDarkest}>
      ephemeral
    </Badge>
  </div>
);
