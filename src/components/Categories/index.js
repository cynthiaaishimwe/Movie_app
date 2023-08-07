
import React, { useState, useEffect } from "react";
import './style.css';
const API= process.env.REACT_APP_API_KEY

const MoviesInCategorie = ({ category, setCategory }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
  
    

    
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API}`)
      .then(response => response.json())
      .then(response=> setGenres(response.genres))
      .catch(error => console.error("Error fetching genres:", error));
  }, []);

  const activeCategory = {
    backgroundColor: "#da68a0"
  };

  return (
    <div className="btns">
      <button
        style={category === "" ? activeCategory : null}
        onClick={() => setCategory("")}
      >
        ALL
      </button>

      {genres.map(genre => (
        <button
          key={genre.id}
          style={category === genre.id.toString() ? activeCategory : null}
          onClick={() => setCategory(genre.id.toString())}
        >
          {genre.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default MoviesInCategorie
