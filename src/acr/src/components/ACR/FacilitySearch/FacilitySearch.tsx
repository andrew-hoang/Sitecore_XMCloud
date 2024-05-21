import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import {
  FacilityEnumeration,
  FacilitySearchProps,
} from 'components/ACR/FacilitySearch/FacilitySearch.props';

import {
  StateRequest,
  getStaticPropsForFacilitySearch,
} from 'components/ACR/FacilitySearch/FacilitySearch.util';

const FacilitySearch = (props: FacilitySearchProps): JSX.Element => {
  const { fields, testId, externalFields } = props;

  const { searchButtonLabel } = fields ?? {};

  return (
    <div data-ref="facility-search" data-testid={testId}>
      <Text tag="h2" field={searchButtonLabel} />
      <p>The FacilitySearch Component</p>
      <p>{fields.zipCityLabel.value}</p>
      <ul>
        {externalFields?.searchOptions.map((item: FacilityEnumeration) => {
          return <li>{item.value}</li>;
        })}
      </ul>
      <ul>
        {externalFields?.countryOptions.map((item: FacilityEnumeration) => {
          return (
            <li>
              {item.name}:{item.value}
            </li>
          );
        })}
      </ul>
      <ul>
        {externalFields?.stateOptions.map((item: FacilityEnumeration) => {
          return (
            <li>
              {item.name}:{item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/**
 * "Data" developer method
 * TODO_SCAFFOLD_BE: If "getStaticProps" was deleted remove "useComponentProps". They work together.
 * TODO_SCAFFOLD_BE: Populate if needed, remove if not
 * Will be called during SSG.  Do NOT return null.
 * @param {ComponentRendering} _rendering
 * @param {LayoutServiceData} _layoutData
 * @param {GetStaticPropsContext} _context
 */
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  const request: StateRequest = {
    isPageEditing: _layoutData?.sitecore?.context?.pageEditing ?? false,
    language: _layoutData?.sitecore?.context?.language,
  };
  return await getStaticPropsForFacilitySearch(_rendering, request);
};

export default FacilitySearch;
