import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { AtomicSearchInterface, AtomicSearchLayout, AtomicResultList, Result } from "@coveo/atomic-react";

import useCoveoSearchEgine from 'src/lib/coveo';

const MyTemplate = (result: Result) => {
  console.log("mounted")
  return (<div>{JSON.stringify(result)}</div>)
};

const Coveo: NextPage = (): JSX.Element => {
  const engine = useCoveoSearchEgine();

  return (
    <AtomicSearchInterface engine={engine}>
      <AtomicSearchLayout>
        <AtomicResultList
          display="grid"
          imageSize="large"
          template={MyTemplate}
        />
      </AtomicSearchLayout>
    </AtomicSearchInterface>
  );
};

export default dynamic(() => Promise.resolve(Coveo), {
  ssr: false,
});
