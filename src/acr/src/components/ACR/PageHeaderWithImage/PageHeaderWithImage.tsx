import { Flex } from '@radix-ui/themes';
import { Text, TextField, Image } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderWithImageProps } from 'components/ACR/PageHeaderWithImage/PageHeaderWithImage.props';
import { useContext } from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Theme } from 'src/enumerations/Theme.enum';
import { ThemeContext } from 'src/context/Theme.context';
import { PageContext } from 'src/context/Page.context';


const PageHeaderWithImage = (props: PageHeaderWithImageProps): JSX.Element => {
  const { params, testId } = props;
  const { Orientation } = params ?? {};
  const { sitecoreContext = PageContext } = useSitecoreContext();
  
  console.log('Sitecore Context:', sitecoreContext);
  
  const contentTypeField = sitecoreContext?.route?.fields?.contentType;
  const contentTypeFieldvalue = contentTypeField?.name ?? contentTypeField?.fields?.title?.value ?? '';
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
  const imageleft = Orientation === 'image-left';
  const imageRight = Orientation === 'image-right';

  return (
    <div 
      className={`relative overflow-hidden`}
      data-ref="PageHeaderWithImage"
      data-testid={testId}
      data-theme={bgLightIndigo ? Theme.LIGHT_INDIGO : Theme.WHITE}
    >
      {headerImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${headerImage})` }}
        />
      )}
      <Flex
        className="relative py-12 px-8 md:px-16 gap-5 md:gap-9 flex-col md:flex-row items-start md:items-center justify-between"
      >
        {imageleft && headerImagecheck && (
          <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48">
            <Image field={headerImage} alt="Header Image" className="w-full h-full object-cover" />
          </div>
        )}
        <Flex direction="column" gap="4" width={{ initial: 'auto', md: '770px' }}>
          <h3 className="body-xs">{contentTypeFieldvalue}</h3>
          <Text field={headerTitle} tag="h2" className="heading-d" />
          <Text field={subtitle} tag="p" />
        </Flex>
        {imageRight  && headerImagecheck && (
          <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48">
            <Image field={headerImage} alt="Header Image" className="w-full h-full object-cover" />
          </div>
        )}
      </Flex>
    </div>  );
};

export default PageHeaderWithImage;
