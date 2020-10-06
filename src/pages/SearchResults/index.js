import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/'
import Spinner from '../../components/Spinner'
import {useGifs} from '../../hooks/useGifs'

export default function SearchResults ({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    //const { loading, gifs } = useGifs({ keyword })
        
    return <React.Fragment>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs}/>
        }
    </React.Fragment>
}