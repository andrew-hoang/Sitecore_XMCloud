import { Container } from '@radix-ui/themes';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { PageHeaderProps } from 'components/ACR/PageHeader/PageHeader.props';

import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';

import cn from 'classnames';
import { getStaticPropsForPageBanner } from './PageHeader.util';
import { Alignment } from 'src/enumerations/Aligment.enum';

const Default = (props: PageHeaderProps): JSX.Element => {
  const { params, testId, externalFields } = props;

  const { alignment } = params ?? {};

  const contentTypeFieldvalue = externalFields?.contentType?.name ?? '';
  const headerTitle = externalFields?.headerTitle || '';
  const subtitle = externalFields?.subtitle;

  console.log(props);
  const alignCenter = alignment === Alignment.Center;

  return (
    <section
      className={cn('rounded-lg shadow-md py-[70px]', {
        'text-center': alignCenter,
      })}
      data-ref="PageHeader"
      data-testid={testId}
    >
      <Container px="6">
        <div className="inline-block max-w-[970px]">
          {contentTypeFieldvalue && (
            <span className="t-primary meta-c mb-4">{contentTypeFieldvalue}</span>
          )}
          <Text field={headerTitle} tag="h1" className="t-primary heading-c" />
          <Text field={subtitle} tag="p" className="t-body sub-heading-b mt-4" />
        </div>
      </Container>
    </section>
  );
};

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  return getStaticPropsForPageBanner(_layoutData);
};
export default Default;
