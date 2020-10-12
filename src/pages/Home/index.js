import React, {useState} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/index'
import { useGifs } from '../../hooks/useGifs'
import TrendingSearchers from '../../components/TrendingSearchers'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>                
                <button>Search</button>
                <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}></input>
            </form>
            
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