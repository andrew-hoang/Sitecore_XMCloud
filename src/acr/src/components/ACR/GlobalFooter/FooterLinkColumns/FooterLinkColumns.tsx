import { Flex } from "@radix-ui/themes";
import cn from 'classnames';

import { ButtonStyle } from "src/enumerations/ButtonStyle.enum";
import { FooterLinkColumnProps, FooterLinkColumnsProps } from "./FooterLinkColumns.props";
import { FooterLinkItemProps } from "../GlobalFooter.props";
import LinkBase from "components/ACR/Link/LinkBase";
import PlaceholderBase, { PlaceholderBaseProps } from 'components/ACR/Placeholder/PlaceholderBase';


const FooterLinkColumns = (props: FooterLinkColumnsProps) => {
  const { column1, column2, column3, column4, rendering, componentFactory, rowId } = props;

  let columns = [] as FooterLinkColumnProps[];

  if (rowId === '1') {
    columns = [column1, column2, column3];
  } else {
    columns = [column4]
  }

  const setCorrectPlaceholderName = (index: number) => {
    if (rowId === '2') return 'd';

    switch (index) {
      case 0:
        return 'a';
      case 1:
        return 'b';
      case 2:
        return 'c';
    }
  }

  return (
    <Flex gap="6" direction={{ initial: 'column', sm: 'row' }} className={cn("grow", {
      'min-w-[270px] max-w-[570px]': rowId === '1',
      'min-w-[200px]': rowId === '2'
    })}>
      {columns?.map((column: FooterLinkColumnProps, index: number) => {
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
            <Flex gap='3' direction='column' className={cn("w-full max-w-[270px]", {
              'mb-4': rowId === '2'
            })}>
              {column?.map((item: FooterLinkItemProps, index: number) => {
                return (
                  <LinkBase key={`${JSON.stringify(item)}-${index}`} styleClasses={cn({ 'body-xs': rowId === '2' })} link={item?.link} style={rowId === '1' ? ButtonStyle.LINK : ButtonStyle.STATIC_LINK} />
                )
              })}
            </Flex>
          </PlaceholderBase>
        )
      })}
    </Flex>
  )
};

export default FooterLinkColumns;