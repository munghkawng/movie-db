import { useState, useEffect } from "react";
import { api_endpoint_for_tmdb, api_endpoint_key } from "./context";
import axios from "axios";

const useFetch = (urlParams, currentPage) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchTrendingMovies = async (url) => {
    try {
      const response = await axios(url);

      if (response.status === 200) {
        const { data } = response;

        setData(data);

        setIsLoading(false);
      } else {
        setError({ msg: "request failed" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies(
      `${api_endpoint_for_tmdb}${urlParams}${api_endpoint_key}&page=${currentPage}`
    );
  }, [currentPage]);
  return { isLoading, data, error };
};

export default useFetch;
