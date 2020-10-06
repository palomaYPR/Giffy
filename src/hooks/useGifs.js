import {useContext, useState, useEffect} from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

export function useGifs ({ keyword } = { keyword : null }) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)    

    useEffect( function () {
        setLoading(true)
        //recuperamos la keyword del localStorage 
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword : keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword en localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])
    
    return { loading, gifs}
}