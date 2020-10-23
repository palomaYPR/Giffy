import React, {useCallback} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/index'
import { useGifs } from 'hooks/useGifs'
import TrendingSearchers from 'components/TrendingSearchers'
import SearchForm from 'components/SearchForm'

export default function Home() {    
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()    

    const handleSubmit = useCallback(( {keyword} ) => {
        // navegar a otra ruta        
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])    

    return(
        <React.Fragment>
            <SearchForm onSubmit={ handleSubmit }/>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>Última búsqueda</h3>
                    <ListOfGifs gifs={gifs}/>
                </div>
                <div className='App-category'>
                    <TrendingSearchers />
                </div>
            </div>                        
        </React.Fragment>
    )
}