import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function AddMoviePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [movieTitle, setMovieTitle] = useState('')
    const [moviePoster, setMoviePoster] = useState('')
    const [movieDescription, setMovieDescription] = useState('')

    const [genres] = useState([
        {name:'Adventure', value: 'Adventure'}, {name:'Animated', value: 'Animated'},
        {name:'Biographical', value: 'Biographical'}, {name:'Comedy', value: 'Comedy'},
        {name:'Disaster', value: 'Disaster'}, {name:'Drama', value: 'Drama'},
        {name:'Epic', value: 'Epic'},  {name:'Fantasy', value: 'Fantasy'},
        {name:'Musical', value: 'Musical'},  {name:'Romantic', value: 'Romantic'},
        {name:'Science fiction', value: 'Science fiction'}, {name:'Space-opera', value: 'Space-opera'}

    ]);

    const handleSave = () => {
        dispatch({
            type: 'POST_MOVIE_TO_SERVER',
            payload: {
                title: movieTitle,
                poster: moviePoster,
                description: movieDescription
            }
        

        });
        dispatch({type:'POST_GENRE_TO_SERVER',
                  payload: genres.entries});
        setMovieTitle('');
        setMoviePoster('');
        setMovieDescription('');
        history.push('/');
    }

    const handleCancel = () => {
        history.push('/')
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
                    onChange={(event) => setMovieDescription(event.target.value)}>

                </textarea>
                <label htmlFor="Genres">Choose a Genre</label>
                <select name="genres">
                
                    {genres.map(item =>(
                        <option
                        key={item.value}
                        value={item.value}
                        >
                            {item.name}
                        </option>
                    ))}
                    
                </select>

                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>

            </form>
        </div>
    )
}

export default AddMoviePage

