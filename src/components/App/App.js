import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import AddMoviePage from '../AddMoviePage/AddMoviePage';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path='/detail'>
          <MovieDetail />
        </Route>
        <Route exact path='/addMovie'>
          <AddMoviePage />
        </Route>

      </Router>
    </div>
  );
}


export default App;
