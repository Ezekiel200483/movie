
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';
import House from "../src/images/House of cards.jpeg";
import Ozark from "../src/images/ozark.jpeg";
import Sense from "../src/images/sense.jpeg";
import Alien from "../src/images/Alien.jpeg";
import Murder from "../src/images/Murder.jpeg";
import Sheldon from "../src/images/Sheldon.jpeg";
import Peaky from "../src/images/Peaky.jpeg";
import Code from "../src/images/code.jpeg";
import fight from "../src/images/fight.jpeg";
import titanic from "../src/images/download.jpeg";
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "HOUSE OF CARDS",
      description: "A mind-bending thriller.",
      posterURL: House,
      rating: 4.8,
      trailerLink: "https://www.youtube.com/watch?v=8QnMmpfKWvo",
    },
    {
      title: "OZARK",
      description: "A story of hope and perseverance.",
      posterURL: Ozark,
      rating: 4.9,
      trailerLink: "https://www.youtube.com/watch?v=5hAXVqrljbs",
    },
    {
      title: "Sense8",
      description: "The Joker wreaks havoc in Gotham.",
      posterURL: Sense,
      rating: 4.7,
      trailerLink: "https://www.youtube.com/watch?v=iKpKAlbJ7BQ",
    },
    {
      title: "The Alienist",
      description: "Quentin Tarantino's masterpiece.",
      posterURL: Alien,
      rating: 4.6,
      trailerLink: "https://www.youtube.com/watch?v=YtzgFRBvRy8",
    },
    {
      title: "How to Get away with Murderer ",
      description: "A classic crime drama.",
      posterURL: Murder,
      rating: 4.9,
      trailerLink: "https://www.youtube.com/watch?v=dkb-aBaxkVk",
    },
    {
      title: "Young Sheldon",
      description: "Life is like a box of chocolates.",
      posterURL: Sheldon,
      rating: 4.5,
      trailerLink: "https://www.youtube.com/watch?v=VA8j38EZpMc",
    },
    {
      title: "Peaky Blinders",
      description: "Welcome to the real world.",
      posterURL: Peaky,
      rating: 4.7,
      trailerLink: "https://www.youtube.com/watch?v=Ruyl8_PT_y8",
    },
    {
      title: "Criminal Code",
      description: "A true story of humanity.",
      posterURL: Code,
      rating: 4.8,
      trailerLink: "https://www.youtube.com/watch?v=8IIJC-T4myo",
    },
    {
      title: "Fight Club",
      description: "The first rule of Fight Club is...",
      posterURL: fight,
      rating: 4.5,
      trailerLink: "https://www.youtube.com/watch?v=O1nDozs-LxI",
    },
    {
      title: "Titanic",
      description: "A tale of love and tragedy.",
      posterURL: titanic,
      rating: 4.6,
      trailerLink: "https://www.youtube.com/watch?v=I7c1etV7D7g",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerLink: "",
  });

  const handleTitleChange = (title) => {
    setTitleFilter(title);
    filterMovies(title, rateFilter);
  };

  const handleRateChange = (rate) => {
    setRateFilter(rate);
    filterMovies(titleFilter, rate);
  };

  const filterMovies = (title, rate) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rate || movie.rating >= rate)
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    filterMovies(titleFilter, rateFilter);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Filter
                onTitleChange={handleTitleChange}
                onRateChange={handleRateChange}
              />
              <MovieList movies={filteredMovies} />
              <div>
                <h2>Add a New Movie</h2>
              </div>
              <MovieForm
                newMovie={newMovie}
                handleInputChange={handleInputChange}
                addMovie={addMovie}
              />
            </div>
          }
        />
        <Route
          path="/movie/:title"
          element={
            <MovieDetails
              movies={movies}
              filterMovies={filterMovies}
              setTitleFilter={setTitleFilter}
              setRateFilter={setRateFilter}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
