import { Text } from '@sitecore-jss/sitecore-jss-react';

import {
  SideNavigationLink,
  SideNavigationProps,
} from 'components/ACR/SideNavigation/SideNavigation.props';
import LinkBase from '../Link/LinkBase';

const SideNavigation = (props: SideNavigationProps): JSX.Element => {
  const { fields, testId } = props;

  const { title, links } = fields ?? {};

  return (
    <div data-ref="side-navigation" data-testid={testId}>
      <p>The SideNavigation Component</p>
      <Text tag="h2" field={title} />
      {links && links?.length && (
        <ul>
          {links?.map((link: SideNavigationLink, index: number) => (
            <li key={index}>
              <LinkBase link={link?.fields?.link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideNavigation;
