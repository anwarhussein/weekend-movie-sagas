import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

function AddMoviePage({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [movieTitle, setMovieTitle] = useState('')
    const [moviePoster, setMoviePoster] = useState('')
    const [movieDescription, setMovieDescription] = useState('')
    
    const [selectOption, setSelectOption] = useState('');
    
    const handleSave = () =>{
        dispatch({type: 'FETCH_MOVIE', 
                 payload:{title:movieTitle,
                         poster:moviePoster,
                         description:movieDescription,
                         option:selectOption} 
                        });
       history.push('/');
    }
    
    

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
                    onSelect={(event) => setSelectOption(event.target.value)}>
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

                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>

            </form>
        </div>
    )
}

export default AddMoviePage

