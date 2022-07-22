import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDataMovies } from "../api/getDataMovies";
import { SectionCards } from "./SectionCards";

export const Tv = () => {
  const { pageTv } = useSelector((state) => state.wmovie);

  window.scrollTo(0, 0);

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
    </div>
  );
};
