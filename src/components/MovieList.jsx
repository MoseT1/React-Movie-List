import MovieItem from "./MovieItem";
import {useState, useEffect} from 'react';

export default function MovieList() {
  const SERVER_API = "https://moviestates.codestates-seb.link/movies/top"
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(SERVER_API)
      .then((response) => response.json())
      .then((data) => setMovieList(data.data))
  }, [])

  return (
    <div className="movie_list">
      {movieList.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </div>
  );
}
