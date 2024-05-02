/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return `import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { ${componentName}Props } from 'components/ACR/${componentName}/${componentName}.props';

import { get${componentName}UiProps, getStaticPropsFor${componentName} } from 'components/ACR/${componentName}/${componentName}.util';

import ${componentName}Base from 'components/ACR/${componentName}/${componentName}Base';

const ${componentName} = (props: ${componentName}Props): JSX.Element => {
  const uiProps = get${componentName}UiProps(props);

  return <${componentName}Base {...uiProps} />;
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
  return getStaticPropsFor${componentName}(_rendering, _layoutData);
};

export default ${componentName};
`;
}

export default generateComponentSrc;
