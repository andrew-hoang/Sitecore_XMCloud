import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import { GqlField, GqlImage } from 'types/GraphQL.props';
import config from 'temp/config';

import * as R from 'ramda';

export const getACRGraphQlClient = (): GraphQLRequestClient => {
  const apiKey = getACRGraphQlKey();

  return new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: apiKey,
  });
};

export const getACRGraphQlKey = (): string => {
  return process.env.GRAPH_QL_CLIENT_API_KEY ?? config.sitecoreApiKey;
};

/**
 * Retrieves the value of the given property from the given GraphQL object.
 * If no property is defined, the whole value object will be retrieved
 * @param obj Object to find the value of
 * @param valueProp optional name of the property to retrieve the value of. If null, will return the whole value object
 * @returns the value of the given property or whole value object
 */
export const getValue = (
  obj: GqlField<unknown> | undefined | null,
  valueProp?: string | null
): string | number | boolean | Field => {
  if (!obj) return '';
  if (valueProp) {
    return (
      (R.path(['jsonValue', 'value', valueProp], obj) as string | number | boolean | Field) || ''
    );
  } else {
    return (R.path(['jsonValue', 'value'], obj) as string | number | boolean | Field) || '';
  }
};

export type GqlResult<T> = {
  search: {
    total: number;
    pageInfo: {
      endCursor: string;
      hasNext: boolean;
    };
    results: T | null;
  };
};

export type GqlResultItem = {
  displayName: string;
  dynamicListingTitle: {
    value: string;
  };
  image: GqlImage;
  contentType: {
    targetItem: {
      displayName: string;
    };
  };
  topics: {
    targetItems: [
      {
        displayName: string;
      },
    ];
  };
  blogCategory: {
    targetItem: {
      displayName: string;
    };
  };
  summary: { value: string };
  url: {
    hostname: string;
    path: string;
  };
  startDate: {
    formattedDateValue: string;
  };
};

export const GraphQLOperators = {
  Contains: 'CONTAINS',
  Equal: 'EQ',
  NotEqual: 'NEQ',
  NotContains: 'NCONTAINS',
  LessThan: 'LT',
  LessThanEquals: 'LTE',
  GreaterThan: 'GT',
  GreaterThanEquals: 'GTE',
};
