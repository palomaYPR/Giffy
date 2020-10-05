import React, {useState} from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['Desencanto', 'Nation Z', 'Castlevania']

export default function Home() {
    const [keyword, setKeyword] = useState('')

    return(
        <React.Fragment>
            <h3 className="App-title"> Los Gifs más populares</h3>
            <form>
                <input type='text' value={keyword}></input>
            </form>
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