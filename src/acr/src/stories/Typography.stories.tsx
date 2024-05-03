import { Flex } from '@radix-ui/themes';

export default {
  title: 'Base/Typography',
};

export const Default = {
  render: () => (
    <Flex direction="column" align="start" gap="6">
      <h1 className="heading-a">Heading A</h1>
      <h2 className="heading-b">Heading B</h2>
      <h3 className="heading-c">Heading C</h3>
      <h4 className="heading-d">Heading D</h4>
      <h1 className="heading-a-serif">Serif Heading A</h1>
      <h2 className="heading-b-serif">Serif Heading B</h2>
      <h3 className="heading-c-serif">Serif Heading C</h3>
      <p className="sub-heading-a">Sub Heading A</p>
      <p className="sub-heading-b">Sub Heading B</p>
      <p className="sub-heading-c">Sub Heading C</p>
      <p className="callout-a">Callout A</p>
      <p className="callout-b">Callout B</p>
      <p className="callout-c">Callout C</p>
      <p className="title-a">Title A</p>
      <p className="title-b">Title B</p>
      <p className="title-c">Title C</p>
      <p className="title-d">Title D</p>
      <p className="body-lg">Body Large</p>
      <p className="body-md">Body Medium</p>
      <p className="body-sm">Body Small</p>
      <p className="body-xs">Body X-Small</p>
      <p className="meta-a">Meta A</p>
      <p className="meta-b">Meta B</p>
      <p className="meta-c">Meta C</p>
    </Flex>
  ),
};
