import React, {useEffect, useState} from 'react';
import Gif from './Gif'
import getGifts from '../services/getGifs'

export default function ListOfGifs ({ params }) {
    const { keyword } = params    
    const [ gifs, setGifs ] = useState({ loading: false, results: []})

    useEffect( function () { 
        setGifs(actualGifs => ({ loading : true, results : gifs.results }))   
        getGifts({ keyword })
            .then(gifs => {
                setGifs({ loading : false, results : gifs })                
            })            
    }, [keyword])

    if(gifs.loading) return <i>Cargando 🎮</i>

    return <React.Fragment>
        {
            gifs.results.map(({id, title, url}) => 
            <Gif 
                id = {id}    
                key = {id}          
                title = {title}  
                url = {url}           
            />       
        ) 
        }
    </React.Fragment>   
}