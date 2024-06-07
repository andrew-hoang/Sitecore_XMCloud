/**
 * Dictionary mapping
 *
 * The key should be referenced in the rendering files,
 * and the value to should be the name of the dictionary item
 * in Sitecore.
 */

import { SkipLinkDictionaryKeys } from 'components/ACR/SkipLink/SkipLink.dictionary';
import { GlobalHeaderDictionaryKeys } from 'src/components/ACR/GlobalHeader/GlobalHeader.dictionary';
import { PageHeaderDictionaryKeys } from 'src/components/ACR/PageHeaderWithIcon/PageHeaderWithIcon.dictionary';

export const dictionaryKeys = {
  ...SkipLinkDictionaryKeys,
  ...PageHeaderDictionaryKeys,
  ...GlobalHeaderDictionaryKeys,
};

export const mockDictionary = (dictionary: Record<string, string>): Record<string, string> => {
  const temp: Record<string, string> = {};
  Object.keys(dictionary).map((key) => (temp[`${dictionary[`${key}`]}`] = dictionary[key]));
  const withTokens = {};
  return Object.assign(temp, withTokens);
};
