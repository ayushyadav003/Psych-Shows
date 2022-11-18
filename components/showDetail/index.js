import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./movieDetail.module.scss";
// import DownloadOption from "./DownloadOption.";

function ShowDetail() {
  const [movies, setMovies] = useState();
  return (
    <div className={styles.movieDetailContainer}>
      {movies && (
        <div className={styles.inner1}>
          <img src={movies.Poster} width="300" height="300" loading="lazy" />
          <div className={styles.details}>
            <h1>{movies.Title}</h1>
            <p>{movies.Plot}</p>
            <p>
              <span>Genre</span> - {movies.Genre}
            </p>
            <p>
              <span>Actors</span> - {movies.Actors}
            </p>
            <p>
              <span>IMDB</span> - {movies.imdbRating}
            </p>
            <p>
              <span>Released</span> - {movies.Released}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowDetail;
