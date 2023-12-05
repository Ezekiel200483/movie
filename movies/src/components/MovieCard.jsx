// MovieCard.js
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.title}`}>
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
