import React from 'react'
import ListOfGifs from 'components/ListOfGifs/'
import Spinner from 'components/Spinner'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'

export default function SearchResults ({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })  
    const {isNearScreen, fromRef} = useNearScreen()
        
    //const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <React.Fragment>
        {loading
            ? <Spinner />            
            : <>
                <h3 className='App-title'>{ decodeURI(keyword) }</h3>
                <ListOfGifs gifs={gifs}/>
                <div id='visor' ref={fromRef}></div>
                </>
        }        
    </React.Fragment>
}