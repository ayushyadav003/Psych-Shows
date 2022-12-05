import { Skeleton } from "@mui/material";
import { padding } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { currentMovie } from "../../redux/features/movieDetailSlice";
import { movieApi } from "../../services/movieApi";
import Heading from "../heading/Heading";
import styles from "../movies/Movies.module.scss";

function MovieCarousel({ activeGenre, type, other, heading }) {
  const [moviesByGenre, setMoviesByGenre] = useState();
  const [loader, setLoader] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.6,
      slidesToSlide: 2,
    },
  };

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

  return (
    <div style={{ margin: "0" }}>
      {loader ? (
        <Skeleton variant="rectangular" width={600} height={50} />
      ) : (
        <Heading heading={heading} />
      )}

      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {moviesByGenre
          ? moviesByGenre.map((movie, i) => {
              const title = movie?.original_title || movie?.original_name;
              return (
                <div
                  onClick={() => {
                    dispatch(currentMovie(movie));
                    router.push(`/showdetail/${movie.original_title}`);
                  }}
                  key={i}
                  className={styles.movieContainer}
                  style={{ marginTop: "1rem" }}
                >
                  <div className={styles.card}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.original_title}
                      width="200"
                      height="100%"
                      loading="lazy"
                    />
                    <div className={styles.inner}>
                      <div style={{ display: "flex" }}>
                        <span>
                          <h2>{title}</h2>
                        </span>
                      </div>
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
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
