import React, {useState, useEffect, useRef} from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from '../Category'

function TrendingSearches(){
    const [trends, setTrends] = useState([])
    useEffect(function (){
        getTrendingTerms().then(setTrends)
    }, [])
    return <Category name='Tendencias' options={trends} />
}

function useNearScreen ( {elementRef} ) {
    const [isNearScreen, setShow] = useState(false)

    useEffect(function (){
        let observer
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: '100px'
            })
    
            observer.observe(elementRef.current)
        })           

        return () => observer && observer.disconnect()
    })

    return isNearScreen
}

export default function LazyTrending () {    
    const elementRef = useRef()
    const isNearScreen = useNearScreen({elementRef})

    return <div ref={elementRef}>
        { isNearScreen ? <TrendingSearches /> : null }
    </div>
}