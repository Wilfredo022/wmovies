import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMovieStore } from "../hooks/useMovieStore";
import { SectionCards } from "./SectionCards";

export const Tv = () => {
  const { pageTv } = useSelector((state) => state.wmovie);

  const [NumPage, setNumPage] = useState(2);

  const { getDataMovies } = useMovieStore();

  window.scrollTo(0, 0);

  const handleCLick = (e) => {
    e.preventDefault();
    getDataMovies("tv", NumPage);
    setNumPage((NumPage) => NumPage + 1);
  };

  return (
    <div className="movies__container">
      <div className="movies__title">
        <h1>Tv</h1>
        <form>
          <input type="text" placeholder="Search tv" autoComplete="off" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="movies__cards">
        {pageTv?.map((card) => {
          if (card.poster_path === undefined) {
            return;
          }
          return <SectionCards key={card.id} card={card} />;
        })}
      </div>

      <button className="btn-more" onClick={(e) => handleCLick(e)}>
        More
      </button>
    </div>
  );
};
