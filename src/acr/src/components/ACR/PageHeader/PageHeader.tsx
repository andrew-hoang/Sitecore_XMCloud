import { Flex } from '@radix-ui/themes';
import { Text ,TextField} from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderProps } from 'components/ACR/PageHeader/PageHeader.props';
import { useContext } from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';
import cn from 'classnames';
import { PageContext } from 'src/context/Page.context';

const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { params, testId } = props;

  const { Alignment } = params ?? {};
  const { sitecoreContext = PageContext } = useSitecoreContext();
  console.log('Sitecore Context:', sitecoreContext);
  const contentTypeField = sitecoreContext?.route?.fields?.contentType;
  const contentTypeFieldvalue = contentTypeField?.name ?? contentTypeField?.fields?.title?.value ?? '';
  const dataSource = sitecoreContext.route?.fields || {};
  const headerTitle: TextField | undefined = dataSource.headerTitle as TextField | undefined;
  const subtitle: TextField | undefined = dataSource.subtitle as TextField | undefined;
  
  const { theme = Theme.WHITE } = useContext(ThemeContext);

  const bgWhite = theme === Theme.WHITE ;
  const bgLightIndigo = theme === Theme.LIGHT_INDIGO ;
  const bgIndigo= theme === Theme.INDIGO;
  const bgPurple= theme === Theme.PURPLE;
  const alignCenter = Alignment === 'Left';
  const alignLeft = Alignment === 'Center';
  return (
    <Flex
    className={cn('p-6 rounded-lg shadow-md', {
        'bg-white text-indigo-100': bgWhite,
        'bg-indigo-25 text-indigo-100': bgLightIndigo,
        'bg-indigo-900': bgIndigo,
        'bg-purple-900': bgPurple,
        'text-left ':alignCenter,
        'text-center':alignLeft, 
      })}
      data-ref="PageHeader"
      data-testid={testId}
      data-theme={theme } // Theme targets component's link style     
      direction={{ initial: 'column', md: 'row' }}
      align={{ initial: 'start', md: 'center' }}
    >
      <Flex direction="column" >
        <span className='text-blue-900 uppercase text-sm'>{contentTypeFieldvalue}</span>
        <Text field={headerTitle} tag="h2" className="heading-d  text-2xl font-semibold text-blue-900 mt-2" />
        <Text field={subtitle} tag="p" className="text-gray-700 mt-4" />
      </Flex>
    </Flex>

    
  );
};

export default PageHeader;