import React from 'react'
import { useState } from 'react'

function AddMoviePage() {

    const [movieTitle, setMovieTitle] = useState('')
    const [moviePoster, setMoviePoster] = useState('')
    const [movieDescription, setMovieDescription] = useState('')

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
                <select name="genres" id="genres">
                    <option value="adventure">Adventure</option>
                    <option value="animated">Animated</option>
                    <option value="biographical">Biographical</option>
                    <option value="comedy">Comedy</option>
                    <option value="disaster">Disaster</option>
                    <option value="drama">Drama</option>
                    <option value="epic">Epic</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="musical">Musical</option>
                    <option value="romantic">Romantic</option>
                    <option value="science fiction">Science Fiction</option>
                    <option value="space-opera">Space-Opera</option>
                </select>

                <button>Save</button>
                <button>Cancel</button>

            </form>
        </div>
    )
}

export default AddMoviePage

