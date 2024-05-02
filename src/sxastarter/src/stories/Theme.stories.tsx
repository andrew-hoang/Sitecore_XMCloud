import { Button, Flex } from '@radix-ui/themes';

export default {
  title: 'Base/Themes',
};

export const Default = {
  render: () => (
    <Flex
      direction="column"
      align="start"
      gap="4"
      className="bg-t-background text-t-body p-8 text-body-sm md:p-[100px]"
    >
      <h1 className="heading-a">Headline text</h1>
      <h2 className="heading-b-serif">Serif headline</h2>
      <p className="sub-heading-c">Sub Heading</p>
      <p className="body-sm">Body copy</p>
      <Button className="bg-t-primary text-t-btn-text hover:text-t-contrast h-auto cursor-pointer rounded-[6px] px-[15px] py-[12px] font-medium transition-all hover:rounded-tr-[30px] hover:underline">
        Explore activities
      </Button>
      <a href="/" className="text-t-body hover:text-t-link-hover font-medium hover:underline">
        Link
      </a>
    </Flex>
  ),
};
