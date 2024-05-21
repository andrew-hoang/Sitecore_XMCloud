export const getStateCountryQuery = (itemId: string, language?: string): string => {
  let query = `query {
        search(where:{
          AND:[{
                name: "_path",
                value: "%ITEMID%",
                operator: CONTAINS
              },
              {
                 name: "_templates",
                 value: "{D2923FEE-DA4E-49BE-830C-E27764DFA269}",
                 operator: CONTAINS
               },
              { name: "_language",  value: "%LANGUAGE%" }]
        }, first : 100){
          total
           pageInfo {
            endCursor
            hasNext
          }
          results {
            ...on Enum {
              name
              value {
                value
              }
            }
          }
        }
      }`;
  if (!language) {
    language = 'en';
  }
  query = query.replace('%ITEMID%', itemId);
  query = query.replace('%LANGUAGE%', language);
  return query;
};
