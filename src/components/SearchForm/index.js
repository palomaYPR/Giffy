import React, {useState} from 'react'
import css from './SearchForm.module.css'

function SearchForm({ onSubmit }){
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({ keyword })
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <form onSubmit={handleSubmit} className={css["c-search"]}>                
                <button className={css["c-search-btn"]}>Search</button>
                <input className={css["c-search-input"]} placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}>                    
                </input>
            </form>
    )
}

export default React.memo(SearchForm)