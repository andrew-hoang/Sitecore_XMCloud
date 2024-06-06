import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { PrimaryNavItemColumn, PrimaryNavItemLink } from './PrimaryNavigation.props';
import { Flex } from '@radix-ui/themes';
import LinkBase from '../../Link/LinkBase';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';

import cn from 'classnames';

const PrimaryNavigationColumn = (props: PrimaryNavItemColumn) => {
  const { fields } = props;
  const { title, link, navigationLinks, numberOfColumns } = fields ?? {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chunk = (target: any[], size: number) => {
    return target.reduce(
      (arr, value, index) => {
        if (index % (target.length / size) === 0 && index !== 0) arr.push([]);
        arr[arr.length - 1].push(value);
        return arr;
      },
      [[]]
    );
  };

  // Links can be displayed across multiple columns
  const columnLinks = chunk(navigationLinks, numberOfColumns?.value);

  return (
    <div data-ref="primary-navigation-column" className="flex-grow">
      {link?.value && title?.value && (
        <div className="mb-4 border-b-1 border-b-gray-50 pb-4 text-indigo-100">
          <Link field={link} className="focus:outline-indigo-100">
            <Text field={title} tag="p" className="font-medium" />
          </Link>
        </div>
      )}
      <Flex gap="6">
        {columnLinks?.map((links: PrimaryNavItemLink[], index: number) => (
          <Flex key={index} direction="column" gap="4" className="flex-grow">
            {links?.map((link, linkIndex) => (
              <LinkBase
                key={linkIndex}
                link={link?.fields?.link}
                style={ButtonStyle.LINK}
                styleClasses={cn('text-indigo-100 focus:outline-indigo-100', {
                  '!font-regular': !link?.fields?.alternateStyle?.value,
                  '!font-bold': link?.fields?.alternateStyle?.value,
                })}
                hasIcon={link?.fields?.alternateStyle?.value}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default PrimaryNavigationColumn;
