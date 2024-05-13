import { buildSearchEngine, getOrganizationEndpoints } from "@coveo/atomic-react";
import { useMemo } from "react";

const useCoveoSearchEgine = () => {
  const engine = useMemo(() => buildSearchEngine({
    configuration: {
      accessToken: process.env.COVEO_ACCESS_TOKEN as string,
      organizationId: process.env.COVEO_ORGANIZATION_ID as string,
      organizationEndpoints: getOrganizationEndpoints(
        process.env.COVEO_ORGANIZATION_ENDPOINT as string
      ),
      search: {
        pipeline: 'UI_KIT_E2E',
        searchHub: 'UI_KIT_E2E',
      },
    },
  }), []);
  return engine;
};

export default useCoveoSearchEgine;