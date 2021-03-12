import MovieList from './MovieList'
import Nav from './Nav'
import './App.css';
import AddMovie from './AddMovie'
import {MovieProvider} from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <MovieList/>
        <AddMovie/>
      </div>
    </MovieProvider>
  );
}

export default App;
