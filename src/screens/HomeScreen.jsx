import React, { useEffect, useState } from "react";
import "./homeScreen.css";
import Navbar from "../Navbar";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";
import axios from "../Axios";

const HomeScreen = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBanner(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="homeScreen">
      <Navbar />
      <Banner movie={banner} />

      <Row
        setBanner={setBanner}
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        setBanner={setBanner}
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      />
      <Row
        setBanner={setBanner}
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
      />
      <Row
        setBanner={setBanner}
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      {/* <Row  title="Comedy Movies" fetchURL={requests.fetchComedyMovies} /> */}
      <Row
        setBanner={setBanner}
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
      />
      <Row
        setBanner={setBanner}
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
      />
      <Row
        setBanner={setBanner}
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
