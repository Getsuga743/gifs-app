import React, { Suspense } from 'react';
import Spinner from '../Spinner';
import { useNearScreen } from '../../hooks/useNearScreen';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

export function LazyTrending() {
  const { show, elementRef } = useNearScreen({});
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingSearches /> : null}
      </Suspense>

    </div>
  );
}
