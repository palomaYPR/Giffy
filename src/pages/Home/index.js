import React from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/index'
import { useGifs } from 'hooks/useGifs'
import TrendingSearchers from 'components/TrendingSearchers'
import SearchForm from 'components/SearchForm'

export default function Home() {    
    const [_, pushLocation] = useLocation()
    const { gifs } = useGifs()    

    const handleSubmitSearchForm = (( {keyword} ) => {
        // navegar a otra ruta        
        pushLocation(`/search/${keyword}`)
    })    

    return(
        <React.Fragment>
            <SearchForm onSubmit={ handleSubmitSearchForm }/>
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