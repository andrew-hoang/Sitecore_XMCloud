export const BreadcrumbQueryString = `#

query BreadcrumbQuery(
  $contextItem: String!
  $language: String!
) {
  datasource: item(path: $contextItem, language: $language) {
    name
    ancestors(hasLayout: true) {
      title: field(name: "title") {
        jsonValue
      }
      shortTitle: field(name: "shortTitle") {
        jsonValue
      }
      name
      url {
        href: path
      }
    }
  }
}
`;
