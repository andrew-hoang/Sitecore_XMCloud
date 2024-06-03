import { Flex } from '@radix-ui/themes';
import cn from 'classnames';

import { FooterLinkColumnsProps } from './FooterLinkColumns.props';

import FooterLinkColumnA from './FooterLinkColumnA';
import FooterLinkColumnB from './FooterLinkColumnB';
import FooterLinkColumnC from './FooterLinkColumnC';
import FooterLinkColumnD from './FooterLinkColumnD';

const FooterLinkColumns = (props: FooterLinkColumnsProps) => {
  const { rowId } = props;

  return (
    <Flex
      gap="6"
      direction={{ initial: 'column', sm: 'row' }}
      className={cn('grow', {
        'min-w-[270px] max-w-[570px]': rowId === '1',
        'min-w-[200px]': rowId === '2',
      })}
    >
      {/* {columns?.map((column: FooterLinkColumnProps, index: number) => {
        const PLACEHOLDER_NAME = `acr-container-footer-links-${setCorrectPlaceholderName(index)}-${props.params.DynamicPlaceholderId}`;

        const placeholderProps: PlaceholderBaseProps = {
          placeholder: {
            name: PLACEHOLDER_NAME,
            rendering,
            componentFactory,
          },
        };
        return (
          <PlaceholderBase {...placeholderProps} key={`${JSON.stringify(column)}=${index}`}>
            <Flex
              gap="3"
              direction="column"
              className={cn('w-full max-w-[270px]', {
                'mb-4': rowId === '2',
              })}
            >
              {column?.map((item: FooterLinkItemProps, index: number) => {
                return (
                  <LinkBase
                    key={`${JSON.stringify(item)}-${index}`}
                    styleClasses={cn({ 'body-xs': rowId === '2' })}
                    link={item?.link}
                    style={rowId === '1' ? ButtonStyle.LINK : ButtonStyle.STATIC_LINK}
                  />
                );
              })}
            </Flex>
          </PlaceholderBase>
        );
      })} */}
      {rowId === '1' && (
        <>
          <FooterLinkColumnA name="columna" {...props}></FooterLinkColumnA>
          <FooterLinkColumnB name="columnb" {...props}></FooterLinkColumnB>
          <FooterLinkColumnC name="columnc" {...props}></FooterLinkColumnC>
        </>
      )}
      {rowId === '2' && (
        <>
          <FooterLinkColumnD name="columnd" {...props}></FooterLinkColumnD>
        </>
      )}
    </Flex>
  );
};

export default FooterLinkColumns;
