import MovieItem from "./MovieItem";
import movieList from "../static/movieList";

export default function MovieList() {
  console.log(movieList.data);
  return (
    <div className="movie_list">
      {movieList.data.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </div>
  );
}
