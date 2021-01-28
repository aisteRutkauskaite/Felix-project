import "./index.scss";
import Button from "../Button";

function MovieCard({
  title,
  image,
  description,
  toggleFavourites,
  favorites,
  id,
}) {
  return (
    <div className="movie-container">
      <div className="movie-img-container">
        <img src={image} alt="movie img" />
      </div>
      <div className="movie-card-text">
        <h3>{title}</h3>
        <p className="movie-description">{description}</p>
        <Button
          size="small"
          isTransperent={favorites.includes(id) ? true : false}
          onClick={() => toggleFavourites(id)}
        >
          {favorites.includes(id) ? "Remove" : "Favorite"}
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;
