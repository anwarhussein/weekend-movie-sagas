import React from 'react'
import { useState } from 'react'

function AddMoviePage() {

    const [movieTitle, setMovieTitle] = useState('')
    const [moviePoster, setMoviePoster] = useState('')
    const [movieDescription, setMovieDescription] = useState('')
    let genreOptions = [
        {name:'adventure', value: 'Adventure' },{name:'animated',value: null},
        {name:'biographical',value: null},{name:'comedy',value:null},
        {name:'disaster',value: null},{name:'drama',value:null},
        {name:'epic',value: null},{name:'fantasy',value:null},
        {name:'musical',value: null},{name:'romantic',value:null},
        {name:'science fiction',value: null},{name:'space-opera',value:null}
    ]

    const [selectOption, setSelectOption] = useState(genreOptions[0]);

    return (
        <div>
            <h2>Add Movie</h2>

            <form>

                <input type="text"
                    name="movie title"
                    value={movieTitle}
                    onChange={(event) => setMovieTitle(event.target.value)}
                    placeholder="Movie title" />

                <input type="text"
                    name="poster/URL"
                    value={moviePoster}
                    onChange={(event) => setMoviePoster(event.target.value)}
                    placeholder="Movie poster" />

                <textarea name="movie description"
                    cols="" rows=""
                    value={movieDescription}
                    onMouseOver={(event) => setMovieDescription(event.target.value)}>

                </textarea>
                <label htmlFor="Genres">Choose a Genre</label>
                <select name="genres" 
                value={selectOption}
                onChange={(event =>setSelectOption(event.target.value))}>
                {genreOptions.map((o) =>{
                    return<option key={o.value} value={o.value}></option>
                })}
                   
                </select>

                <button>Save</button>
                <button>Cancel</button>

            </form>
        </div>
    )
}

export default AddMoviePage

