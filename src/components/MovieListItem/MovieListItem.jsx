import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function MovieListItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const viewMovieDetails = () => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movie });
        history.push('/detail');
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={viewMovieDetails} src={movie.poster} alt={movie.title} />
            
        </div>
    )
}



export default MovieListItem;