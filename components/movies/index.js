import styles from "./Movies.module.scss";
import Skeleton from "@mui/material/Skeleton";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { currentMovie } from "../../redux/features/movieDetailSlice";
import Image from "next/image";
import { useEffect, useState } from "react";

function Movies({ movies, pageType }) {
  const router = useRouter();
  const [moviesList, setMoviesList] = useState([]);
  const page = parseInt(router?.query?.slug || "1", 10);
  const dispatch = useDispatch();

  useEffect(() => {
    setMoviesList(movies);
  }, [movies]);

  return (
    <>
      <div className={styles.movieContainer}>
        {moviesList
          ? moviesList.map((movie, i) => {
              const poster = movie.poster_path || movie.backdrop_path;
              const title =
                movie?.title ||
                movie?.name ||
                movie?.original_title ||
                movie?.original_name;
              return (
                <div
                  key={i}
                  onClick={() => {
                    dispatch(currentMovie(movie));
                    router.push(
                      `/showdetail/${pageType || movie.media_type}/${movie.id}`
                    );
                  }}
                >
                  <div className={styles.card}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${poster}`}
                      alt={title}
                      width="250"
                      height="250"
                      // loading="lazy"
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
          : [...Array(20)].map((e, i) => (
              <div className={styles.card} key={i}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </div>
            ))}
      </div>
      {pageType && (
        <div className={styles.pagination}>
          <Pagination
            count={500}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={(event, value) => {
              setMoviesList([]);
              router.push(`/${pageType}/${value}`);
            }}
          />
        </div>
      )}
    </>
  );
}

export default Movies;
