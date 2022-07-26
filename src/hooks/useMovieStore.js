import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import apiConfig from "../api/apiConfig";
import {
  activeFilmData,
  activeFilmDataCredits,
  activeFilmDataTrailer,
  onPageMovie,
  onPageTv,
  onTrending,
  onTv,
} from "../store/wmovies";

export const useMovieStore = () => {
  const { baseUrl, apiKey } = apiConfig;
  const dispatch = useDispatch();

  const getDataTrending = async (type, time, action) => {
    try {
      const req = await fetch(
        `${baseUrl}trending/${type}/${time}?api_key=${apiKey}`
      );
      const resp = await req.json();

      if (action == "onTrending") {
        dispatch(onTrending(resp.results));
        return;
      }

      if (action == "onTv") {
        dispatch(onTv(resp.results));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataMovies = async (action, page = 1) => {
    try {
      const req = await fetch(
        `${baseUrl}${action}/popular?api_key=${apiKey}&language=en-US&page=${
          action == "movie" ? page : page
        }`
      );
      const resp = await req.json();

      const data = await resp.results.map((i) => ({
        ...i,
        media_type: action,
      }));

      if (action == "movie") {
        dispatch(onPageMovie(data.slice(0, 17)));
        return;
      }

      if (action == "tv") {
        dispatch(onPageTv(data.slice(0, 17)));
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataId = async (id, media) => {
    try {
      const res = await fetch(
        `${baseUrl}${media}/${id}?api_key=${apiKey}&language=en-US`
      );
      const result = await res.json();

      dispatch(activeFilmData(result));
      return { ...result };
    } catch (error) {
      console.log(error);
    }
  };

  const getDataIdCredits = async (id, media) => {
    //https://api.themoviedb.org/3/movie/718789/credits?api_key=c61d3fbfafe75c1c1e9c9afe0ba19eb3&language=en-US

    try {
      const res = await fetch(
        `${baseUrl}${media}/${id}/credits?api_key=${apiKey}&language=en-US`
      );
      const result = await res.json();

      dispatch(activeFilmDataCredits(result.cast));
    } catch (error) {
      console.log(error);
    }
  };

  const getDataIdVideos = async (id, media) => {
    //https://api.themoviedb.org/3/movie/718789/credits?api_key=c61d3fbfafe75c1c1e9c9afe0ba19eb3&language=en-US

    try {
      const res = await fetch(
        `${baseUrl}${media}/${id}/videos?api_key=${apiKey}&language=en-US`
      );
      const result = await res.json();

      const trailer = await result.results.filter((t) => t.type === "Trailer");

      dispatch(activeFilmDataTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //propiedades
    //metodos
    getDataTrending,
    getDataMovies,
    getDataId,
    getDataIdCredits,
    getDataIdVideos,
  };
};
