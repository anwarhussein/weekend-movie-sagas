import React from 'react'
import {useSelector} from 'react-redux';

function MovieDetail() {

    const movieDetails = useSelector(store => store.selectedMovie)
    return (
        <div>
            <h2>Details for {movieDetails}</h2>
            <div>{JSON.stringify(movieDetails)}</div>
        </div>
    )
}


export default MovieDetail

