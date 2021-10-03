import React from 'react'
import {useSelector} from 'react-redux';

function MovieDetail() {

    const movieDetails = useSelector(store => store.selectedMovie)
    
    

    return (
        <div>
            <h2>Details for {movieDetails.title}</h2>
            <img src={movieDetails.poster}/>
            <p>{movieDetails.description}</p>
        </div>
    )
}


export default MovieDetail

