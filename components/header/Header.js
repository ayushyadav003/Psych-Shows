// import axios from "axios";

import Searchbar from "../../widgets/Searchbar";
import styles from "./Header.module.scss";

// const options = {
//   method: 'GET',
//   url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
//   params: {term: 'bojack', country: 'uk'},
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
//   }
// };

// axios(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerOptions}>
        <span>Home</span>
        <a href="/movies/1">
          <span>Movies</span>
        </a>
        <a href="/tvSeries/1">
          <span>Series</span>
        </a>
        <span>Watchlater</span>
      </div>
      <div className={styles.headerSearchBar}>
        <Searchbar />
      </div>
    </div>
  );
}

export default Header;
