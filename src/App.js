import {useEffect, useState} from "react";
import myClasses from "./myClasses";
import SingleMovie from './components/SingleMovie'
import Header from "./components/Header";


/* API URL */
const API_URL = `http://www.omdbapi.com?apikey=10317c85`;
/* 
  MAIN MOVIE APP FUNCTION
*/



function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('spiderman');
  }, []);
  return ( 
  <>
      <Header myClasses={myClasses} state={{search: setSearch, movie: searchMovies, searchValue: search }}/>
  
      {
        movies.length > 0 ?

        (<div className="w-full flex justify-evenly flex-wrap bg-gray-800 p-5">
         {movies.map(movie=> (<SingleMovie movie={movie} myClasses={myClasses}/>))} 
        </div>) : 

       ( <div>
          <p className={myClasses.badge.warning}>
            <span className="bg-white text-transparent rounded-full w-5 h-5 mr-2">i</span>Sorry No movies found!!
          </p>
        </div>)

      }
  </>
 );
}

export default App;