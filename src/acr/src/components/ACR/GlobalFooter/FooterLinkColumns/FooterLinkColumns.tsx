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
