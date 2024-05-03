import { Button, Flex } from '@radix-ui/themes';

export default {
  title: 'Base/Themes',
};

export const Default = {
  render: () => (
    <Flex direction="column" align="start" gap="4">
      <h1 className="heading-a">Headline text</h1>
      <h2 className="heading-b-serif">Serif headline</h2>
      <p className="sub-heading-c">Sub Heading</p>
      <p className="body-sm">Body copy</p>
      <Button className="h-auto cursor-pointer rounded-[6px] bg-t-primary px-[15px] py-[12px] font-medium text-t-btn-text transition-all hover:rounded-tr-[30px] hover:text-t-contrast hover:underline">
        Explore activities
      </Button>
      <a href="/" className="font-medium text-t-body hover:text-t-link-hover hover:underline">
        Link
      </a>
    </Flex>
  ),
};
