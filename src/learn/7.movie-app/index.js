import BasicStyle from "../index.module.css";
import { useState, useEffect } from "react";
import Movie from "./Movie";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // ver 1 : fetch
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  // ver 2 : async await

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={BasicStyle.box}>
      <h1>Movie App</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            genres={movie.genres}
            runtime={movie.runtime}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieApp;
