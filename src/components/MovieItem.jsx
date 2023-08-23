import "./MovieItem.css";
export default function MovieItem({ movie }) {
  return (
    <div id={movie.id} className="movie_item">
      <img src={movie.postImage} />
      <div className="movie_item_content">
        <div>{movie.title}</div>
        <div>{Math.round(movie.averageScore * 10) / 10}</div>
      </div>
    </div>
  );
}
