import { useCallback, useEffect, useMemo, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import { VideoProps } from 'components/ACR/Video/Video.props';
import LinkBase from '../Link/LinkBase';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

const Video = (props: VideoProps): JSX.Element => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<typeof videojs.players>(null);
  const { fields, testId } = props;

  const { video, coverImage, caption, transcript } = fields ?? {};

  const renderCaption = caption?.value || transcript?.value;

  const options = useMemo(
    () => ({
      autoplay: false,
      poster: coverImage?.value?.src,
      controls: true,
      responsive: true,
      fluid: true,
      src: video?.value?.href,
    }),
    [coverImage, video?.value?.href]
  );

  const onReady = useCallback((player: typeof videojs.players) => {
    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  }, []);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement);
      }

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.src);
    }
  }, [options, onReady, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-ref="video" data-testid={testId} data-vjs-player>
      <figure>
        <div ref={videoRef} className="aspect-2/1 mb-2 max-h-[810px] w-full" />
        {renderCaption && (
          <figcaption>
            {caption && <p className="body-xs mb-2 text-gray-70">{caption?.value}</p>}
            {transcript && <LinkBase link={transcript} style={ButtonStyle.LINK} />}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Video;
