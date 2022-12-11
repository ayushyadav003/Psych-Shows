import axios from "axios";

// const url = "https://dontdillydally.herokuapp.com/";
// const url = "http://localhost:8080/";
export const movieApi = async (endPoint, arg) => {
  if (endPoint === "movies") {
    try {
      var query = arg;
      query.api_key = process.env.API_KEY;
      const options = {
        method: "GET",
        url: arg.main
          ? `https://api.themoviedb.org/3/movie/${arg.main}`
          : `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&include_adult=false&include_video=false&&with_watch_monetization_types=flatrate`,
        params: query,
      };
      const {
        data: { results },
      } = await axios(options);
      if (results) {
        return results;
      }
    } catch (error) {
      console.log("error...", error);
    }
  } else {
    try {
      var query = arg;
      query.api_key = process.env.API_KEY;
      const options = {
        method: "GET",
        url: arg.main
          ? `https://api.themoviedb.org/3/tv/${query.main}`
          : `https://api.themoviedb.org/3/discover/tv`,
        params: query,
      };
      const {
        data: { results },
      } = await axios(options);
      if (results) {
        // console.log(results);
        return results;
      }
    } catch (error) {
      console.log("error...", error);
    }
  }
};

// search api
export const searchApi = async (searchInput) => {
  try {
    const keyword = searchInput;
    // const page = req.query.page;
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/multi",
      params: {
        api_key: process.env.API_KEY,
        query: keyword,
        // page: page,
      },
    };
    const { data } = await axios(options);
    if (data) {
      return data;
    }
  } catch (error) {
    console.log("error...", error);
  }
};
export const detailApi = async (endPoint, movie_id) => {
  if (endPoint !== "tv") {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie_id}`,
        params: {
          api_key: process.env.API_KEY,
        },
      };
      const { data } = await axios(options);
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error...", error);
    }
  } else {
    try {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${movie_id}`,
        params: {
          api_key: process.env.API_KEY,
        },
      };
      const { data } = await axios(options);
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error...", error);
    }
  }
};
// https://api.themoviedb.org/3/movie/{movie_id}
