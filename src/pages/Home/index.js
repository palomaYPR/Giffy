import React from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['Desencanto', 'Nation Z', 'Castlevania']

export default function Home() {
    return(
        <React.Fragment>
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