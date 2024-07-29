import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";


const moviesURL = import.meta.env.VITE_API;

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);

  };

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);

  }, []);

  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title"><strong>MELHORES FILMES</strong></h2>
      <p><center> Em sequencia vai a lista dos filmes mais bem avaliados segundo o site TMDB (themoviedb).</center></p>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;