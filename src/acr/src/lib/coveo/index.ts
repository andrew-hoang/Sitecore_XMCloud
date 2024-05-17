import { buildSearchEngine, getOrganizationEndpoints } from "@coveo/atomic-react";
import { useMemo } from "react";

const useCoveoSearchEgine = () => {
  const engine = useMemo(() => buildSearchEngine({
    configuration: {
      accessToken: "xx82e93609-c9d3-4d90-a84f-82000fa75773",
      organizationId: "americancollegeofradiologysandbox",
      organizationEndpoints: getOrganizationEndpoints(
        "americancollegeofradiologysandbox"
      ),
    },
  }), []);
  return engine;
};

export default useCoveoSearchEgine;