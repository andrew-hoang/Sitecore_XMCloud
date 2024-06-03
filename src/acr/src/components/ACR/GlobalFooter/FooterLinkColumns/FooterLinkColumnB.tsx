import { Flex } from '@radix-ui/themes';
import cn from 'classnames';

import { FooterLinkColumnProps } from './FooterLinkColumns.props';

import { Placeholder, withPlaceholder } from '@sitecore-jss/sitecore-jss-nextjs';

const FooterLinkColumnB = (props: FooterLinkColumnProps): JSX.Element => {
  const { rendering } = props;

  return (
    <Flex
      gap="3"
      direction="column"
      className={cn('w-full max-w-[270px]', {
        'mb-4': false,
      })}
    >
      <Placeholder
        name={`acr-container-footer-links-b-${props.params.DynamicPlaceholderId}`}
        rendering={rendering}
      ></Placeholder>
    </Flex>
  );
};

export default withPlaceholder({ placeholder: 'acr-container-footer-links-b-{*}', prop: 'links' })(
  FooterLinkColumnB
);
