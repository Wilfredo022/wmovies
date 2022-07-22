import React, { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getDataId } from "../api/getDataId";

export const SelectionCard = () => {
  const { id, media_type } = useSelector((state) => state.wmovie.activeFilm);

  useEffect(() => {
    getDataId(id, media_type);
  }, [id, media_type]);

  /* const {
    backdrop_path,
    budget,
    genres,
    original_title,
    popularity,
    overview,
    poster_path,
    production_companies,
    release_date,
    revenue,
    tagline,
  } */

  return (
    <div>
      <h1>s</h1>
      <p>yes</p>
    </div>
  );
};
