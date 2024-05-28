import { Flex } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderProps } from 'components/ACR/PageHeader/PageHeader.props';
import { useContext } from 'react';
import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';
import cn from 'classnames';
import { getStaticPropsForPageBanner } from './PageHeader.util';
import { Alignment } from 'src/enumerations/Aligment.enum';

const Default = (props: PageHeaderProps): JSX.Element => {
  const { params, testId } = props;

  const { alignment } = params ?? {};

  const contentTypeField = props?.externalFields?.contentType;
  const contentTypeFieldvalue = contentTypeField?.name ?? '';
  const headerTitle = props?.externalFields?.headerTitle;
  const subtitle = props?.externalFields?.subtitle;
  const { theme = Theme.WHITE } = useContext(ThemeContext);

  const bgWhite = theme === Theme.WHITE;
  const bgLightIndigo = theme === Theme.LIGHT_INDIGO;
  const bgIndigo = theme === Theme.INDIGO;
  const bgPurple = theme === Theme.PURPLE;
  const alignCenter = alignment === Alignment.Center;
  const alignLeft = alignment === Alignment.Left;
  return (
    <Flex
      className={cn('rounded-lg shadow-md p-6', {
        'bg-white text-indigo-100': bgWhite,
        'bg-indigo-25 text-indigo-100': bgLightIndigo,
        'bg-indigo-900': bgIndigo,
        'bg-purple-900': bgPurple,
        'text-left ': alignLeft,
        'text-center': alignCenter,
      })}
      data-ref="PageHeader"
      data-testid={testId}
      data-theme={theme} // Theme targets component's link style
      direction={{ initial: 'column', md: 'row' }}
      align={{ initial: 'start', md: 'center' }}
    >
      <Flex direction="column">
        <span className="text-blue-900 text-sm uppercase">{contentTypeFieldvalue}</span>
        <Text
          field={headerTitle}
          tag="h2"
          className="heading-d  text-2xl text-blue-900 mt-2 font-semibold"
        />
        <Text field={subtitle} tag="p" className="text-gray-700 mt-4" />
      </Flex>
    </Flex>
  );
};

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForPageBanner(_layoutData);
};
export default Default;
