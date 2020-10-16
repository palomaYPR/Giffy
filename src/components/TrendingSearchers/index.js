import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearchers'))

export default function LazyTrending () {        
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return <div ref={fromRef}>
        <Suspense fallback={null}>
        { isNearScreen ? <TrendingSearches /> : null }
        </Suspense>
    </div>
}