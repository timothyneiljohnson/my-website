import NextLink from 'next/link';
import { useCallback, useRef, useState } from 'react';
import parse from 'html-react-parser';
import {
  PostBody,
  Day,
  Month,
  PostHeading,
  PostInnerContainer,
  PostWrapper,
  TeardropCategoryWrapper,
  TeardropCategoryInner,
  ExcerptImageWrapper,
  StyledRibbon,
  StyledPostImage,
} from './styles';
import { shortMonthNames } from './constants';
import { PostInfo } from './PostInfoContent';
import { CategoryIcon } from './CategoryIcon';
import { colors, gradients } from '../../../common-components/design-tokens';
import { useMediaQueries } from '../../../common-components/media-queries-context';
import { Col } from '../../../common-components/Col';
import { Grid } from '../../../common-components/Grid';
import { Link } from '../../../common-components/Link';
import { Row } from '../../../common-components/Row';
import { StickyElement } from '../../../common-components/StickyElement';
import { useStorageDarkMode } from '../../../common-components/storage-dark-mode-context';
import { Outdent } from '../../../common-components/Outdent';

export const Post = ({ post }) => {
  const ref = useRef(null);
  const [isRibbonHovered, setIsRibbonHovered] = useState(false);
  const toggleRibbonHover = useCallback(() => {
    setIsRibbonHovered(!isRibbonHovered);
  }, [isRibbonHovered]);
  const postDateMonth = new Date(post.date).getMonth();
  const shortMonth = shortMonthNames[postDateMonth];
  const dateOfMonth = new Date(post.date).getDate();
  const featuredMedia = post._embedded['wp:featuredmedia'] ?? {};
  const featuredImg = featuredMedia['0']?.source_url;

  const { xsMax, smMax, mdMax, sm } = useMediaQueries();
  const { isDarkMode } = useStorageDarkMode();

  let postHeadingSize = 1;
  if (xsMax) {
    postHeadingSize = 4;
  } else if (smMax) {
    postHeadingSize = 3;
  } else if (mdMax) {
    postHeadingSize = 2;
  }

  let ribbonTop = 0;
  if (!isDarkMode) {
    if (smMax) {
      ribbonTop = 1;
    } else if (!isDarkMode) {
      ribbonTop = 2;
    }
  }

  return (
    <PostWrapper isDarkMode={isDarkMode} ref={ref}>
      <Grid>
        <Row>
          <Col flex md={9} sm={8} xs={12}>
            <PostInnerContainer isDarkMode={isDarkMode}>
              <div
                onMouseEnter={toggleRibbonHover}
                onMouseLeave={toggleRibbonHover}
              >
                <StyledRibbon
                  endStyle={isRibbonHovered ? 'point' : 'split'}
                  gradientEnd={gradients.secondary.end}
                  gradientStart={gradients.secondary.start}
                  right={smMax ? 20 : 36}
                  textColor={colors.white}
                  thickness={smMax ? 45 : 62}
                  top={ribbonTop}
                >
                  <div aria-hidden>
                    {xsMax && (
                      <CategoryIcon categories={post.categories} size={26} />
                    )}
                    <Day>{dateOfMonth}</Day>
                    <Month>{shortMonth}</Month>
                  </div>
                </StyledRibbon>
              </div>
              <Outdent horizontal={3}>
                <PostBody isDarkMode={isDarkMode}>
                  {sm && (
                    <TeardropCategoryWrapper isDarkMode={isDarkMode}>
                      <TeardropCategoryInner>
                        <CategoryIcon
                          categories={post.categories}
                          size={smMax ? 22 : 26}
                        />
                      </TeardropCategoryInner>
                    </TeardropCategoryWrapper>
                  )}
                  <PostHeading
                    color={isDarkMode ? colors.white : colors.grayDarker}
                    level={2}
                    size={postHeadingSize}
                  >
                    <NextLink href={`/post/${post.id}`} passHref>
                      {parse(post.title.rendered)}
                    </NextLink>
                  </PostHeading>
                  {featuredImg && (
                    <NextLink href={`/post/${post.id}`} legacyBehavior passHref>
                      <a>
                        <ExcerptImageWrapper>
                          <StyledPostImage
                            alt={post.title.rendered}
                            fill
                            priority
                            sizes={smMax ? '90vw' : '50vw'}
                            src={featuredImg}
                          />
                        </ExcerptImageWrapper>
                      </a>
                    </NextLink>
                  )}
                  <div>
                    <div>{parse(post.excerpt.rendered)}</div>
                    <p>
                      <NextLink href={`/post/${post.id}`} legacyBehavior passHref>
                        <Link
                          color={isDarkMode ? colors.secondary : colors.primary}
                          reverseUnderline
                        >
                          Continue reading
                        </Link>
                      </NextLink>
                    </p>
                  </div>
                </PostBody>
              </Outdent>
            </PostInnerContainer>
          </Col>
          <Col flex md={3} sm={4} xs={12} xsHiddenDown>
            <StickyElement
              topOffset={20}
            >
              <PostInfo date={post.date} title={post.title.rendered} />
            </StickyElement>
          </Col>
        </Row>
      </Grid>
    </PostWrapper>
  );
};

Post.displayName = 'Post';
