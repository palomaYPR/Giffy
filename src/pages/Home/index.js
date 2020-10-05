import React, {useState} from 'react'
import { Link, useLocation } from 'wouter'

const POPULAR_GIFS = ['Desencanto', 'Nation Z', 'Castlevania']

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation('')
    

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
                <input onChange={handleChange} type='text' value={keyword}></input>
            </form>
            <h3 className="App-title"> Los Gifs más populares</h3>            
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de { popularGif }</Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}