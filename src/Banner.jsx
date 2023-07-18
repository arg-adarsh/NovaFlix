import React, { useEffect, useState } from "react";
import "./banner.css";

const Banner = ({ movie }) => {
  const [more, setMore] = useState(false);
  useEffect(() => {
    setMore(false);
  }, [movie]);

  console.log(movie);
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {!more ? truncate(movie?.overview, 150) : movie?.overview}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setMore(true);
            }}
          >
            {!more &&
              truncate(movie?.overview, 150)?.length !==
                movie?.overview?.length &&
              "more"}
          </span>
        </h1>
      </div>
      <div className="banner-fade-button" />
    </header>
  );
};
export default Banner;
