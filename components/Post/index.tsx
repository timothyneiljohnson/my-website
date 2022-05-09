import NextLink from 'next/link';
import { useCallback, useRef, useState } from 'react';
import parse from 'html-react-parser';
import {
  PostBody,
  Day,
  Month,
  PostHeading,
  ExcerptImage,
  PostInnerContainer,
  PostWrapper,
  TeardropCategoryWrapper,
  TeardropCategoryInner,
} from './styles';
import { shortMonthNames } from './constants';
import { PostInfo } from './PostInfoContent';
import { CategoryIcon } from './CategoryIcon';
import { colors, gradients } from '../../common-components/design-tokens';
import { useMediaQueries } from '../media-queries-context';
import { Col, Grid, Link, Ribbon, Row, StickyElement } from '../../common-components';
import { useStorageDarkMode } from '../storage-dark-mode-context';

export const Post = ({ post }) => {
  const ref = useRef(null);
  const [isRibbonHovered, setIsRibbonHovered] = useState(false);
  const toggleRibbonHover = useCallback(() => {
    setIsRibbonHovered(!isRibbonHovered);
  }, [isRibbonHovered]);

  const shortMonth = shortMonthNames[new Date(post.date).getMonth()];
  const dateOfMonth = new Date(post.date).getDate();
  const featuredMedia = post._embedded['wp:featuredmedia'] ?? {};
  const featuredImg = featuredMedia['0']?.source_url;

  const { xsMax, smMax, sm } = useMediaQueries();
  const { isDarkMode } = useStorageDarkMode();

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
                <Ribbon
                  endStyle={isRibbonHovered ? 'point' : 'split'}
                  gradientEnd={gradients.secondary.end}
                  gradientStart={gradients.secondary.start}
                  right={smMax ? 24 : 36}
                  textColor={colors.white}
                  thickness={smMax ? 45 : 62}
                  top={isDarkMode ? 0 : 2}
                >
                  {xsMax && (
                    <CategoryIcon categories={post.categories} size={26} />
                  )}
                  <Day>{dateOfMonth}</Day>
                  <Month>{shortMonth}</Month>
                </Ribbon>
              </div>
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
                  color={colors.grayDarkest}
                  isDarkMode={isDarkMode}
                  level={2}
                  size={1}
                >
                  {post.title.rendered}
                </PostHeading>
                {featuredImg && (
                  <NextLink href={`/post/${post.id}`} passHref>
                    <a>
                      <ExcerptImage src={featuredImg} />
                    </a>
                  </NextLink>
                )}
                <div>
                  <div>{parse(post.excerpt.rendered)}</div>
                  <p>
                    <NextLink href={`/post/${post.id}`} passHref>
                      <Link noUnderline>Continue reading</Link>
                    </NextLink>
                  </p>
                </div>
              </PostBody>
            </PostInnerContainer>
          </Col>
          <Col flex md={3} sm={4} xs={12} xsHiddenDown>
            <StickyElement
              targetBottomOffset={-38}
              targetRef={ref}
              targetTopOffset={20}
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
