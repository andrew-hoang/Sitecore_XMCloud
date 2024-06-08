import { CortexTestData } from 'components/ACR/CortexTest/CortexTest.props';
import { getCortexData } from 'src/utils/acrCortexClient';

export const getStaticPropsForCortexTest = async (): Promise<CortexTestData> => {
  const CaseInPointItem = await getCortexData();
  const model: CortexTestData = {
    externalFields: {
      cipItem: CaseInPointItem,
    },
  };

  return model;
};
