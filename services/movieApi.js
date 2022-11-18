import axios from "axios";

const url = "https://dontdillydally.herokuapp.com/";
// const url = 'http://localhost:8080'
export const movieApi = async (endPoint, page) => {
  try {
    const response = await axios(url + endPoint, {
      params: { page },
    });
    if (response.status === 200) {
      const {
        data: { results },
      } = response.data;
      return results;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

// search api
export const searchApi = async (searchInput) => {
  const options = {
    method: "GET",
    url: `${url}search/all`,
    params: {
      keyword: searchInput,
      page: 1,
    },
  };
  const {
    data: { data },
  } = await axios(options);
  if (data) {
    return data;
  }
};
