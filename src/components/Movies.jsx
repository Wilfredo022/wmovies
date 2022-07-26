import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useMovieStore } from "../hooks/useMovieStore";
import { SectionCards } from "./SectionCards";

export const Movies = () => {
  const { pageMovie } = useSelector((state) => state?.wmovie);

  const [page, setPage] = useState(2);

  const { getDataMovies } = useMovieStore();

  window.scrollTo(0, 0);

  const handleCLick = (e) => {
    e.preventDefault();
    getDataMovies("movie", page);
    setPage((page) => page + 1);
  };

  return (
    <div className="movies__container">
      <div className="movies__title">
        <h1>Movies</h1>
        <form>
          <input type="text" placeholder="Search movie" autoComplete="off" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="movies__cards">
        {pageMovie?.map((card, index) => {
          if (card.poster_path === undefined) {
            return;
          }

          return <SectionCards key={index * 2} card={card} />;
        })}
      </div>

      <button className="btn-more" onClick={(e) => handleCLick(e)}>
        More
      </button>
    </div>
  );
};
