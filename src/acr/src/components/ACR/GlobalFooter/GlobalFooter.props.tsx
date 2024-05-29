import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { PlaceholderProps } from 'src/types/Placeholder.props';
import { TestProps } from 'src/types/Test.props';

/**
 * Model used for Sitecore Component integration
 */
export type GlobalFooterProps = ComponentProps &
  TestProps &
  GlobalFooterParams &
  GlobalFooterFields &
  GlobalFooterData;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type GlobalFooterParams = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type GlobalFooterData = {
  externalFields?: {
    mock_external_data: Field<string>;
  };
};

export type SocialLink = {
  link?: LinkField;
  socialIcon?: string;
};

export type GlobalFooterFields = {
  fields: {
    footerLogo: ImageField; // Sitecore editable text field
    footerNewsletterText: Field<string>; // Sitecore editable text field
    footerNewsletterLink: LinkField; // Sitecore editable text field
    copyrightStatement: Field<string>; // Sitecore editable text field
    directoryTitle: Field<string>; // Sitecore editable text field
    directoryDescription: Field<string>; // Sitecore editable text field
    directoryLink: LinkField; // Sitecore editable text field
    engageTitle: Field<string>; // Sitecore editable text field
    engageDescription: Field<string>; // Sitecore editable text field
    engageLink: LinkField; // Sitecore editable text field
    phoneNumber: Field<string>; // Sitecore editable text field
    locationName: Field<string>; // Sitecore editable image field
    address1: Field<string>;
    address2: Field<string>;
    city: Field<string>;
    state: Field<string>;
    zipcode: Field<string>;
    socialLinks: Array<SocialLink>
  };
};
