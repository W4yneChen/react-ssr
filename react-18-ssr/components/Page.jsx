import React, { Suspense, lazy } from 'react';

const Data = lazy(() => import('./Data'));
const Loading = () => <div>Loading...</div>;

export const Page = () => {
  return (
    <div>
      <div onClick={() => console.log('page')}>Page</div>
      <Suspense fallback={<Loading />}>
        <Data />
      </Suspense>
    </div>
  )
}