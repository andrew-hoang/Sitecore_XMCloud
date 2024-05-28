import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Alignment } from 'src/enumerations/Aligment.enum';
import { ReferenceField } from 'src/types/ReferenceField.props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type PageHeaderProps = ComponentProps & TestProps & PageHeaderParams & PageBannerData;

// Component Rendering Parameter fields
export type PageHeaderParams = {
  params: {
    alignment?: Alignment;
  };
};

export type PageBannerData = {
  externalFields: {
    headerTitle: Field<string>;
    subtitle?: Field<string>;
    contentType?: ReferenceField;
    image1x1?: ImageField;
    image16x9?: ImageField;
  };
};
