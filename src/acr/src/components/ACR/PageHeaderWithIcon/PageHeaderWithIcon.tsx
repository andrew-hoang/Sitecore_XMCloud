import { Flex } from '@radix-ui/themes';
import { Text, TextField, Image } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithIconProps } from 'components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.props';
import { useContext } from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';
import { PageContext } from 'src/context/Page.context';
import cn from 'classnames';


// import { dictionaryServiceFactory } from 'src/lib/dictionary-service-factory';

// const dictionaryService=dictionaryServiceFactory.create('acr');
// const language = 'en';
// dictionaryService.fetchDictionaryData(language).then(data => {
//     console.log(data);
// });



const PageHeaderWithIcon = (props: PageHeaderWithIconProps): JSX.Element => {
  const { params, testId } = props;
  const { DisplayLicenseLink } = params ?? {};
  const { sitecoreContext = PageContext } = useSitecoreContext();
  //Later to be taken from Dictionary due to issue in Dictionary context using constants for now
const linkText='License: CC BY-ND 4.0 DEED';
const licenseLinkUrl='https://www.acr.org';
  console.log('Sitecore Context:', sitecoreContext);

  const dataSource = sitecoreContext.route?.fields || {};
  const headerTitle: TextField | undefined = dataSource.headerTitle as TextField | undefined;
  const subtitle: TextField | undefined = dataSource.subtitle as TextField | undefined;
  const headerImage = dataSource?.image1x1?.value ;
const headerImagecheck=dataSource?.image1x1?.value?.src;
console.log({headerImagecheck});
  const { theme = Theme.WHITE } = useContext(ThemeContext);

  const bgWhite = theme === Theme.WHITE ;
  const bgLightIndigo = theme === Theme.LIGHT_INDIGO ;
  const bgIndigo= theme === Theme.INDIGO;
  const bgPurple= theme === Theme.PURPLE;
  

  return (
    <Flex
      className={cn('p-6 rounded-lg shadow-md w-fulll', {
        'bg-white text-blue-900': bgWhite,
        'bg-blue-100 text-blue-900': bgLightIndigo,
        'bg-indigo-900 text-white': bgIndigo,
        'bg-purple-900 text-white': bgPurple,
        
        
      })}
      data-ref="PageHeaderWithIcon"
      data-testid={testId}
      data-theme={theme}
      direction={{ initial: 'column', md: 'row' }}
      align={{ initial: 'start', md: 'center' }}
      justify={{ initial: 'center', md: 'space-between' }}
      
      gap="4"
    >
      <Flex direction="column" className="flex-1">
       
       < Text field={headerTitle} tag="h2" className="text-2xl font-semibold mt-2"/>
       < Text field={subtitle} tag="p" className="mt-4"/>

       {  DisplayLicenseLink==='1'&& (
           <a href={licenseLinkUrl} className="text-blue-600 underline mt-2">
           {linkText}
         </a>
        )}
       
      </Flex>
      { headerImagecheck && (
          
            <Image field={headerImage} alt="Header Image" className="w-32 h-32 " />
         
        )}
     
    </Flex>  );
};

export default PageHeaderWithIcon;
