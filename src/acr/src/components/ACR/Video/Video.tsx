import { VideoProps } from 'components/ACR/Video/Video.props';

const Video = (props: VideoProps): JSX.Element => {
  const { fields, testId } = props;

  const { video } = fields ?? {};

  return (
    <div data-ref="video" data-testid={testId}>
      <p>The Video Component {video?.value?.href}</p>
    </div>
  );
};

export default Video;
