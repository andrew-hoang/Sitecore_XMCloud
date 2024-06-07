import { Flex } from '@radix-ui/themes';
import { UtilityNavigationProps } from './UtilityNavigation.props';
import LinkBase from '../../Link/LinkBase';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import QuickSearch from '../QuickSearch/QuickSearch';
import Login from '../Login/Login';
import { useSession } from 'next-auth/react';

const UtilityNavigation = (props: UtilityNavigationProps) => {
  const { fields } = props;
  const { utilityNavLinks, myACRLink } = fields ?? {};

  const links = myACRLink ? [myACRLink] : [];

  const { data: session } = useSession();

  return (
    <Flex
      data-ref="utility-navigation"
      align="center"
      justify="end"
      py="4"
      gap="6"
      className="hidden gh:flex"
    >
      {utilityNavLinks.map((link, index) => (
        <LinkBase
          key={index}
          link={link?.fields?.link}
          style={ButtonStyle.LINK}
          styleClasses="!font-regular my-2"
        />
      ))}
      <QuickSearch />
      <div className="h-5 w-[1px] bg-t-body" />
      {!session && myACRLink && (
        <LinkBase link={myACRLink} style={ButtonStyle.LINK} styleClasses="!font-regular" />
      )}
      <Login links={links} />
    </Flex>
  );
};

export default UtilityNavigation;
