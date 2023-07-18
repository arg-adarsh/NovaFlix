import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "./Axios";

const Row = ({ setBanner, title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie?.poster_path) ||
              (!isLargeRow && movie?.backdrop_path)) && (
              <img
                onClick={() => {
                  setBanner(movie);
                }}
                alt="movie"
                key={movie.id}
                className={`row-poster ${isLargeRow && "row-large-poster"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              />
            )
          // ))
        )}
      </div>
    </div>
  );
};

export default Row;
