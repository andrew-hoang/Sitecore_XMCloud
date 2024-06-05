import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ButtonStyle } from 'src/enumerations/ButtonStyle.enum';
import { StyleProps } from 'src/types/Style.props';
import { TestProps } from 'src/types/Test.props';

/**
 * UI is developed against this model
 */
export type LinkBaseProps = TestProps &
  StyleProps & {
    link: LinkField;
    style?: ButtonStyle;
    hasIcon?: boolean;
    children?: JSX.Element | JSX.Element[] | React.ReactNode;
    spanStyleClasses?: string;
    ariaProps?: {
      'aria-label'?: string;
    };
  };
