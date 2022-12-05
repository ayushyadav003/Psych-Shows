import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const url = "https://dontdillydally.herokuapp.com/";
const url = "http://localhost:8080/";
export const movieApi = async (endPoint, arg) => {
  // try {
  //   const response = await axios(url + endPoint, {
  //     params: arg,
  //   });
  //   if (response) {
  //     const {
  //       data: { results },
  //     } = response.data;
  //     return results;
  //   }
  // } catch (error) {
  //   console.log(error);
  //   return [];
  // }
  if (endPoint === "movies") {
    try {
      var query = arg;
      query.api_key = process.env.API_KEY;
      const options = {
        method: "GET",
        url: arg.main
          ? `https://api.themoviedb.org/3/movie/${arg.main}`
          : `https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&with_watch_monetization_types=flatrate`,
        params: query,
      };
      const {
        data: { results },
      } = await axios(options);
      if (results) {
        console.log(results);
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
  // const options = {
  //   method: "GET",
  //   url: `${url}search/all`,
  //   params: {
  //     keyword: searchInput,
  //     page: 1,
  //   },
  // };
  // const {
  //   data: { data },
  // } = await axios(options);
  // if (data) {
  //   return data;
  // }
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
