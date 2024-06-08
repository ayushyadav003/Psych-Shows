import { Skeleton } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { currentMovie } from "../../redux/features/movieDetailSlice";
import { movieApi } from "../../services/movieApi";
import Heading from "../heading/Heading";
import styles from "../movies/Movies.module.scss";

function MovieCarousel({ activeGenre, type, other, heading }) {
  const [moviesByGenre, setMoviesByGenre] = useState();
  const [allMovieData, setAllMovieData] = useState("");
  const [loader, setLoader] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const sliderRef = useRef(null);

  useEffect(() => {
    getMoviesByGenre();
  }, [activeGenre]);

  const getMoviesByGenre = async () => {
    if (activeGenre) {
      setLoader(true);
      const data = await movieApi(
        type,
        other ? { main: activeGenre } : { with_genres: activeGenre }
      );
      setMoviesByGenre(data);
      setLoader(false);
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 700;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 700;
    }
  };

  return (
    <div style={{ margin: "0" }}>
      <Head>
        <meta
          name="keywords"
          content={
            moviesByGenre &&
            `${moviesByGenre.map((movie) => {
              let keyword =
                movie?.title ||
                movie?.original_title ||
                movie?.name ||
                movie?.original_name;
              return keyword;
            })},movies,watch movies online,watch now, tvShows, free movies, latest movies, netflix, prime, hulu, disney+hotstar`
          }
        />
      </Head>
      {loader ? (
        <Skeleton variant="rectangular" width={300} height={50} />
      ) : (
        <Heading
          heading={heading}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
      )}

      <div className={styles.slider} ref={sliderRef}>
        {moviesByGenre
          ? moviesByGenre.map((movie, i) => {
              const title =
                movie?.title ||
                movie?.original_title ||
                movie?.name ||
                movie?.original_name;
              return (
                <div
                  onClick={() => {
                    dispatch(currentMovie(movie));
                    router.push(`/showdetail/${type}/${movie.id}`);
                  }}
                  key={i}
                  className={styles.movieContainer}
                  style={{ marginTop: "1rem" }}
                >
                  <div className={styles.card}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={title}
                      width="200"
                      height="100"
                      loading="lazy"
                    />
                    <div className={styles.inner}>
                      <h2>{title}</h2>
                    </div>
                  </div>
                </div>
              );
            })
          : [...Array(7)].map((item, i) => (
              <div className={styles.movieContainer} key={i}>
                <div className={styles.card}>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default MovieCarousel;
