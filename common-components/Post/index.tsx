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
import { StickyElement } from '../StickyElement';
import { CategoryIcon } from './CategoryIcon';
import { colors, gradients } from '../design-tokens';
import { useMediaQueries } from '../../components/media-queries-context';
import { Col, Grid, Link, Ribbon, Row } from '..';
import { useStorageDarkMode } from '../../components/storage-dark-mode-context';

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
          <Col xs={12} sm={8} md={9} flex>
            <PostInnerContainer isDarkMode={isDarkMode}>
              <div
                onMouseEnter={toggleRibbonHover}
                onMouseLeave={toggleRibbonHover}
              >
                <Ribbon
                  thickness={smMax ? 45 : 62}
                  textColor={colors.white}
                  gradientStart={gradients.secondary.start}
                  gradientEnd={gradients.secondary.end}
                  right={smMax ? 24 : 36}
                  top={isDarkMode ? 0 : 2}
                  endStyle={isRibbonHovered ? 'point' : 'split'}
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
                      <CategoryIcon categories={post.categories} size={smMax ? 22 : 26} />
                    </TeardropCategoryInner>
                  </TeardropCategoryWrapper>
                )}
                <PostHeading level={2} size={1} color={colors.grayDarkest} isDarkMode={isDarkMode}>
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
          <Col xs={12} sm={4} md={3} xsHiddenDown flex>
            <StickyElement
              targetRef={ref}
              targetTopOffset={20}
              targetBottomOffset={-38}
            >
              <PostInfo title={post.title.rendered} date={post.date} />
            </StickyElement>
          </Col>
        </Row>
      </Grid>
    </PostWrapper>
  );
};

Post.displayName = 'Post';
