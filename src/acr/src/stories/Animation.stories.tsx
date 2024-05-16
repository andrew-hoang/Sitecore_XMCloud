import { Meta, StoryObj } from '@storybook/react';

import ImageBase from 'src/components/ACR/Image/ImageBase';
import Link from 'components/ACR/Link/LinkBase';
import ContainerFullWidth from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth';
import Container3070 from 'src/components/ACR/Container/Container3070/Container3070';
import Container7030 from 'src/components/ACR/Container/Container7030/Container7030';

import { defaultMockData as containerFullWidthMockData } from 'components/ACR/Container/ContainerFullWidth/ContainerFullWidth.mock';
import { defaultMockData as container3070MockData } from 'components/ACR/Container/Container3070/Container3070.mock';
import { defaultMockData as container7030MockData } from 'components/ACR/Container/Container7030/Container7030.mock';
import { sampleText } from 'src/variables/global';

export default {
  title: 'Base/Animations',
  component: Link,
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: () => (
    <>
      <ContainerFullWidth {...containerFullWidthMockData}>
        <p>
          {sampleText}{' '}
          <a href="/" className="body-sm link-underline">
            Hover me
          </a>
        </p>
      </ContainerFullWidth>
      <Container3070
        {...container3070MockData}
        left={
          <a href="/">
            <ImageBase
              image={{
                value: {
                  src: 'https://picsum.photos/500/726',
                  alt: 'image',
                  height: '726',
                  width: '500',
                },
              }}
            />
          </a>
        }
        right={<p>{sampleText}</p>}
      />
      <ContainerFullWidth {...containerFullWidthMockData}>
        <p>
          {sampleText}{' '}
          <a href="/" className="body-sm link-underline">
            Hover me
          </a>
        </p>
      </ContainerFullWidth>
      <Container7030
        {...container7030MockData}
        left={<p>{sampleText}</p>}
        right={
          <ImageBase
            image={{
              value: {
                src: 'https://picsum.photos/500/726',
                alt: 'image',
                height: '726',
                width: '500',
              },
            }}
          />
        }
      />
    </>
  ),
};
