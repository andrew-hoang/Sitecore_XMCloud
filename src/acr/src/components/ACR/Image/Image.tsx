import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import { ImageProps } from 'components/ACR/Image/Image.props';

import { getImageUiProps, getStaticPropsForImage } from 'components/ACR/Image/Image.util';

import ImageBase from 'components/ACR/Image/ImageBase';

const Image = (props: ImageProps): JSX.Element => {
  const { testId } = props;

  const uiProps = getImageUiProps(props);

  return <ImageBase {...uiProps} testId={testId} />;
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
  return getStaticPropsForImage(_rendering, _layoutData);
};

export default Image;
