import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    
    return <Navigate to="/" replace />;
  }
  const videoId = extractVideoIdFromLink(movie.trailerLink);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
};
const extractVideoIdFromLink = (link) => {
  // Example link: https://www.youtube.com/watch?v=VIDEO_ID
  const match = link.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[\W])?v(?:\/|=|%)([^"&?\/\s]{11}))/);
  return match ? match[1] : null;
};



export default MovieDetails;
