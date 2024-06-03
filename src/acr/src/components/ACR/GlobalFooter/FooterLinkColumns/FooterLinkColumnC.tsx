import { Flex } from '@radix-ui/themes';

import { FooterLinkColumnProps } from './FooterLinkColumns.props';

import { Placeholder, withPlaceholder } from '@sitecore-jss/sitecore-jss-nextjs';

const FooterLinkColumnC = (props: FooterLinkColumnProps): JSX.Element => {
  const { rendering } = props;

  return (
    <Flex
      gap="3"
      direction="column"
      className='w-full max-w-[270px]'
    >
      <Placeholder
        name={`acr-container-footer-links-c-${props.params.DynamicPlaceholderId}`}
        rendering={rendering}
      ></Placeholder>
    </Flex>
  );
};

export default withPlaceholder({ placeholder: 'acr-container-footer-links-c-{*}', prop: 'links' })(
  FooterLinkColumnC
);
