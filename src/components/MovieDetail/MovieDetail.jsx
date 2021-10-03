import React from 'react'
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'

function MovieDetail() {

    const movieDetails = useSelector(store => store.selectedMovie)
    const history = useHistory();
    
    const backToMovieList = () =>{
        history.push('/addMovie')

    }

    return (
        <div>
            <h2>Details for {movieDetails.title}</h2>
            <img src={movieDetails.poster}/>
            <p>{movieDetails.description}</p>
            <button onClick={backToMovieList}>Add Movie</button>
        </div>
    )
}


export default MovieDetail

