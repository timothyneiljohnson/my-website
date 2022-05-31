import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActionBar,
  AnimatedReactionImage,
  FullWidthButton,
  StaticReactionImage,
  StyledReactionsSelector,
  StyledReactionsSelectorInner,
  StyledReactionTypeSpan,
  StyledActionButtonInner,
  StyledActionIcon,
  StyledLikeButtonInner,
  StyledActionCol,
  reactionSvgs,
} from './styles';
import { Grid } from '../../../common-components/Grid';
import { Row } from '../../../common-components/Row';
import { colors } from '../../../common-components/design-tokens';

export const Reactions = () => {
  const [isReactionSelectorShown, setIsReactionSelectorShown] = useState(false);
  const [reactionType, setReactionType] = useState(null);
  const [isStaticReactionAnimating, setIsStaticReactionAnimating] =
    useState(null);
  const reactionSelectorShownTimeout = useRef(null);
  const reactionSelectorHiddenTimeout = useRef(null);

  const delayedShowReactionsSelector = useCallback(() => {
    reactionSelectorShownTimeout.current = setTimeout(() => {
      setIsReactionSelectorShown(true);
    }, 400);
    clearTimeout(reactionSelectorHiddenTimeout.current);
  }, []);

  const delayedHideReactionsSelector = useCallback(() => {
    reactionSelectorHiddenTimeout.current = setTimeout(() => {
      setIsReactionSelectorShown(false);
    }, 800);
    clearTimeout(reactionSelectorShownTimeout.current);
  }, []);

  const hideReactionsSelector = useCallback(() => {
    setIsReactionSelectorShown(false);
    clearTimeout(reactionSelectorShownTimeout.current);
  }, [reactionSelectorShownTimeout]);

  const toggleLike = useCallback(() => {
    setReactionType(reactionType ? null : 'like');
    hideReactionsSelector();
  }, [hideReactionsSelector, reactionType]);

  const handleSetReactionType = useCallback(
    (reactionTypeValue) => {
      setReactionType(reactionTypeValue);
      hideReactionsSelector();
    },
    [hideReactionsSelector]
  );

  useEffect(() => {
    // Start + end static reaction emphasis animation
    if (reactionType) {
      setIsStaticReactionAnimating(true);
      setTimeout(() => {
        setIsStaticReactionAnimating(false);
      }, 1000);
    }
  }, [reactionType]);

  useEffect(
    () => () => {
      // Clean up on unmount
      clearTimeout(reactionSelectorShownTimeout.current);
      clearTimeout(reactionSelectorHiddenTimeout.current);
    },
    []
  );

  const staticReactionIcon = reactionType
    ? reactionSvgs[reactionType]
    : reactionSvgs.default;

  return (
    <ActionBar>
      <Grid>
        <Row>
          <StyledActionCol
            center
            onMouseEnter={delayedShowReactionsSelector}
            onMouseLeave={delayedHideReactionsSelector}
            xs={4}
          >
            {isReactionSelectorShown && (
              <StyledReactionsSelector>
                <StyledReactionsSelectorInner>
                  <button onClick={() => handleSetReactionType('like')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/like.gif"
                      width={40}
                    />
                  </button>
                  <button onClick={() => handleSetReactionType('love')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/love.gif"
                      width={40}
                    />
                  </button>
                  <button onClick={() => handleSetReactionType('care')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/care.gif"
                      width={40}
                    />
                  </button>
                  <button onClick={() => handleSetReactionType('laugh')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/laugh.gif"
                      width={40}
                    />
                  </button>
                  <button onClick={() => handleSetReactionType('wow')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/wow.gif"
                      width={40}
                    />
                  </button>
                  <button onClick={() => handleSetReactionType('sad')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/sad.gif"
                      width={40}
                    />
                  </button>
                  <button onClick={() => handleSetReactionType('angry')}>
                    <AnimatedReactionImage
                      height={40}
                      src="/image-assets/reactions/angry.gif"
                      width={40}
                    />
                  </button>
                </StyledReactionsSelectorInner>
              </StyledReactionsSelector>
            )}
            <FullWidthButton onClick={toggleLike}>
              <StyledLikeButtonInner
                isActive={reactionType !== null}
                reactionType={reactionType}
              >
                <StaticReactionImage
                  animate={isStaticReactionAnimating}
                  height={19}
                  src={staticReactionIcon}
                  width={19}
                />
                <StyledReactionTypeSpan>
                  {reactionType ?? 'like'}
                </StyledReactionTypeSpan>
              </StyledLikeButtonInner>
            </FullWidthButton>
          </StyledActionCol>
          <StyledActionCol center xs={4}>
            <FullWidthButton>
              <StyledActionButtonInner>
                <StyledActionIcon
                  fill={colors.grayDark}
                  name="chatbox-outline"
                  size={20}
                />
                Comment
              </StyledActionButtonInner>
            </FullWidthButton>
          </StyledActionCol>
          <StyledActionCol center xs={4}>
            <FullWidthButton>
              <StyledActionButtonInner>
                <StyledActionIcon
                  fill={colors.grayDark}
                  name="arrow-redo-outline"
                  size={22}
                />
                Share
              </StyledActionButtonInner>
            </FullWidthButton>
          </StyledActionCol>
        </Row>
      </Grid>
    </ActionBar>
  );
};

Reactions.displayName = 'Reactions';
