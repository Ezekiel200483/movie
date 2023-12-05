// MovieForm.js
import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleAddMovie = () => {
    addMovie(newMovie);
    
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
      trailerLink: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MovieForm;
