import { fontSize } from "@mui/system";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ButtonStack from "../components/buttonStack/ButtonStack";
import Heading from "../components/heading/Heading";
import Movie from "../components/movies";
import MovieCarousel from "../components/movies/MovieCarousel";
import { movieApi } from "../services/movieApi";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [activeGenre, setActiveGenre] = useState(35);
  const [activeTvGenre, setActiveTvGenre] = useState(10759);
  // const [leatestMovie, setLatestMovie] = useState([]);
  const genres = [
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },

    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ];

  const tvGenres = [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
  ];

  return (
    <div>
      <Head>
        <title>Psych Shows - stream movies & series for free</title>
        <meta content="https://www.psychshows.com/" property="og:url" />
        <meta
          name="description"
          content="Watch latest movies and tv series for free, watch any movie or show of netflix hulu prime videos disney + hotstar  anytime on your mobile, tablet, pc for free"
        />
        <meta
          property="og:title"
          content={"psychshows - free movies and tv shows"}
        />
        {/* <meta
          name="keywords"
          content="movies,watch movies online,watchnow, tvShows, freemovies, latestmovies, netflix, prime, hulu, disney+hotstar"
        /> */}
        <meta content="website" property="og:type" />
        <meta name="robots" content="index" />
        <link rel="icon" href="/images/logo2.webp" />
      </Head>

      <main>
        <div className={styles.homeContainer}>
          {/* <Heading heading="Latest" />
          <div className={styles.indexCarouselContainer}>
            <Movie movie={leatestMovie} />
          </div> */}
          {/* <div className={styles.homeCarouselSection}>
            <div className={styles.indexCarouselContainer}>
              <MovieCarousel
                other={true}
                activeGenre="top_rated"
                heading="Top Rated"
              />
            </div>
          </div> */}
          <div className={styles.homeCarouselSection}>
            <div className={styles.indexCarouselContainer}>
              <MovieCarousel
                other={true}
                activeGenre="popular"
                type="movies"
                heading="Popular Movies"
              />
            </div>
          </div>
          <div className={styles.homeCarouselSection}>
            <div className={styles.indexCarouselContainer}>
              <MovieCarousel
                other={true}
                activeGenre="popular"
                type="tv"
                heading="Popular Series"
              />
            </div>
          </div>
          <div className={styles.btnStack}>
            {/* <Heading heading="Movies" /> */}
            <h1 style={{ margin: "0 1rem", fontSize: "1.5em" }}>Movies</h1>
            <div className={styles.btnContainer}>
              {genres &&
                genres.map((genre, i) => (
                  <div key={i}>
                    <ButtonStack
                      genre={genre}
                      setActiveGenre={setActiveGenre}
                      activeGenre={activeGenre}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.indexCarouselContainer}>
            <MovieCarousel activeGenre={activeGenre} type="movies" />
          </div>
          <div className={styles.btnStack}>
            <Heading heading="Series" />
            <div className={styles.btnContainer}>
              {tvGenres &&
                tvGenres.map((genre, i) => (
                  <div key={i}>
                    <ButtonStack
                      genre={genre}
                      setActiveGenre={setActiveTvGenre}
                      activeGenre={activeTvGenre}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.indexCarouselContainer}>
            <MovieCarousel activeGenre={activeTvGenre} type="tv" />
          </div>
        </div>
      </main>
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await axios(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
