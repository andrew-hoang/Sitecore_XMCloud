import { Flex } from '@radix-ui/themes';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

import { FooterLinkColumnProps } from './FooterLinkColumns.props';

import { Placeholder, withPlaceholder } from '@sitecore-jss/sitecore-jss-nextjs';

import FooterLink from '../FooterLink';
import { FooterLinkItemProps } from '../GlobalFooter.props';

const FooterLinkColumnD = (props: FooterLinkColumnProps): JSX.Element | null => {
  const { rendering, links } = props;

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  if (!isPageEditing && !links?.length) return null;

  return (
    <Flex gap="3" direction="column" className="mb-4 w-full max-w-[270px]">
      {isPageEditing && (
        <Placeholder
          name={`acr-container-footer-links-d-${props.params.DynamicPlaceholderId}`}
          rendering={rendering}
        ></Placeholder>
      )}
      {!isPageEditing &&
        links.map((link: React.Component<FooterLinkItemProps>, index: number) => (
          <FooterLink key={index} {...link?.props} rowId="2" />
        ))}
    </Flex>
  );
};

export default withPlaceholder({ placeholder: 'acr-container-footer-links-d-{*}', prop: 'links' })(
  FooterLinkColumnD
);
