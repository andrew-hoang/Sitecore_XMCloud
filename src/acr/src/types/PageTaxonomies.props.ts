import { ReferenceField } from './ReferenceField.props';

export type ContentTypeTaxonomy = {
  contentType?: ReferenceField;
};

export type SubspecialtiesTaxonomy = {
  subspecialties?: ReferenceField[];
};

export type AudienceTaxonomy = {
  audiences?: ReferenceField[];
};

export type TopicTaxonomy = {
  topics?: ReferenceField[];
};

export type ModalityTaxonomy = {
  modalities?: ReferenceField[];
};

export type PageTaxonomies = ContentTypeTaxonomy &
  SubspecialtiesTaxonomy &
  AudienceTaxonomy &
  TopicTaxonomy &
  ModalityTaxonomy;
