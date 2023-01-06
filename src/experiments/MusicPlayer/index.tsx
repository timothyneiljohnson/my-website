import { useCallback, useEffect, useRef, useState } from 'react';
import { Col } from '../../../common-components/Col';
import { Divider } from '../../../common-components/Divider';
import { Grid } from '../../../common-components/Grid';
import { Icon } from '../../../common-components/Icon';
import { Image } from '../../../common-components/Image';
import { PlainGrid } from '../../../common-components/PlainGrid';
import { Row } from '../../../common-components/Row';
import { Slider } from '../../../common-components/Slider';
import { colors } from '../../../common-components/design-tokens';
import { pluralize } from '../../../common-components/helpers';
import {
  CurrentTrackTitle,
  CurrentTrackSummaryCol,
  HoverIcon,
  MainPlayIcon,
  DEFAULT_PRIMARY_COLOR,
  RepeatTrackDecoration,
  SoundBarGif,
  StyledMusicPlayer,
  SuperHeading,
  TracklistGrid,
  TracklistInfoRow,
  TrackNumber,
  TrackPlayIcon,
  TrackRow,
} from './styles';
import tracklistInfo from './__fixtures__/tracklistInfo';

const playlists = [
  'Running',
  'August 2021',
  'Pump-Up Music',
  'Wedding Playlist Ideas',
  'Discover Weekly',
  'Starred',
];

interface TrackProps {
  file: string;
  seconds: number;
  title: string;
  artist: string;
  isFavorite?: boolean;
  plays: string;
}
interface TracklistInfoProps {
  creator: {
    image: string;
    name: string;
  };
  image: string;
  name: string;
  type: string;
  year: string;
  totalSeconds: number;
  tracklist: TrackProps[];
}

interface MusicPlayerProps {
  primaryColor?: string;
}
export const MusicPlayer = ({
  primaryColor = DEFAULT_PRIMARY_COLOR,
}: MusicPlayerProps) => {
  const { tracklist, creator, image, name, type, year }: TracklistInfoProps =
    tracklistInfo;
  const initialVolume =
    JSON.parse(localStorage.getItem('musicPlayerPreferences'))
      ?.volumePreference ?? 0.1;
  const [isMounted, setIsMounted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackProps>(
    tracklistInfo.tracklist[0]
  );
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeatAlbum, setIsRepeatAlbum] = useState(false);
  const [isRepeatTrack, setIsRepeatTrack] = useState(false);
  const [playheadCurrentSeconds, setPlayheadCurrentSeconds] = useState(0);
  const [
    shouldAnimateCurrentTitleMarquee,
    setShouldAnimateCurrentTitleMarquee,
  ] = useState(false);
  const [volumePreference, setVolumePreference] = useState(initialVolume);
  const [volumePreferenceBeforeMute, setVolumePreferenceBeforeMute] =
    useState(0);
  const [isMuted, setIsMuted] = useState(initialVolume === 0);
  const [tracklistWithFavorites, setTracklistWithFavorites] =
    useState(tracklist);
  const audioRef = useRef(new Audio(currentTrack.file));

  // Play after double-click on track row
  const handleTrackRowClick = useCallback(
    (event, i) => {
      if (event.detail === 2) {
        setIsPlaying(true);
        setCurrentTrack(tracklist[i]);
        setCurrentTrackIndex(i);
      }
    },
    [tracklist]
  );

  const handleTrackRowPlayPauseClick = useCallback(
    (i, isTrackPlaying) => {
      setIsPlaying(!isTrackPlaying);
      setCurrentTrack(tracklist[i]);
      setCurrentTrackIndex(i);
    },
    [tracklist]
  );

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleNextTrack = useCallback(() => {
    let nextIndex: number;

    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * tracklist.length);
      if (nextIndex === currentTrackIndex) {
        return handleNextTrack();
      }
    } else {
      nextIndex =
        currentTrackIndex === tracklist.length - 1 ? 0 : currentTrackIndex + 1;
    }

    setIsPlaying(true);
    setCurrentTrack(tracklist[nextIndex]);
    return setCurrentTrackIndex(nextIndex);
  }, [currentTrackIndex, isShuffled, tracklist]);

  const handlePreviousTrack = useCallback(() => {
    const previousIndex =
      currentTrackIndex === 0 ? tracklist.length - 1 : currentTrackIndex - 1;
    setIsPlaying(true);
    setCurrentTrack(tracklist[previousIndex]);
    setCurrentTrackIndex(previousIndex);
  }, [currentTrackIndex, tracklist]);

  const handleShuffleClick = useCallback(() => {
    setIsRepeatAlbum(false);
    setIsRepeatTrack(false);
    setIsShuffled(!isShuffled);
  }, [isShuffled]);

  const handleRepeatClick = useCallback(() => {
    setIsShuffled(false);
    if (!isRepeatAlbum && !isRepeatTrack) {
      setIsRepeatAlbum(true);
    } else if (isRepeatAlbum) {
      setIsRepeatAlbum(false);
      setIsRepeatTrack(true);
    } else {
      setIsRepeatAlbum(false);
      setIsRepeatTrack(false);
    }
  }, [isRepeatAlbum, isRepeatTrack]);

  const toggleFavoriteTrack = useCallback(
    (i) => {
      const newValue = [...tracklistWithFavorites];
      newValue[i].isFavorite = !tracklistWithFavorites[i].isFavorite;

      setTracklistWithFavorites(newValue);
    },
    [tracklistWithFavorites]
  );

  const handleVolumeChange = useCallback((value) => {
    setVolumePreference(value);
    setIsMuted(value === 0);
  }, []);

  const toggleMute = useCallback(() => {
    setVolumePreferenceBeforeMute(volumePreference);
    setVolumePreference(isMuted ? volumePreferenceBeforeMute || 0.1 : 0);
    setIsMuted(!isMuted);
  }, [isMuted, volumePreference, volumePreferenceBeforeMute]);

  const handlePlayheadScrub = useCallback((value) => {
    audioRef.current.currentTime = value;
    setPlayheadCurrentSeconds(value);
    setIsScrubbing(true);
  }, []);

  const handlePlayheadScrubEnd = useCallback(() => {
    setIsScrubbing(false);
  }, []);

  const handleTrackEnd = useCallback(() => {
    audioRef.current.pause();

    if (isRepeatTrack) {
      setPlayheadCurrentSeconds(0);
      audioRef.current.play();
    } else {
      handleNextTrack();
    }
  }, [handleNextTrack, isRepeatTrack]);

  const toggleAnimateCurrentTitleMarquee = useCallback(() => {
    setShouldAnimateCurrentTitleMarquee(!shouldAnimateCurrentTitleMarquee);
  }, [shouldAnimateCurrentTitleMarquee]);

  const formatPlayheadTime = (seconds: number) => {
    const dateTimeISOString = new Date(seconds * 1000).toISOString();
    let value =
      seconds < 3600
        ? dateTimeISOString.substring(14, 19)
        : dateTimeISOString.substring(11, 19);
    if (value[0] === '0') {
      value = value.substring(1, value.length);
    }
    return value;
  };

  const formatHourMinSecTime = (seconds: number) => {
    const dateTimeISOString = new Date(seconds * 1000).toISOString();
    const hoursInt = parseInt(dateTimeISOString.substring(11, 13));
    const minutesInt = parseInt(dateTimeISOString.substring(14, 16));
    const secondInt = parseInt(dateTimeISOString.substring(17, 19));
    const value = `${hoursInt > 0 ? `${hoursInt} hr` : ''} ${
      minutesInt > 0 ? `${minutesInt} min` : ''
    } ${secondInt > 0 ? `${secondInt} sec` : ''}`;

    return value;
  };

  // Bind play/pause
  useEffect(() => {
    if (isMounted) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      setIsMounted(true);
    }
  }, [audioRef, isMounted, isPlaying]);

  // Bind volume change
  useEffect(() => {
    audioRef.current.volume = volumePreference;
  }, [volumePreference]);

  // Bind track index change
  useEffect(() => {
    audioRef.current.pause();

    if (isMounted) {
      audioRef.current = new Audio(currentTrack.file);
      audioRef.current.play();
      setPlayheadCurrentSeconds(0);
      setIsPlaying(true);
    } else {
      setIsMounted(true);
    }
  }, [currentTrack.file, currentTrackIndex, isMounted]);

  // Bind scrub
  useEffect(() => {
    if (isMounted && isPlaying && isScrubbing) {
      audioRef.current.currentTime = playheadCurrentSeconds;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setIsMounted(true);
    }
  }, [isMounted, isPlaying, isScrubbing, playheadCurrentSeconds]);

  // Save volume preference in local storage
  useEffect(() => {
    localStorage.setItem(
      'musicPlayerPreferences',
      JSON.stringify({ volumePreference })
    );
  }, [volumePreference]);

  // Animate playhead
  useEffect(() => {
    let timerId: number;

    if (
      isPlaying &&
      audioRef.current.currentTime === audioRef.current.duration
    ) {
      return handleTrackEnd();
    }

    if (isPlaying && !isScrubbing) {
      const playheadAnimationFrame = () => {
        setPlayheadCurrentSeconds(audioRef.current.currentTime);
        timerId = requestAnimationFrame(playheadAnimationFrame);
      };
      timerId = requestAnimationFrame(playheadAnimationFrame);
      return () => cancelAnimationFrame(timerId);
    }
    return () => cancelAnimationFrame(timerId);
  }, [
    audioRef,
    handleTrackEnd,
    isPlaying,
    isScrubbing,
    playheadCurrentSeconds,
  ]);

  // Pause on unmount
  useEffect(() => () => audioRef.current.pause(), []);

  const formattedPlayheadCurrentTime = formatPlayheadTime(
    playheadCurrentSeconds
  );
  const formattedPlayheadTotalTime = formatPlayheadTime(currentTrack.seconds);
  const volumeIconString = volumePreference > 0.5 ? 'medium' : 'low';
  const volumeIconName = isMuted
    ? 'volume-mute-sharp'
    : `volume-${volumeIconString}-sharp`;
  const formattedTracklistTotalTime = formatHourMinSecTime(
    tracklistInfo.totalSeconds
  );

  const marqueeRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const marqueeTitleWidth = marqueeRef.current?.clientWidth;
  const marqueeContainerWidth = marqueeContainerRef.current?.clientWidth;
  const marqueeOverflowWidth = Math.max(
    marqueeTitleWidth - marqueeContainerWidth + 10,
    0
  );

  return (
    <StyledMusicPlayer>
      <Grid>
        <Row>
          <Col
            lg={3}
            sm={4}
            style={{
              backgroundColor: '#000',
              padding: '10px 20px 0',
            }}
            xl={2}
            xs={3}
            xsHiddenDown
          >
            {/* Home Nav */}
            <Grid>
              <Row style={{ fontWeight: '500' }}>
                <Col xs={12}>
                  <PlainGrid gap="15px" style={{ marginTop: '15px' }}>
                    <Row colGap={0.06} middle>
                      <Col flex middle>
                        <div style={{ display: 'flex' }}>
                          <Icon
                            fill={colors.grayLighter}
                            name="home-outline"
                            size={24}
                          />
                        </div>
                      </Col>
                      <Col grow>Home</Col>
                    </Row>
                    <Row colGap={0.06} middle>
                      <Col flex middle>
                        <div style={{ display: 'flex' }}>
                          <Icon
                            fill={colors.grayLighter}
                            name="search-outline"
                            size={24}
                          />
                        </div>
                      </Col>
                      <Col grow>Search</Col>
                    </Row>
                    <Row colGap={0.06} middle>
                      <Col flex middle>
                        <div style={{ display: 'flex' }}>
                          <Icon
                            fill={colors.grayLighter}
                            name="library-outline"
                            size={24}
                          />
                        </div>
                      </Col>
                      <Col grow>Your Library</Col>
                    </Row>
                  </PlainGrid>
                  <PlainGrid gap="15px" style={{ margin: '40px 0 8px' }}>
                    <Row colGap={0.06} middle>
                      <Col flex middle>
                        <div style={{ display: 'flex' }}>
                          <Icon
                            fill={colors.grayLighter}
                            name="add-outline"
                            size={24}
                          />
                        </div>
                      </Col>
                      <Col grow>Create Playlist</Col>
                    </Row>
                    <Row colGap={0.06} middle>
                      <Col flex middle>
                        <div style={{ display: 'flex' }}>
                          <Icon
                            fill={colors.grayLighter}
                            name="heart-outline"
                            size={24}
                          />
                        </div>
                      </Col>
                      <Col grow>Liked Songs</Col>
                    </Row>
                  </PlainGrid>
                </Col>
              </Row>

              <Divider />

              {/* Playlists */}
              <Row style={{ paddingTop: '8px' }}>
                <Col xs={12}>
                  <PlainGrid gap="15px">
                    {playlists.map((playlistName, i) => (
                      <div key={i}>{playlistName}</div>
                    ))}
                  </PlainGrid>
                </Col>
              </Row>
            </Grid>
          </Col>

          {/* Main + Tracklist */}
          <Col
            lg={9}
            sm={8}
            style={{
              background: 'linear-gradient(#C6292E 10%, #111 65%)',
            }}
            xl={10}
            xs={12}
          >
            <Grid>
              <TracklistInfoRow>
                <Col xs={12}>
                  {/* Artist / Playlist Summary Info */}
                  <Grid>
                    <Row style={{ color: colors.white, padding: '30px' }}>
                      <Col smHiddenUp xs={1} />
                      <Col sm={4} xs={10}>
                        <img
                          alt={name}
                          src={image}
                          style={{
                            boxShadow: 'rgba(0, 0, 0, 0.35) 10px 10px 48px 0',
                          }}
                        />
                      </Col>
                      <Col sm={8} style={{ padding: '0 30px' }} xs={12}>
                        <div
                          style={{
                            textTransform: 'uppercase',
                            fontSize: '11.5px',
                          }}
                        >
                          {type}
                        </div>
                        <SuperHeading color="#fff" level={1}>{name}</SuperHeading>
                        <div>
                          <img
                            alt={creator.name}
                            height={28}
                            src={creator.image}
                            style={{
                              display: 'inline-block',
                              marginRight: '6px',
                              borderRadius: '50%',
                            }}
                            width={28}
                          />
                          <span style={{ fontWeight: '500' }}>
                            {creator.name}
                          </span>
                          {` • ${year} • ${tracklist.length} ${pluralize(
                            'song',
                            tracklist
                          )}, `}
                          <span style={{ color: colors.grayLighter }}>
                            {formattedTracklistTotalTime}
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </Col>
              </TracklistInfoRow>
              <Row>
                <Col xs={12}>
                  {/* Tracklist */}
                  <TracklistGrid>
                    <Row
                      colGap={0.02}
                      middle
                      style={{
                        margin: '20px 0 0',
                        textTransform: 'uppercase',
                        fontSize: '11.5px',
                      }}
                    >
                      <Col
                        end
                        flex
                        sm={1}
                        style={{ fontSize: '16px' }}
                        xsHiddenDown
                      >
                        #
                      </Col>
                      <Col sm={5} xsHiddenDown>
                        title
                      </Col>
                      <Col end flex sm={3} xsHiddenDown>
                        plays
                      </Col>
                      <Col center flex sm={2} smOffset={1} xsHiddenDown>
                        <Icon
                          fill={colors.grayLighter}
                          name="time-outline"
                          size={20}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} xsHiddenDown>
                        <Divider />
                      </Col>
                    </Row>
                    {tracklist.map(({ title, artist, plays, seconds }, i) => (
                      <TrackRow
                        colGap={0.02}
                        key={i}
                        middle
                        onClick={(event) => handleTrackRowClick(event, i)}
                      >
                        <Col
                          end
                          flex
                          sm={1}
                          style={{
                            fontSize: '16px',
                            position: 'relative',
                            height: '18px',
                          }}
                          xsHiddenDown
                        >
                          <button
                            onClick={() =>
                              handleTrackRowPlayPauseClick(
                                i,
                                currentTrackIndex === i && isPlaying
                              )
                            }
                          >
                            {currentTrackIndex === i && isPlaying ? (
                              <SoundBarGif
                                fill={primaryColor}
                                size={16}
                                src="/image-assets/music-player/soundbars.gif"
                              />
                            ) : (
                              <TrackNumber
                                isCurrentTrack={currentTrackIndex === i}
                              >
                                {i + 1}
                              </TrackNumber>
                            )}
                            <TrackPlayIcon
                              fill={colors.white}
                              name={
                                currentTrackIndex === i && isPlaying
                                  ? 'pause-sharp'
                                  : 'play-sharp'
                              }
                              size={18}
                            />
                          </button>
                        </Col>
                        <Col sm={5} xs={10}>
                          <div
                            style={{
                              color:
                                currentTrackIndex === i
                                  ? primaryColor
                                  : colors.white,
                              fontSize: '15.5px',
                              marginBottom: '3px',
                            }}
                          >
                            {title}
                          </div>
                          <div style={{ fontSize: '13.5px' }}>{artist}</div>
                        </Col>
                        <Col end flex sm={3} xsHiddenDown>
                          {plays}
                        </Col>
                        <Col end flex sm={3} xsHiddenDown>
                          <button onClick={() => toggleFavoriteTrack(i)}>
                            <HoverIcon
                              fill={
                                tracklistWithFavorites[i].isFavorite
                                  ? primaryColor
                                  : colors.grayLighter
                              }
                              hoverFill={
                                tracklistWithFavorites[i].isFavorite
                                  ? null
                                  : colors.white
                              }
                              isActive={tracklistWithFavorites[i].isFavorite}
                              name={
                                tracklistWithFavorites[i].isFavorite
                                  ? 'heart'
                                  : 'heart-outline'
                              }
                              size={20}
                            />
                          </button>
                          {formatPlayheadTime(seconds)}
                          <HoverIcon
                            fill={colors.grayLighter}
                            name="ellipsis-horizontal"
                            size={20}
                          />
                        </Col>
                      </TrackRow>
                    ))}
                  </TracklistGrid>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
        <Row
          colGap={0.02}
          middle
          style={{ background: '#181818', padding: '15px 0' }}
        >
          <Col sm={3.5} xs={12}>
            {/* Current track summary */}
            <Grid>
              <Row colGap={0.075} middle style={{ padding: '0 15px' }}>
                <Col xs={3}>
                  <Image alt={name} masonry src={image} />
                </Col>
                <CurrentTrackSummaryCol ref={marqueeContainerRef} xs={7}>
                  <CurrentTrackTitle
                    animate={shouldAnimateCurrentTitleMarquee}
                    animationDistance={marqueeOverflowWidth}
                    onAnimationEnd={toggleAnimateCurrentTitleMarquee}
                    onMouseOver={toggleAnimateCurrentTitleMarquee}
                    ref={marqueeRef}
                    style={{ color: colors.white }}
                  >
                    {currentTrack.title}
                  </CurrentTrackTitle>
                  <div>{currentTrack.artist}</div>
                </CurrentTrackSummaryCol>
                <Col xs={2}>
                  <button
                    onClick={() => toggleFavoriteTrack(currentTrackIndex)}
                  >
                    <Icon
                      fill={
                        tracklistWithFavorites[currentTrackIndex].isFavorite
                          ? primaryColor
                          : colors.grayLighter
                      }
                      hoverFill={
                        tracklistWithFavorites[currentTrackIndex].isFavorite
                          ? null
                          : colors.white
                      }
                      name={
                        tracklistWithFavorites[currentTrackIndex].isFavorite
                          ? 'heart'
                          : 'heart-outline'
                      }
                      size={20}
                    />
                  </button>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col smHiddenUp xs={1} />
          <Col sm={5} xs={10}>
            <Grid>
              <Row center colGap={0.05} middle style={{ paddingBottom: '5px' }}>
                {/* Play controls */}
                <Col>
                  <button onClick={handleShuffleClick}>
                    <Icon
                      fill={isShuffled ? primaryColor : colors.grayLighter}
                      hoverFill={isShuffled ? null : colors.white}
                      name="shuffle"
                      size={24}
                    />
                  </button>
                </Col>
                <Col>
                  <button onClick={handlePreviousTrack}>
                    <Icon
                      fill={colors.grayLighter}
                      hoverFill={colors.white}
                      name="play-skip-back-sharp"
                      size={22}
                    />
                  </button>
                </Col>
                <Col>
                  <button onClick={handlePlayPause}>
                    <MainPlayIcon
                      fill={colors.white}
                      name={
                        isPlaying ? 'pause-circle-sharp' : 'play-circle-sharp'
                      }
                      size={44}
                    />
                  </button>
                </Col>
                <Col>
                  <button onClick={handleNextTrack}>
                    <Icon
                      fill={colors.grayLighter}
                      hoverFill={colors.white}
                      name="play-skip-forward-sharp"
                      size={22}
                    />
                  </button>
                </Col>
                <Col>
                  <button
                    onClick={handleRepeatClick}
                    style={{ position: 'relative' }}
                  >
                    <Icon
                      fill={
                        isRepeatAlbum || isRepeatTrack
                          ? primaryColor
                          : colors.grayLighter
                      }
                      hoverFill={
                        isRepeatAlbum || isRepeatTrack ? null : colors.white
                      }
                      name="repeat"
                      size={24}
                    />
                    {isRepeatTrack && (
                      <RepeatTrackDecoration color={primaryColor} />
                    )}
                  </button>
                </Col>
              </Row>
              <Row colGap={0.02} middle>
                <Col style={{ fontSize: '11.5px' }}>
                  {/* Current Time */}
                  {formattedPlayheadCurrentTime}
                </Col>
                <Col grow>
                  {/* Playhead */}
                  <Slider
                    hoverProgressColor={primaryColor}
                    max={currentTrack.seconds}
                    min={0}
                    onChange={handlePlayheadScrub}
                    onChangeEnd={handlePlayheadScrubEnd}
                    progressColor={colors.grayLighter}
                    size="sm"
                    trackColor="#5e5e5e"
                    value={playheadCurrentSeconds}
                  />
                </Col>
                <Col style={{ fontSize: '11.5px' }}>
                  {/* Total Time */}
                  {formattedPlayheadTotalTime}
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col sm={3.5} xsHiddenDown>
            <Grid>
              <Row colGap={0.05} middle style={{ padding: '0 15px' }}>
                <Col flex middle>
                  <div style={{ display: 'flex' }}>
                    <Icon
                      fill={colors.white}
                      hoverFill={colors.white}
                      name="list-outline"
                      size={20}
                    />
                  </div>
                </Col>
                <Col flex middle>
                  <div style={{ display: 'flex' }}>
                    <Icon
                      fill={colors.white}
                      hoverFill={colors.white}
                      name="laptop-outline"
                      size={20}
                    />
                  </div>
                </Col>
                <Col flex middle>
                  <div>
                    <button onClick={toggleMute} style={{ display: 'flex' }}>
                      <Icon
                        fill={colors.grayLighter}
                        hoverFill={colors.white}
                        name={volumeIconName}
                        size={20}
                      />
                    </button>
                  </div>
                </Col>
                <Col grow>
                  {/* Sound control */}
                  <Slider
                    hoverProgressColor={primaryColor}
                    max={1}
                    min={0}
                    onChange={handleVolumeChange}
                    progressColor={colors.grayLighter}
                    size="xs"
                    trackColor="#5e5e5e"
                    value={volumePreference}
                  />
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    </StyledMusicPlayer>
  );
};

MusicPlayer.displayName = 'MusicPlayer';
