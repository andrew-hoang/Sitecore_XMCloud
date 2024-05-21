import { buildSearchEngine, getOrganizationEndpoints } from "@coveo/atomic-react";
import { useMemo } from "react";

const useCoveoSearchEgine = () => {
  const engine = useMemo(() => buildSearchEngine({
    configuration: {
      accessToken: process.env.NEXT_PUBLIC_COVEO_ACCESS_TOKEN as string,
      organizationId: process.env.NEXT_PUBLIC_COVEO_ORGANIZATION_ID as string,
      organizationEndpoints: getOrganizationEndpoints(
        process.env.NEXT_PUBLIC_COVEO_ORGANIZATION_ID as string
      ),
    },
  }), []);
  return engine;
};

export default useCoveoSearchEgine;