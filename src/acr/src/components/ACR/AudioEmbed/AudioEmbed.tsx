import { Text } from '@sitecore-jss/sitecore-jss-react';

import { AudioEmbedProps } from 'components/ACR/AudioEmbed/AudioEmbed.props';

const AudioEmbed = (props: AudioEmbedProps): JSX.Element => {
  const { fields, testId } = props;

  const { playerId } = fields ?? {};

  return (
    <div data-ref="audio-embed" data-testid={testId}>
      <Text tag="h2" field={playerId} />
      <p>The AudioEmbed Component</p>
    </div>
  );
};

export default AudioEmbed;
